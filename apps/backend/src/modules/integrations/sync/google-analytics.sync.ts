/**
 * Google Analytics 4 sync — sessions, users, bounce rate, conversions, channel attribution.
 * accountLabel must be the numeric GA4 Property ID (e.g. "123456789"), found in
 * GA4 Admin → Property Settings. NOT the Measurement ID ("G-XXXXXXXXXX").
 */

export interface GA4SyncResult {
  sessions: number;
  users: number;
  bounceRate: number;
  conversions: number;
  channels: Array<{ channel: string; sessions: number; users: number }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

interface GA4ReportRow {
  dimensionValues?: Array<{ value: string }>;
  metricValues?: Array<{ value: string }>;
}

interface GA4ReportResponse {
  rows?: GA4ReportRow[];
}

function normalizePropertyId(label: string): string {
  const trimmed = label.trim();

  // Already fully qualified
  if (trimmed.startsWith("properties/")) return trimmed;

  // Pure numeric → wrap it
  if (/^\d+$/.test(trimmed)) return `properties/${trimmed}`;

  // Measurement ID (G-...) is NOT a Property ID — fail loudly so the user knows
  if (/^G-/i.test(trimmed)) {
    throw new Error(
      `"${trimmed}" looks like a Measurement ID, not a Property ID. ` +
        "Open GA4 → Admin → Property Settings and copy the numeric Property ID (e.g. 123456789).",
    );
  }

  throw new Error(
    `Unrecognised GA4 property label "${trimmed}". ` +
      "Use the numeric Property ID from GA4 Admin → Property Settings.",
  );
}

export async function syncGoogleAnalytics(
  accessToken: string,
  propertyLabel: string,
): Promise<GA4SyncResult> {
  const propertyId = normalizePropertyId(propertyLabel);
  const endDate = "today";
  const startDate = "28daysAgo";

  // Overall metrics
  const summaryRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "sessions" },
          { name: "totalUsers" },
          { name: "bounceRate" },
          { name: "conversions" },
        ],
      }),
    },
  );

  if (!summaryRes.ok) {
    const body = await summaryRes.text();
    throw new Error(`GA4 summary report failed: ${body}`);
  }

  const summaryData = (await summaryRes.json()) as GA4ReportResponse;
  const summaryRow = summaryData.rows?.[0];
  const [sessions, users, bounceRate, conversions] = (
    summaryRow?.metricValues ?? []
  ).map((v) => parseFloat(v.value ?? "0"));

  // Channel breakdown
  const channelRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "sessionDefaultChannelGrouping" }],
        metrics: [{ name: "sessions" }, { name: "totalUsers" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
    },
  );

  const channelData = channelRes.ok
    ? ((await channelRes.json()) as GA4ReportResponse)
    : { rows: [] };

  const channels = (channelData.rows ?? []).map((r) => ({
    channel: r.dimensionValues?.[0]?.value ?? "Unknown",
    sessions: parseInt(r.metricValues?.[0]?.value ?? "0", 10),
    users: parseInt(r.metricValues?.[1]?.value ?? "0", 10),
  }));

  return {
    sessions: Math.round(sessions ?? 0),
    users: Math.round(users ?? 0),
    bounceRate: bounceRate ?? 0,
    conversions: Math.round(conversions ?? 0),
    channels,
    dateRange: { startDate: "28 days ago", endDate: "today" },
    recordsSynced: channels.length + 1,
  };
}
