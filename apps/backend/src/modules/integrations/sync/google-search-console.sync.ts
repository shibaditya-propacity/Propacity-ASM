/**
 * Google Search Console sync — impressions, clicks, CTR, avg position, per-page data.
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
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

export async function syncGoogleSearchConsole(
  credentials: StoredCredentials,
  accessToken: string,
  siteUrl: string,
): Promise<GscSyncResult> {
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 28 * 86400_000)
    .toISOString()
    .slice(0, 10);

  const encodedSite = encodeURIComponent(siteUrl);

  // Top-level aggregate (no dimensions)
  const aggregateRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endDate,
        rowLimit: 1,
      }),
    },
  );

  if (!aggregateRes.ok) {
    const body = await aggregateRes.text();
    throw new Error(`GSC aggregate query failed: ${body}`);
  }

  const aggregate = (await aggregateRes.json()) as SearchAnalyticsResponse;
  const agg = aggregate.rows?.[0];

  // Per-page breakdown
  const pageRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["page"],
        rowLimit: 25,
      }),
    },
  );

  const pageData = pageRes.ok
    ? ((await pageRes.json()) as SearchAnalyticsResponse)
    : { rows: [] };

  const pages = (pageData.rows ?? []).map((r) => ({
    page: r.keys[0] ?? "",
    impressions: r.impressions,
    clicks: r.clicks,
    ctr: r.ctr,
    position: r.position,
  }));

  void credentials; // used by caller for refresh logic

  return {
    impressions: agg?.impressions ?? 0,
    clicks: agg?.clicks ?? 0,
    ctr: agg?.ctr ?? 0,
    avgPosition: agg?.position ?? 0,
    pages,
    dateRange: { startDate, endDate },
    recordsSynced: pages.length + 1,
  };
}
