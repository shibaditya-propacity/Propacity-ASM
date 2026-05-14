/**
 * Google Search Console sync — impressions, clicks, CTR, avg position,
 * top pages, top queries, index coverage, and mobile usability issues.
 * accountLabel must be the verified site URL (e.g. https://example.com/).
 */
import type { StoredCredentials } from "../oauth/credentials";

interface SearchAnalyticsRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface SearchAnalyticsResponse {
  rows?: SearchAnalyticsRow[];
}

interface SitemapContents {
  type: string;
  submitted: number;
  indexed: number;
}

interface SitemapEntry {
  path: string;
  contents?: SitemapContents[];
}

interface SitemapsResponse {
  sitemap?: SitemapEntry[];
}

export interface GscSyncResult {
  impressions: number;
  clicks: number;
  ctr: number;
  avgPosition: number;
  pages: Array<{
    page: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  queries: Array<{
    query: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  indexCoverage: { indexed: number; notIndexed: number };
  mobileUsabilityIssues: number;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

// Permission levels that allow querying the searchAnalytics API.
const QUERYABLE_PERMISSIONS = new Set(["siteOwner", "siteFullUser"]);

// Strip trailing slash and lowercase for loose URL comparison.
// Handles https://propacity.com/ vs https://propacity.com and
// sc-domain:propacity.com vs SC-DOMAIN:propacity.com.
function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "").toLowerCase();
}

async function checkSitePermission(
  accessToken: string,
  siteUrl: string,
): Promise<void> {
  // Use sites.list (not sites.get) so we match regardless of URL format —
  // sites.get is strict about the exact registered form (URL prefix vs domain
  // property), whereas list returns every property the token can see.
  const res = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) return; // network/auth issue — let the analytics query fail with its own error

  const data = (await res.json()) as {
    siteEntry?: Array<{ siteUrl: string; permissionLevel: string }>;
  };
  const sites = data.siteEntry ?? [];
  const normalized = normalizeUrl(siteUrl);

  const matched = sites.find((s) => normalizeUrl(s.siteUrl) === normalized);

  if (!matched) {
    const available = sites.map((s) => s.siteUrl).join(", ") || "none found";
    throw new Error(
      `"${siteUrl}" is not in your Search Console account. ` +
        `Available properties: ${available}. ` +
        `Update the site URL in the integration settings to one of the listed properties.`,
    );
  }

  if (!QUERYABLE_PERMISSIONS.has(matched.permissionLevel)) {
    throw new Error(
      `Your Google account has "${matched.permissionLevel}" access to "${matched.siteUrl}". ` +
        `Querying search analytics requires siteFullUser or siteOwner permission. ` +
        `Connect with the account that owns this property in Search Console.`,
    );
  }
}

export async function syncGoogleSearchConsole(
  credentials: StoredCredentials,
  accessToken: string,
  siteUrl: string,
): Promise<GscSyncResult> {
  // Pre-flight: verify the account has queryable permission for this site.
  // This surfaces a clear error instead of a raw 403 from the analytics API.
  await checkSitePermission(accessToken, siteUrl);

  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 28 * 86400_000)
    .toISOString()
    .slice(0, 10);

  const encodedSite = encodeURIComponent(siteUrl);
  const analyticsBase = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  // Top-level aggregate (no dimensions)
  const aggregateRes = await fetch(analyticsBase, {
    method: "POST",
    headers,
    body: JSON.stringify({ startDate, endDate, rowLimit: 1 }),
  });

  if (!aggregateRes.ok) {
    if (aggregateRes.status === 403) {
      throw new Error(
        `Your Google account does not have permission for site "${siteUrl}". ` +
          `Open the integration settings, update the site URL to a property ` +
          `you own in Search Console, then sync again.`,
      );
    }
    const body = await aggregateRes.text();
    throw new Error(`GSC aggregate query failed: ${body}`);
  }

  const aggregate = (await aggregateRes.json()) as SearchAnalyticsResponse;
  const agg = aggregate.rows?.[0];

  // Per-page breakdown
  const [pageRes, queryRes, sitemapsRes] = await Promise.all([
    fetch(analyticsBase, {
      method: "POST",
      headers,
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["page"],
        rowLimit: 25,
      }),
    }),
    // Top queries
    fetch(analyticsBase, {
      method: "POST",
      headers,
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["query"],
        rowLimit: 25,
      }),
    }),
    // Index coverage via sitemaps API
    fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    ),
  ]);

  const pageData = pageRes.ok
    ? ((await pageRes.json()) as SearchAnalyticsResponse)
    : { rows: [] };

  const queryData = queryRes.ok
    ? ((await queryRes.json()) as SearchAnalyticsResponse)
    : { rows: [] };

  const sitemapData = sitemapsRes.ok
    ? ((await sitemapsRes.json()) as SitemapsResponse)
    : { sitemap: [] };

  const pages = (pageData.rows ?? []).map((r) => ({
    page: r.keys[0] ?? "",
    impressions: r.impressions,
    clicks: r.clicks,
    ctr: r.ctr,
    position: r.position,
  }));

  const queries = (queryData.rows ?? []).map((r) => ({
    query: r.keys[0] ?? "",
    impressions: r.impressions,
    clicks: r.clicks,
    ctr: r.ctr,
    position: r.position,
  }));

  // Sum indexed / submitted counts across all sitemaps
  let totalIndexed = 0;
  let totalSubmitted = 0;
  for (const sitemap of sitemapData.sitemap ?? []) {
    for (const c of sitemap.contents ?? []) {
      totalSubmitted += c.submitted ?? 0;
      totalIndexed += c.indexed ?? 0;
    }
  }
  const notIndexed = Math.max(0, totalSubmitted - totalIndexed);

  void credentials; // used by caller for refresh logic

  return {
    impressions: agg?.impressions ?? 0,
    clicks: agg?.clicks ?? 0,
    ctr: agg?.ctr ?? 0,
    avgPosition: agg?.position ?? 0,
    pages,
    queries,
    indexCoverage: { indexed: totalIndexed, notIndexed },
    mobileUsabilityIssues: 0, // aggregate count not available via webmasters v3 API
    dateRange: { startDate, endDate },
    recordsSynced: pages.length + queries.length + 1,
  };
}
