/**
 * Google Ads sync — campaigns, ad groups, keywords, spend, impressions, clicks,
 * Quality Score, Impression Share.
 * accountLabel must be the Customer ID (e.g. "245-891-7706").
 */

export interface GoogleAdsSyncResult {
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  avgCpc: number;
  campaigns: Array<{
    name: string;
    status: string;
    spend: number;
    impressions: number;
    clicks: number;
  }>;
  keywords: Array<{
    keyword: string;
    matchType: string;
    qualityScore: number | null;
    impressionShare: number | null;
    impressions: number;
    clicks: number;
  }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

function normalizeCustomerId(label: string): string {
  return label.replace(/-/g, "");
}

function googleAdsHeaders(accessToken: string): Record<string, string> {
  return {
    Authorization: `Bearer ${accessToken}`,
    "developer-token": process.env["GOOGLE_ADS_DEVELOPER_TOKEN"] ?? "",
    "Content-Type": "application/json",
  };
}

interface GoogleAdsRow {
  campaign?: { name: string; status: string };
  adGroup?: { name: string };
  adGroupCriterion?: {
    keyword?: { text: string; matchType: string };
    qualityInfo?: { qualityScore: number };
  };
  metrics?: {
    costMicros?: string;
    impressions?: string;
    clicks?: string;
    ctr?: number;
    averageCpc?: string;
    searchImpressionShare?: number;
  };
}

interface GoogleAdsQueryResponse {
  results?: GoogleAdsRow[];
}

export async function syncGoogleAds(
  accessToken: string,
  customerLabel: string,
): Promise<GoogleAdsSyncResult> {
  const customerId = normalizeCustomerId(customerLabel);
  const endDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-");
  const startDate = new Date(Date.now() - 28 * 86400_000)
    .toISOString()
    .slice(0, 10);

  const baseUrl = `https://googleads.googleapis.com/v14/customers/${customerId}/googleAds:search`;

  // Campaign performance
  const campaignQuery = `
    SELECT campaign.name, campaign.status,
           metrics.cost_micros, metrics.impressions, metrics.clicks, metrics.ctr
    FROM campaign
    WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
      AND campaign.status != 'REMOVED'
    ORDER BY metrics.cost_micros DESC
    LIMIT 20
  `;

  const campaignRes = await fetch(baseUrl, {
    method: "POST",
    headers: googleAdsHeaders(accessToken),
    body: JSON.stringify({ query: campaignQuery }),
  });

  if (!campaignRes.ok) {
    const body = await campaignRes.text();
    throw new Error(`Google Ads campaign query failed: ${body}`);
  }

  const campaignData = (await campaignRes.json()) as GoogleAdsQueryResponse;
  const campaigns = (campaignData.results ?? []).map((r) => ({
    name: r.campaign?.name ?? "",
    status: r.campaign?.status ?? "",
    spend: Math.round(parseInt(r.metrics?.costMicros ?? "0", 10) / 1_000_000),
    impressions: parseInt(r.metrics?.impressions ?? "0", 10),
    clicks: parseInt(r.metrics?.clicks ?? "0", 10),
  }));

  // Keyword performance
  const keywordQuery = `
    SELECT ad_group_criterion.keyword.text,
           ad_group_criterion.keyword.match_type,
           ad_group_criterion.quality_info.quality_score,
           metrics.impressions, metrics.clicks,
           metrics.search_impression_share
    FROM keyword_view
    WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
      AND ad_group_criterion.status != 'REMOVED'
    ORDER BY metrics.impressions DESC
    LIMIT 50
  `;

  const kwRes = await fetch(baseUrl, {
    method: "POST",
    headers: googleAdsHeaders(accessToken),
    body: JSON.stringify({ query: keywordQuery }),
  });

  const kwData = kwRes.ok
    ? ((await kwRes.json()) as GoogleAdsQueryResponse)
    : { results: [] };

  const keywords = (kwData.results ?? []).map((r) => ({
    keyword: r.adGroupCriterion?.keyword?.text ?? "",
    matchType: r.adGroupCriterion?.keyword?.matchType ?? "",
    qualityScore: r.adGroupCriterion?.qualityInfo?.qualityScore ?? null,
    impressionShare: r.metrics?.searchImpressionShare ?? null,
    impressions: parseInt(r.metrics?.impressions ?? "0", 10),
    clicks: parseInt(r.metrics?.clicks ?? "0", 10),
  }));

  // Rollup totals from campaigns
  const totalSpend = campaigns.reduce((s, c) => s + c.spend, 0);
  const totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);
  const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
  const ctr = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
  const avgCpc = totalClicks > 0 ? totalSpend / totalClicks : 0;

  return {
    spend: totalSpend,
    impressions: totalImpressions,
    clicks: totalClicks,
    ctr,
    avgCpc,
    campaigns,
    keywords,
    dateRange: { startDate, endDate },
    recordsSynced: campaigns.length + keywords.length,
  };
}
