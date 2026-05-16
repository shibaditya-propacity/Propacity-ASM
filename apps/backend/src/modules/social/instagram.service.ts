/**
 * Instagram metrics via Serper Google search (same pattern as Brand Audit socialInsights).
 * Uses SERPER_API_KEY from .env — the same key already used by Brand Audit module.
 * No additional credentials needed for public profile metrics.
 */

const SERPER_BASE = "https://google.serper.dev";

function parseCount(raw: string): number | null {
  const cleaned = raw.replace(/,/g, "").replace(/\s/g, "").trim();
  const m = cleaned.match(/^([\d.]+)\s*([KkMmBb]?)$/);
  if (!m) return null;
  const n = parseFloat(m[1] ?? "");
  if (isNaN(n)) return null;
  const suffix = (m[2] ?? "").toLowerCase();
  if (suffix === "k") return Math.round(n * 1_000);
  if (suffix === "m") return Math.round(n * 1_000_000);
  if (suffix === "b") return Math.round(n * 1_000_000_000);
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

export interface InstagramMetrics {
  followers: number;
  following: number | null;
  posts: number | null;
  engagementRate: number | null;
  avgLikes: number | null;
  avgComments: number | null;
  reach: number | null;
  topPosts: Array<{
    url: string;
    likes: number | null;
    comments: number | null;
    shares: number | null;
    date: string | null;
  }>;
}

export async function getInstagramMetrics(
  handle: string,
  brandName: string,
): Promise<InstagramMetrics> {
  const result: InstagramMetrics = {
    followers: 0,
    following: null,
    posts: null,
    engagementRate: null,
    avgLikes: null,
    avgComments: null,
    reach: null,
    topPosts: [],
  };

  // Use both the handle and brand name to cast a wider net for the profile
  const handleClean = handle.replace(/^@/, "");
  const [profileResult, brandResult, engagementResult] = await Promise.all([
    serperSearch(`instagram.com/${handleClean} followers`),
    serperSearch(`"${brandName}" site:instagram.com followers`),
    serperSearch(
      `"${brandName}" instagram average likes per post engagement rate`,
    ),
  ]);

  // ── Extract followers / following / posts from profile search ────────────────
  const organic = profileResult?.organic ?? [];
  for (const item of organic) {
    const text = `${item.title ?? ""} ${item.snippet ?? ""}`;
    if (!result.followers) {
      const f =
        extractNumber(text, /([\d.,]+[KkMm]?)\s*Followers?/i) ??
        extractNumber(text, /Followers[:\s]+([\d.,]+[KkMm]?)/i);
      if (f) result.followers = f;
    }
    if (!result.following)
      result.following = extractNumber(text, /([\d.,]+[KkMm]?)\s*Following/i);
    if (!result.posts)
      result.posts = extractNumber(text, /([\d.,]+[KkMm]?)\s*Posts?/i);
  }

  // ── Brand search: followers + knowledge graph fallback ───────────────────────
  const brandOrganic = brandResult?.organic ?? [];
  for (const item of brandOrganic) {
    const text = `${item.title ?? ""} ${item.snippet ?? ""}`;
    if (!result.followers) {
      const f =
        extractNumber(text, /([\d.,]+[KkMm]?)\s*Followers?/i) ??
        extractNumber(text, /Followers[:\s]+([\d.,]+[KkMm]?)/i);
      if (f) result.followers = f;
    }
    if (!result.following)
      result.following = extractNumber(text, /([\d.,]+[KkMm]?)\s*Following/i);
    if (!result.posts)
      result.posts = extractNumber(text, /([\d.,]+[KkMm]?)\s*Posts?/i);

    if (!result.engagementRate) {
      const er = extractNumber(text, /([\d.]+)\s*%\s*engagement/i);
      if (er != null) result.engagementRate = er;
    }
  }

  const kg = brandResult?.knowledgeGraph;
  if (kg?.attributes && !result.followers) {
    const raw =
      kg.attributes["Followers"] ?? kg.attributes["Instagram followers"] ?? "";
    if (raw) result.followers = parseCount(raw) ?? 0;
  }

  // ── Engagement search: avgLikes + refine ER ──────────────────────────────────
  const engOrganic = engagementResult?.organic ?? [];
  for (const item of engOrganic) {
    const text = `${item.title ?? ""} ${item.snippet ?? ""}`;

    // "X likes per post" / "average X likes"
    if (!result.avgLikes) {
      result.avgLikes =
        extractNumber(text, /([\d.,]+[KkMm]?)\s*likes?\s*per\s*post/i) ??
        extractNumber(text, /average\s*([\d.,]+[KkMm]?)\s*likes?/i) ??
        extractNumber(text, /([\d.,]+[KkMm]?)\s*avg\s*likes?/i);
    }

    // "X comments per post"
    if (!result.avgComments) {
      result.avgComments =
        extractNumber(text, /([\d.,]+[KkMm]?)\s*comments?\s*per\s*post/i) ??
        extractNumber(text, /average\s*([\d.,]+[KkMm]?)\s*comments?/i);
    }

    // ER refinement from this search pass
    if (!result.engagementRate) {
      const er = extractNumber(text, /([\d.]+)\s*%\s*engagement/i);
      if (er != null) result.engagementRate = er;
    }

    // Followers fallback
    if (!result.followers) {
      const f = extractNumber(text, /([\d.,]+[KkMm]?)\s*Followers?/i);
      if (f) result.followers = f;
    }
  }

  // ── Compute engagement rate if still missing ─────────────────────────────────
  if (
    result.engagementRate == null &&
    result.avgLikes != null &&
    result.followers > 0
  ) {
    // ER = avg likes / followers * 100
    result.engagementRate =
      Math.round((result.avgLikes / result.followers) * 10000) / 100;
  }

  // ── Estimate avgLikes from ER if we have one but not the other ───────────────
  if (
    result.avgLikes == null &&
    result.engagementRate != null &&
    result.followers > 0
  ) {
    result.avgLikes = Math.round(
      (result.engagementRate / 100) * result.followers,
    );
  }

  return result;
}
