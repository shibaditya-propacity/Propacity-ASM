/**
 * LinkedIn company page metrics via Serper Google search.
 * Uses SERPER_API_KEY from .env.
 * Official LinkedIn API access requires LINKEDIN_CLIENT_ID + LINKEDIN_CLIENT_SECRET
 * (see .env.example) — not yet configured in this deployment.
 */

const SERPER_BASE = "https://google.serper.dev";

function parseCount(raw: string): number | null {
  const cleaned = raw.replace(/,/g, "").trim();
  const m = cleaned.match(/^([\d.]+)\s*([KkMmBb]?)$/);
  if (!m) return null;
  const n = parseFloat(m[1] ?? "");
  if (isNaN(n)) return null;
  const suffix = (m[2] ?? "").toLowerCase();
  if (suffix === "k") return Math.round(n * 1_000);
  if (suffix === "m") return Math.round(n * 1_000_000);
  return Math.round(n);
}

function extractNumber(text: string, pattern: RegExp): number | null {
  const m = text.match(pattern);
  if (!m) return null;
  return parseCount(m[1] ?? "");
}

async function serperSearch(query: string) {
  const apiKey = process.env["SERPER_API_KEY"];
  if (!apiKey) return null;
  try {
    const res = await fetch(`${SERPER_BASE}/search`, {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: query, gl: "in", hl: "en", num: 10 }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) return null;
    return res.json() as Promise<{
      organic?: Array<{ title?: string; snippet?: string; link?: string }>;
      knowledgeGraph?: {
        description?: string;
        type?: string;
        attributes?: Record<string, string>;
      };
    }>;
  } catch {
    return null;
  }
}

export interface LinkedInMetrics {
  followers: number;
  employees: number | null;
  impressions: number | null;
  engagementRate: number | null;
  topPosts: Array<{
    url: string;
    likes: number | null;
    comments: number | null;
    shares: number | null;
    date: string | null;
  }>;
}

export async function getLinkedInMetrics(
  handle: string,
  brandName: string,
): Promise<LinkedInMetrics> {
  const result: LinkedInMetrics = {
    followers: 0,
    employees: null,
    impressions: null,
    engagementRate: null,
    topPosts: [],
  };

  const [pageResult, brandResult] = await Promise.all([
    serperSearch(`site:linkedin.com/company "${brandName}"`),
    serperSearch(`"${brandName}" linkedin company followers employees`),
  ]);

  const allOrganic = [
    ...(pageResult?.organic ?? []),
    ...(brandResult?.organic ?? []),
  ];

  for (const item of allOrganic) {
    if (!item.link?.includes("linkedin.com")) continue;
    const text = `${item.title ?? ""} ${item.snippet ?? ""}`;

    if (!result.followers) {
      const f =
        extractNumber(text, /([\d.,]+[KkMm]?)\s*followers?\s*on LinkedIn/i) ??
        extractNumber(
          text,
          /LinkedIn[^|]*\|\s*([\d.,]+[KkMm]?)\s*followers?/i,
        ) ??
        extractNumber(text, /([\d.,]+[KkMm]?)\s*followers?/i);
      if (f) result.followers = f;
    }

    if (!result.employees) {
      const empMatch =
        text.match(/([\d,]+)\s*[-–]\s*([\d,]+)\s*employees?/i) ??
        text.match(/([\d,]+)\+?\s*employees?/i);
      if (empMatch)
        result.employees = parseCount((empMatch[1] ?? "").replace(/,/g, ""));
    }
  }

  const kg = brandResult?.knowledgeGraph;
  if (kg?.attributes) {
    if (!result.followers)
      result.followers =
        parseCount(
          kg.attributes["LinkedIn followers"] ??
            kg.attributes["Followers"] ??
            "",
        ) ?? 0;
  }

  // Try to find engagement rate from any organic result
  const allTexts = [
    ...(pageResult?.organic ?? []),
    ...(brandResult?.organic ?? []),
  ].map((item) => `${item.title ?? ""} ${item.snippet ?? ""}`);

  for (const text of allTexts) {
    if (!result.engagementRate) {
      const er = extractNumber(text, /([\d.]+)\s*%\s*engagement/i);
      if (er != null) {
        result.engagementRate = er;
        break;
      }
    }
  }

  void handle;

  return result;
}
