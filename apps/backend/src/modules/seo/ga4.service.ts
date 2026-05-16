/**
 * Google Analytics 4 Data API wrapper.
 *
 * Requires:
 *  - accessToken: a valid OAuth2 token with analytics.readonly scope
 *  - propertyId: the GA4 Property ID (stored in Integration.metadata.propertyId)
 *               e.g. "properties/123456789"
 */

const GA4_BASE = "https://analyticsdata.googleapis.com/v1beta";

// ── Public types ──────────────────────────────────────────────────────────────

export interface MonthlySession {
  month: string; // e.g. "2026-04"
  sessions: number;
}

export interface Ga4Summary {
  organicSessions: MonthlySession[]; // last 6 months
  totalUsers: number;
  bounceRate: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function ga4Post<T>(
  accessToken: string,
  propertyId: string,
  endpoint: string,
  body: unknown,
): Promise<T> {
  const url = `${GA4_BASE}/${propertyId}:${endpoint}`;

  const res = await fetch(url, {
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
      `GA4 API error ${res.status}: ${JSON.stringify(err["error"] ?? err)}`,
    );
  }

  return res.json() as Promise<T>;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Fetch monthly organic sessions for the last 6 months.
 * `propertyId` must be in the form "properties/XXXXXXXXX".
 */
export async function fetchOrganicSessionsByMonth(
  accessToken: string,
  propertyId: string,
): Promise<MonthlySession[]> {
  // 6-month window
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 5);
  startDate.setDate(1);

  type RunReportResponse = {
    rows?: Array<{
      dimensionValues?: Array<{ value?: string }>;
      metricValues?: Array<{ value?: string }>;
    }>;
  };

  const res = await ga4Post<RunReportResponse>(
    accessToken,
    propertyId,
    "runReport",
    {
      dateRanges: [
        {
          startDate: startDate.toISOString().slice(0, 10),
          endDate: endDate.toISOString().slice(0, 10),
        },
      ],
      dimensions: [{ name: "yearMonth" }],
      metrics: [{ name: "sessions" }],
      dimensionFilter: {
        filter: {
          fieldName: "sessionDefaultChannelGrouping",
          stringFilter: {
            matchType: "EXACT",
            value: "Organic Search",
          },
        },
      },
      orderBys: [{ dimension: { dimensionName: "yearMonth" }, desc: false }],
    },
  );

  return (res.rows ?? []).map((row) => {
    const rawMonth = row.dimensionValues?.[0]?.value ?? "";
    // yearMonth format from GA4 is YYYYMM → convert to YYYY-MM
    const month =
      rawMonth.length === 6
        ? `${rawMonth.slice(0, 4)}-${rawMonth.slice(4)}`
        : rawMonth;
    const sessions = parseInt(row.metricValues?.[0]?.value ?? "0", 10);
    return { month, sessions };
  });
}

/**
 * Fetch total users and bounce rate for the last 28 days (all channels).
 */
export async function fetchGa4Summary(
  accessToken: string,
  propertyId: string,
): Promise<{ totalUsers: number; bounceRate: number }> {
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  type RunReportResponse = {
    rows?: Array<{
      metricValues?: Array<{ value?: string }>;
    }>;
  };

  const res = await ga4Post<RunReportResponse>(
    accessToken,
    propertyId,
    "runReport",
    {
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: "totalUsers" }, { name: "bounceRate" }],
    },
  );

  const row = res.rows?.[0];
  const totalUsers = parseInt(row?.metricValues?.[0]?.value ?? "0", 10);
  const bounceRate = parseFloat(row?.metricValues?.[1]?.value ?? "0");

  return { totalUsers, bounceRate };
}
