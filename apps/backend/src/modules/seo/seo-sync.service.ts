/**
 * Orchestrates a full SEO data sync for a client:
 *  1. Resolve and refresh OAuth tokens for GSC + GA4.
 *  2. Pull data from GSC (summary, top pages, top queries, indexed pages).
 *  3. Pull data from GA4 (monthly organic sessions, user/bounce summary).
 *  4. Update rank history for all tracked keywords.
 *  5. Persist a SeoSnapshot.
 *  6. Regenerate the action queue.
 */

import type { Prisma } from "@prisma/client";
import { SeoRepository } from "./seo.repository";
import {
  SeoIntegrationNotConnectedError,
  SeoSyncFailedError,
} from "./seo.errors";
import { resolveAccessToken } from "./google-oauth.service";
import type { GoogleOAuthCredentials } from "./google-oauth.service";
import {
  fetchGscSummary,
  fetchKeywordPosition,
  fetchIndexedPageCount,
} from "./search-console.service";
import { fetchOrganicSessionsByMonth, fetchGa4Summary } from "./ga4.service";

const GSC_PROVIDER = "Google Search Console";
const GA4_PROVIDER = "Google Analytics 4";

export class SeoSyncService {
  constructor(private readonly repo: SeoRepository) {}

  async syncClient(tenantId: string, clientId: string): Promise<string> {
    // ── 1. Fetch integrations ───────────────────────────────────────────────
    const [gscIntegration, ga4Integration] = await Promise.all([
      this.repo.findGoogleIntegration(tenantId, clientId, GSC_PROVIDER),
      this.repo.findGoogleIntegration(tenantId, clientId, GA4_PROVIDER),
    ]);

    // GA4 is required; GSC is optional (enables keyword tracking + indexed pages).
    if (!ga4Integration || ga4Integration.status !== "CONNECTED") {
      throw new SeoIntegrationNotConnectedError(GA4_PROVIDER);
    }

    const gscAvailable =
      !!gscIntegration && gscIntegration.status === "CONNECTED";

    // ── 2. Resolve tokens ───────────────────────────────────────────────────
    let gscToken: string | null = null;
    let ga4Token: string;

    if (gscAvailable) {
      try {
        const gscCreds = gscIntegration!.credentials as GoogleOAuthCredentials;
        const { accessToken: gscAccessToken, updatedCredentials: gscUpdated } =
          await resolveAccessToken(gscCreds);
        gscToken = gscAccessToken;

        if (gscUpdated !== gscCreds) {
          await this.repo.updateIntegrationCredentials(
            gscIntegration!.id,
            gscUpdated as unknown as Prisma.InputJsonValue,
          );
        }
      } catch {
        // GSC token failed — continue without GSC data.
        gscToken = null;
      }
    }

    try {
      const ga4Creds = ga4Integration.credentials as GoogleOAuthCredentials;
      const { accessToken: ga4AccessToken, updatedCredentials: ga4Updated } =
        await resolveAccessToken(ga4Creds);
      ga4Token = ga4AccessToken;

      if (ga4Updated !== ga4Creds) {
        await this.repo.updateIntegrationCredentials(
          ga4Integration.id,
          ga4Updated as unknown as Prisma.InputJsonValue,
        );
      }
    } catch (err) {
      throw new SeoSyncFailedError(
        `GA4 token resolution failed: ${String(err)}`,
      );
    }

    // ── 3. Determine site URL and GA4 property ID ───────────────────────────
    const gscMeta = gscIntegration?.metadata as Record<string, unknown> | null;
    const siteUrl =
      (gscMeta?.["siteUrl"] as string | undefined) ??
      gscIntegration?.accountLabel ??
      "";

    const ga4Meta = ga4Integration.metadata as Record<string, unknown> | null;
    const propertyId =
      (ga4Meta?.["propertyId"] as string | undefined) ??
      ga4Integration.accountLabel ??
      "";

    if (!propertyId) {
      throw new SeoSyncFailedError(
        "GA4 property ID not configured. Set accountLabel to your GA4 property ID (e.g. properties/123456789).",
      );
    }

    // ── 4. Fetch data concurrently ──────────────────────────────────────────
    const [gscSummary, organicSessions, ga4Summary, indexedCount] =
      await Promise.allSettled([
        gscToken && siteUrl
          ? fetchGscSummary(gscToken, siteUrl, 28)
          : Promise.resolve(null),
        fetchOrganicSessionsByMonth(ga4Token, propertyId),
        fetchGa4Summary(ga4Token, propertyId),
        gscToken && siteUrl
          ? fetchIndexedPageCount(gscToken, siteUrl)
          : Promise.resolve(0),
      ]);

    const gsc =
      gscSummary.status === "fulfilled" && gscSummary.value !== null
        ? gscSummary.value
        : {
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgPosition: 0,
            topPages: [],
            topQueries: [],
          };

    const sessions =
      organicSessions.status === "fulfilled" ? organicSessions.value : [];

    const ga4 =
      ga4Summary.status === "fulfilled"
        ? ga4Summary.value
        : { totalUsers: 0, bounceRate: 0 };

    const indexed =
      indexedCount.status === "fulfilled" ? indexedCount.value : 0;

    // ── 5. Persist snapshot ─────────────────────────────────────────────────
    const snapshot = await this.repo.createSnapshot(tenantId, clientId, {
      clicks: gsc.clicks,
      impressions: gsc.impressions,
      ctr: gsc.ctr,
      avgPosition: gsc.avgPosition,
      indexedPages: indexed,
      crawlErrors: 0,
      mobileIssues: 0,
      topPages: gsc.topPages as unknown as Prisma.InputJsonValue,
      topQueries: gsc.topQueries as unknown as Prisma.InputJsonValue,
      organicSessions: sessions as unknown as Prisma.InputJsonValue,
    });

    // ── 6. Update tracked keyword ranks ─────────────────────────────────────
    const keywords = await this.repo.findKeywords(tenantId, clientId);

    await Promise.allSettled(
      keywords.map(async (kw) => {
        if (!gscToken || !siteUrl) return;
        try {
          const rank = await fetchKeywordPosition(
            gscToken,
            siteUrl,
            kw.keyword,
          );

          // Update weekly history: keep last 7 weeks
          const history = Array.isArray(kw.weeklyHistory)
            ? (kw.weeklyHistory as Array<number | null>)
            : [];
          const updatedHistory = [...history.slice(-6), rank];

          await this.repo.updateKeywordRanks(
            kw.id,
            tenantId,
            clientId,
            rank,
            updatedHistory as unknown as Prisma.InputJsonValue,
          );
        } catch {
          // Non-fatal: skip keywords that can't be resolved this cycle.
        }
      }),
    );

    // ── 7. Regenerate action queue ──────────────────────────────────────────
    await this.repo.deleteActionsByClient(tenantId, clientId);
    const actions = generateActions(gsc, indexed, ga4.bounceRate);
    for (const action of actions) {
      await this.repo.createAction(tenantId, clientId, action);
    }

    return snapshot.id;
  }
}

// ── Action generation ─────────────────────────────────────────────────────────

function generateActions(
  gsc: { avgPosition: number; ctr: number; impressions: number },
  indexedPages: number,
  bounceRate: number,
): Array<{
  title: string;
  description: string;
  category: string;
  impactLevel: string;
  effortLevel: string;
}> {
  const actions: Array<{
    title: string;
    description: string;
    category: string;
    impactLevel: string;
    effortLevel: string;
  }> = [];

  if (gsc.avgPosition > 10) {
    actions.push({
      title: "Improve average ranking position to top 10",
      description: `Current average position is ${gsc.avgPosition.toFixed(1)}. Focus on on-page optimisation for your top-impression pages.`,
      category: "CONTENT",
      impactLevel: "HIGH",
      effortLevel: "MEDIUM",
    });
  }

  if (gsc.ctr < 0.03 && gsc.impressions > 100) {
    actions.push({
      title: "Optimise meta titles and descriptions for higher CTR",
      description: `CTR is ${(gsc.ctr * 100).toFixed(1)}% — below the 3% target. Rewrite title tags to be more action-oriented.`,
      category: "CONTENT",
      impactLevel: "HIGH",
      effortLevel: "QUICK",
    });
  }

  if (indexedPages < 10) {
    actions.push({
      title: "Submit XML sitemap to Google Search Console",
      description:
        "Fewer than 10 pages are indexed. Add and submit a sitemap to accelerate discovery.",
      category: "TECHNICAL",
      impactLevel: "HIGH",
      effortLevel: "QUICK",
    });
  }

  if (bounceRate > 0.7) {
    actions.push({
      title: "Reduce bounce rate with better landing page relevance",
      description: `Bounce rate is ${(bounceRate * 100).toFixed(0)}%. Align page content more closely with search intent.`,
      category: "CONTENT",
      impactLevel: "MEDIUM",
      effortLevel: "MEDIUM",
    });
  }

  actions.push({
    title: "Add structured data (FAQ schema) to key landing pages",
    description:
      "FAQ schema can unlock rich results and boost organic CTR without additional ad spend.",
    category: "SCHEMA",
    impactLevel: "MEDIUM",
    effortLevel: "QUICK",
  });

  actions.push({
    title: "Build internal links from high-traffic pages to underperformers",
    description:
      "Internal link equity from popular pages can lift rankings of weaker pages within weeks.",
    category: "BACKLINKS",
    impactLevel: "LOW",
    effortLevel: "QUICK",
  });

  return actions;
}
