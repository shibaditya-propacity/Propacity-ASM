import { fetchWithRetry, withRetry } from "../fetchWithRetry";

const SERPER_BASE = "https://google.serper.dev";

async function serperPost<T>(
  path: string,
  body: Record<string, unknown>,
): Promise<T> {
  const res = await fetchWithRetry(`${SERPER_BASE}${path}`, {
    method: "POST",
    headers: {
      "X-API-KEY": process.env.SERPER_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Serper ${path} error: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function getSerpResults(keyword: string) {
  const data = await withRetry(() =>
    serperPost<Record<string, unknown>>("/search", {
      q: keyword,
      gl: "in",
      hl: "en",
      num: 10,
    }),
  );
  return data ?? null;
}

export async function getPlacesResults(query: string) {
  try {
    const data = await withRetry(() =>
      serperPost<Record<string, unknown>>("/places", {
        q: query,
        gl: "in",
        hl: "en",
      }),
    );
    return data ?? null;
  } catch {
    return null;
  }
}

/** Search for a brand's presence on a specific social platform */
export async function getSocialProfileUrl(
  brandName: string,
  platform:
    | "instagram.com"
    | "linkedin.com/company"
    | "facebook.com"
    | "youtube.com"
    | "twitter.com",
): Promise<string | null> {
  try {
    const data = await withRetry(() =>
      serperPost<{ organic?: Array<{ link: string }> }>("/search", {
        q: `${brandName} site:${platform}`,
        gl: "in",
        hl: "en",
        num: 3,
      }),
    );
    const organic = data?.organic ?? [];
    const hit = organic.find((r) =>
      r.link?.includes(platform.split("/")[0] ?? ""),
    );
    return hit?.link ?? null;
  } catch {
    return null;
  }
}

// No Serper equivalent — returns null
export async function getBacklinksSummary(_domain: string) {
  return null;
}

// No Serper equivalent — returns null
export async function postOnPageTask(_domain: string): Promise<string | null> {
  return null;
}

// No Serper equivalent — returns null
export async function getOnPageResults(_taskId: string) {
  return null;
}

// No Serper equivalent — returns null
export async function postGoogleReviewsTask(
  _brandName: string,
): Promise<string | null> {
  return null;
}

// No Serper equivalent — returns null
export async function getGoogleReviewsResults(_taskId: string) {
  return null;
}

export interface DiscoveredCompetitor {
  name: string;
  link: string;
  domain: string;
  snippet?: string;
  address?: string;
  rating?: number;
  source: "organic" | "places";
}

/**
 * Build targeted competitor search queries from brand context + SERP keywords,
 * then run them through Serper to discover competitor companies.
 */
export async function searchCompetitors(
  brandName: string,
  productType: string,
  city: string,
  serpKeywords: string[],
): Promise<DiscoveredCompetitor[]> {
  // Build 2-3 targeted queries — always have at least one fallback
  const queries: string[] = [];
  const location = city || "India";

  if (productType && city) {
    queries.push(`top ${productType} companies in ${city}`);
    queries.push(`best ${productType} developers ${city}`);
  } else if (city) {
    queries.push(`real estate developers in ${city}`);
    queries.push(`top builders in ${city}`);
  } else if (productType) {
    queries.push(`top ${productType} companies India`);
  }

  if (serpKeywords.length > 0) {
    const kw = serpKeywords[0] ?? "";
    if (kw) queries.push(`${kw} companies ${location}`);
  }

  // Always ensure at least one query using the brand name as context
  if (queries.length === 0) {
    queries.push(`competitors of ${brandName} real estate`);
    queries.push(`real estate developers India`);
  }

  const seen = new Set<string>([brandName.toLowerCase()]);
  const competitors: DiscoveredCompetitor[] = [];

  await Promise.allSettled(
    queries.slice(0, 3).map(async (q) => {
      // Run organic + places in parallel per query
      const [organicRes, placesRes] = await Promise.allSettled([
        withRetry(() =>
          serperPost<{
            organic?: Array<{ title: string; link: string; snippet?: string }>;
          }>("/search", { q, gl: "in", hl: "en", num: 10 }),
        ),
        withRetry(() =>
          serperPost<{
            places?: Array<{
              title: string;
              address?: string;
              rating?: number;
              website?: string;
            }>;
          }>("/places", { q, gl: "in", hl: "en" }),
        ),
      ]);

      if (organicRes.status === "fulfilled") {
        const organic = organicRes.value.organic ?? [];
        for (const item of organic) {
          if (!item.title || !item.link) continue;
          let domain = "";
          try {
            domain = new URL(item.link).hostname.replace("www.", "");
          } catch {
            continue;
          }
          const key = item.title.toLowerCase();
          if (seen.has(key) || key.includes(brandName.toLowerCase())) continue;
          // Skip generic aggregator/portal sites
          if (
            /99acres|housing\.com|magicbricks|justdial|sulekha|indiamart|wikipedia|linkedin\.com\/(jobs|company\/search)/i.test(
              domain,
            )
          )
            continue;
          seen.add(key);
          competitors.push({
            name: item.title,
            link: item.link,
            domain,
            snippet: item.snippet,
            source: "organic",
          });
        }
      }

      if (placesRes.status === "fulfilled") {
        const places = placesRes.value.places ?? [];
        for (const place of places) {
          if (!place.title) continue;
          const key = place.title.toLowerCase();
          if (seen.has(key) || key.includes(brandName.toLowerCase())) continue;
          seen.add(key);
          const link = place.website || "";
          let domain = "";
          try {
            domain = link ? new URL(link).hostname.replace("www.", "") : "";
          } catch {
            /* ignore */
          }
          competitors.push({
            name: place.title,
            link,
            domain,
            address: place.address,
            rating: place.rating,
            source: "places",
          });
        }
      }
    }),
  );

  return competitors.slice(0, 15);
}

export function findDomainInSerp(
  serpResult: { organic?: Array<{ link: string; position: number }> },
  domain: string,
) {
  if (!serpResult?.organic) return null;
  const normalizedDomain = domain.replace(/^www\./, "");
  const found = serpResult.organic.find((item) => {
    try {
      return new URL(item.link).hostname
        .replace(/^www\./, "")
        .includes(normalizedDomain);
    } catch {
      return false;
    }
  });
  return found ? { ...found } : null;
}
