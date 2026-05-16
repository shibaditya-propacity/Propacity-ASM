/**
 * Google Search Console (GSC) API v1 wrapper.
 *
 * All methods accept an access token and a site URL (e.g. "https://example.com/").
 * The site URL is taken from Integration.accountLabel or Integration.metadata.siteUrl.
 */

const GSC_BASE = "https://www.googleapis.com/webmasters/v3";

// ── Public types ──────────────────────────────────────────────────────────────

export interface GscSearchRow {
  query?: string;
  page?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GscSummary {
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
  topPages: GscSearchRow[];
  topQueries: GscSearchRow[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function gscPost<T>(
  accessToken: string,
  path: string,
  body: unknown,
): Promise<T> {
  const res = await fetch(`${GSC_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    throw new Error(
      `GSC API error ${res.status}: ${JSON.stringify(err["error"] ?? err)}`,
    );
  }

  return res.json() as Promise<T>;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Get aggregated clicks, impressions, CTR, and avg position for the site
 * over the last N days (default: 28).
 */
export async function fetchGscSummary(
  accessToken: string,
  siteUrl: string,
  days = 28,
): Promise<GscSummary> {
  const endDate = new Date();
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  type RowResponse = {
    rows?: Array<{
      clicks?: number;
      impressions?: number;
      ctr?: number;
      position?: number;
      keys?: string[];
    }>;
  };

  // Aggregate totals (no dimension)
  const totalRes = await gscPost<RowResponse>(
    accessToken,
    `/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      type: "web",
    },
  );

  const totalRow = totalRes.rows?.[0];
  const clicks = totalRow?.clicks ?? 0;
  const impressions = totalRow?.impressions ?? 0;
  const ctr = totalRow?.ctr ?? 0;
  const avgPosition = totalRow?.position ?? 0;

  // Top pages
  const pagesRes = await gscPost<RowResponse>(
    accessToken,
    `/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["page"],
      rowLimit: 10,
      type: "web",
    },
  );

  const topPages: GscSearchRow[] = (pagesRes.rows ?? []).map((r) => ({
    page: r.keys?.[0],
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: r.ctr ?? 0,
    position: r.position ?? 0,
  }));

  // Top queries
  const queriesRes = await gscPost<RowResponse>(
    accessToken,
    `/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["query"],
      rowLimit: 20,
      type: "web",
    },
  );

  const topQueries: GscSearchRow[] = (queriesRes.rows ?? []).map((r) => ({
    query: r.keys?.[0],
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: r.ctr ?? 0,
    position: r.position ?? 0,
  }));

  return { clicks, impressions, ctr, avgPosition, topPages, topQueries };
}

/**
 * Get the position for a specific keyword query over the last 28 days.
 * Returns null if the keyword had no impressions.
 */
export async function fetchKeywordPosition(
  accessToken: string,
  siteUrl: string,
  keyword: string,
): Promise<number | null> {
  const endDate = new Date();
  const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  type RowResponse = {
    rows?: Array<{
      position?: number;
      keys?: string[];
    }>;
  };

  const res = await gscPost<RowResponse>(
    accessToken,
    `/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["query"],
      dimensionFilterGroups: [
        {
          filters: [
            {
              dimension: "query",
              operator: "equals",
              expression: keyword,
            },
          ],
        },
      ],
      type: "web",
    },
  );

  const row = res.rows?.[0];
  return row ? Math.round(row.position ?? 0) : null;
}

/**
 * Returns the count of URLs from the first registered sitemap.
 * Falls back to 0 if no sitemaps are registered.
 */
export async function fetchIndexedPageCount(
  accessToken: string,
  siteUrl: string,
): Promise<number> {
  const res = await fetch(
    `${GSC_BASE}/sites/${encodeURIComponent(siteUrl)}/sitemaps`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!res.ok) return 0;

  const json = (await res.json()) as {
    sitemap?: Array<{ contents?: Array<{ submitted?: number }> }>;
  };

  const first = json.sitemap?.[0];
  if (!first) return 0;

  const total = (first.contents ?? []).reduce(
    (sum, c) => sum + (c.submitted ?? 0),
    0,
  );
  return total;
}
