/**
 * Meta Ads sync — campaigns, ad sets, ads, spend, impressions, clicks,
 * conversions, ROAS.
 * accountLabel must be the Ad Account ID (e.g. "act_183...2041").
 */

const META_VERSION = "v20.0";

export interface MetaAdsSyncResult {
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  roas: number;
  campaigns: Array<{
    id: string;
    name: string;
    status: string;
    spend: number;
    impressions: number;
    clicks: number;
    conversions: number;
  }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

interface MetaInsightData {
  spend?: string;
  impressions?: string;
  clicks?: string;
  ctr?: string;
  cpc?: string;
  actions?: Array<{ action_type: string; value: string }>;
  purchase_roas?: Array<{ action_type: string; value: string }>;
}

interface MetaCampaign {
  id: string;
  name: string;
  status: string;
  insights?: { data: MetaInsightData[] };
}

interface MetaResponse<T> {
  data: T[];
  error?: { message: string };
}

function isoDate(offsetDays: number): string {
  return new Date(Date.now() + offsetDays * 86400_000)
    .toISOString()
    .slice(0, 10);
}

function getConversions(actions?: MetaInsightData["actions"]): number {
  if (!actions) return 0;
  const purchase = actions.find((a) => a.action_type === "purchase");
  const lead = actions.find((a) => a.action_type === "lead");
  return parseFloat(purchase?.value ?? lead?.value ?? "0");
}

function getRoas(roas?: MetaInsightData["purchase_roas"]): number {
  if (!roas?.length) return 0;
  return parseFloat(roas[0]?.value ?? "0");
}

export async function syncMetaAds(
  accessToken: string,
  adAccountId: string,
): Promise<MetaAdsSyncResult> {
  const startDate = isoDate(-28);
  const endDate = isoDate(0);

  const datePreset = "last_28d";
  const insightFields =
    "spend,impressions,clicks,ctr,cpc,actions,purchase_roas";

  // Campaigns with inline insights
  const fields = `id,name,status,insights.fields(${insightFields}){date_preset=${datePreset}}`;
  const params = new URLSearchParams({
    access_token: accessToken,
    fields,
    limit: "25",
  });

  const campaignRes = await fetch(
    `https://graph.facebook.com/${META_VERSION}/${adAccountId}/campaigns?${params.toString()}`,
  );

  if (!campaignRes.ok) {
    const body = await campaignRes.text();
    throw new Error(`Meta campaigns fetch failed: ${body}`);
  }

  const campaignData = (await campaignRes.json()) as MetaResponse<MetaCampaign>;

  if (campaignData.error) {
    throw new Error(`Meta API error: ${campaignData.error.message}`);
  }

  const campaigns = (campaignData.data ?? []).map((c) => {
    const ins: MetaInsightData = c.insights?.data?.[0] ?? {};
    return {
      id: c.id,
      name: c.name,
      status: c.status,
      spend: parseFloat(ins.spend ?? "0"),
      impressions: parseInt(ins.impressions ?? "0", 10),
      clicks: parseInt(ins.clicks ?? "0", 10),
      conversions: getConversions(ins.actions),
    };
  });

  // Account-level totals
  const accountParams = new URLSearchParams({
    access_token: accessToken,
    fields: insightFields,
    date_preset: datePreset,
  });
  const accountRes = await fetch(
    `https://graph.facebook.com/${META_VERSION}/${adAccountId}/insights?${accountParams.toString()}`,
  );

  let totalSpend = 0;
  let totalImpressions = 0;
  let totalClicks = 0;
  let totalCtr = 0;
  let totalCpc = 0;
  let totalConversions = 0;
  let totalRoas = 0;

  if (accountRes.ok) {
    const acctData = (await accountRes.json()) as MetaResponse<MetaInsightData>;
    const ins: MetaInsightData = acctData.data?.[0] ?? {};
    totalSpend = parseFloat(ins.spend ?? "0");
    totalImpressions = parseInt(ins.impressions ?? "0", 10);
    totalClicks = parseInt(ins.clicks ?? "0", 10);
    totalCtr = parseFloat(ins.ctr ?? "0");
    totalCpc = parseFloat(ins.cpc ?? "0");
    totalConversions = getConversions(ins.actions);
    totalRoas = getRoas(ins.purchase_roas);
  } else {
    // Fallback: roll up from campaigns
    totalSpend = campaigns.reduce((s, c) => s + c.spend, 0);
    totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);
    totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
    totalCtr = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
    totalConversions = campaigns.reduce((s, c) => s + c.conversions, 0);
  }

  return {
    spend: totalSpend,
    impressions: totalImpressions,
    clicks: totalClicks,
    ctr: totalCtr,
    cpc: totalCpc,
    conversions: totalConversions,
    roas: totalRoas,
    campaigns,
    dateRange: { startDate, endDate },
    recordsSynced: campaigns.length + 1,
  };
}
