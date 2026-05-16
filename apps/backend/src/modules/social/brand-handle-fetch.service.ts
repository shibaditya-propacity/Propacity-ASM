/**
 * Searches for a brand's social media handles across platforms using Serper.
 * Uses the SERPER_API_KEY already in .env (same key used by Brand Audit module).
 */

import type { FetchedHandle, SocialPlatformValue } from "./social.dto";

const SERPER_BASE = "https://google.serper.dev";

async function serperSearch(
  query: string,
): Promise<{
  organic?: Array<{ link: string; title?: string; snippet?: string }>;
} | null> {
  const apiKey = process.env["SERPER_API_KEY"];
  if (!apiKey) return null;

  try {
    const res = await fetch(`${SERPER_BASE}/search`, {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: query, gl: "in", hl: "en", num: 5 }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    return res.json() as Promise<{
      organic?: Array<{ link: string; title?: string; snippet?: string }>;
    }>;
  } catch {
    return null;
  }
}

const HANDLE_PATTERNS: Record<
  SocialPlatformValue,
  { site: string; regex: RegExp }
> = {
  INSTAGRAM: {
    site: "instagram.com",
    regex: /instagram\.com\/([a-zA-Z0-9_.]{1,30})\/?(?:\?|$|#)/,
  },
  FACEBOOK: {
    site: "facebook.com",
    regex: /facebook\.com\/([a-zA-Z0-9_.]{1,60})\/?(?:\?|$|#|\/)/,
  },
  LINKEDIN: {
    site: "linkedin.com/company",
    regex: /linkedin\.com\/company\/([a-zA-Z0-9_-]{1,60})\/?(?:\?|$|#|\/)/,
  },
  YOUTUBE: {
    site: "youtube.com",
    regex:
      /youtube\.com\/(?:@([a-zA-Z0-9_.-]{1,60})|c\/([a-zA-Z0-9_.-]{1,60})|channel\/(UC[a-zA-Z0-9_-]{1,60})|user\/([a-zA-Z0-9_.-]{1,60}))\/?/,
  },
};

function extractHandle(
  url: string,
  platform: SocialPlatformValue,
): string | null {
  const pattern = HANDLE_PATTERNS[platform];
  if (!pattern) return null;
  const m = url.match(pattern.regex);
  if (!m) return null;
  // For YouTube, the groups are at different indices
  if (platform === "YOUTUBE") {
    return m[1] ?? m[2] ?? m[3] ?? m[4] ?? null;
  }
  return m[1] ?? null;
}

function buildProfileUrl(
  platform: SocialPlatformValue,
  handle: string,
): string {
  switch (platform) {
    case "INSTAGRAM":
      return `https://www.instagram.com/${handle}/`;
    case "FACEBOOK":
      return `https://www.facebook.com/${handle}/`;
    case "LINKEDIN":
      return `https://www.linkedin.com/company/${handle}/`;
    case "YOUTUBE":
      return handle.startsWith("UC")
        ? `https://www.youtube.com/channel/${handle}`
        : `https://www.youtube.com/@${handle}`;
  }
}

async function findHandleForPlatform(
  brandName: string,
  platform: SocialPlatformValue,
): Promise<FetchedHandle> {
  const config = HANDLE_PATTERNS[platform];
  const query = `${brandName} site:${config.site}`;

  const result = await serperSearch(query);
  const organic = result?.organic ?? [];

  for (const item of organic) {
    const url = item.link ?? "";
    // Skip generic platform pages (home page, explore, etc.)
    if (url === `https://www.${config.site}/`) continue;
    if (/\/(explore|reel|stories|trending|hashtag)\//i.test(url)) continue;

    const handle = extractHandle(url, platform);
    if (!handle) continue;
    // Skip obviously wrong handles (platform page keywords)
    if (
      ["explore", "accounts", "about", "login", "signup", "help"].includes(
        handle.toLowerCase(),
      )
    )
      continue;

    return {
      platform,
      handle,
      profileUrl: buildProfileUrl(platform, handle),
      confidence: 0.85,
      autoFetched: true,
    };
  }

  return {
    platform,
    handle: "",
    profileUrl: null,
    confidence: 0,
    autoFetched: false,
  };
}

export async function fetchBrandHandles(
  brandName: string,
): Promise<FetchedHandle[]> {
  const platforms: SocialPlatformValue[] = [
    "INSTAGRAM",
    "FACEBOOK",
    "LINKEDIN",
    "YOUTUBE",
  ];

  const results = await Promise.allSettled(
    platforms.map((p) => findHandleForPlatform(brandName, p)),
  );

  return results.map((r, i) => {
    if (r.status === "fulfilled") return r.value;
    return {
      platform: platforms[i]!,
      handle: "",
      profileUrl: null,
      confidence: 0,
      autoFetched: false,
    };
  });
}
