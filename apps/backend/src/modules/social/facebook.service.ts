/**
 * Facebook page metrics via Serper Google search.
 * Uses SERPER_API_KEY from .env — same key as Brand Audit module.
 * No Meta Graph API credentials needed for public page metrics.
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
        attributes?: Record<string, string>;
      };
    }>;
  } catch {
    return null;
  }
}

export interface FacebookMetrics {
  followers: number;
  likes: number | null;
  engagementRate: number | null;
  reach: number | null;
  topPosts: Array<{
    url: string;
    likes: number | null;
    comments: number | null;
    shares: number | null;
    date: string | null;
  }>;
}

export async function getFacebookMetrics(
  handle: string,
  brandName: string,
): Promise<FacebookMetrics> {
  const result: FacebookMetrics = {
    followers: 0,
    likes: null,
    engagementRate: null,
    reach: null,
    topPosts: [],
  };

  const [pageResult, brandResult] = await Promise.all([
    serperSearch(`site:facebook.com "${brandName}"`),
    serperSearch(`"${brandName}" facebook page likes followers`),
  ]);

  const allOrganic = [
    ...(pageResult?.organic ?? []),
    ...(brandResult?.organic ?? []),
  ];

  for (const item of allOrganic) {
    if (!item.link?.includes("facebook.com")) continue;
    const text = `${item.title ?? ""} ${item.snippet ?? ""}`;
    if (!result.likes)
      result.likes = extractNumber(text, /([\d.,]+[KkMm]?)\s*likes?/i);
    if (!result.followers) {
      const f = extractNumber(text, /([\d.,]+[KkMm]?)\s*followers?/i);
      if (f) result.followers = f;
    }
  }

  if (!result.followers && result.likes) result.followers = result.likes;

  const kg = brandResult?.knowledgeGraph;
  if (kg?.attributes) {
    if (!result.likes)
      result.likes = parseCount(
        kg.attributes["Likes"] ?? kg.attributes["Facebook likes"] ?? "",
      );
    if (!result.followers && result.likes) result.followers = result.likes;
  }

  // Normalize handle to remove leading slash
  void handle;

  return result;
}
