import { fetchWithRetry, withRetry } from "../fetchWithRetry";
import type { GooglePlaceResult, GooglePlaceDetails } from "../api-types";

const GEOAPIFY_BASE = "https://api.geoapify.com";
const API_KEY = process.env.GEOAPIFY_API_KEY;
const GOOGLE_PLACES_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACES_BASE = "https://maps.googleapis.com/maps/api/place";

function buildUrl(
  base: string,
  params: Record<string, string | number | undefined>,
): string {
  const url = new URL(base);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "") url.searchParams.set(k, String(v));
  }
  return url.toString();
}

export async function autocompletePlace(
  input: string,
): Promise<GooglePlaceResult[]> {
  const url = buildUrl(`${GEOAPIFY_BASE}/v1/geocode/autocomplete`, {
    text: input,
    type: "amenity",
    limit: 5,
    apiKey: API_KEY,
  });
  const res = await fetchWithRetry(url, {}, 2, 15000);
  if (!res.ok) throw new Error(`Geoapify autocomplete error: ${res.status}`);
  const data = (await res.json()) as {
    features?: Array<{ properties: Record<string, string> }>;
  };
  const features = data?.features || [];
  return features.map((f) => ({
    place_id: f.properties.place_id ?? "",
    description: f.properties.formatted ?? "",
    structured_formatting: {
      main_text: f.properties.name || f.properties.address_line1 || "",
      secondary_text: f.properties.address_line2 || "",
    },
  }));
}

export async function getPlaceDetails(
  placeId: string,
): Promise<GooglePlaceDetails | null> {
  try {
    const url = buildUrl(`${GEOAPIFY_BASE}/v2/place-details`, {
      id: placeId,
      apiKey: API_KEY,
    });
    const res = await withRetry(() => fetchWithRetry(url, {}, 2, 15000));
    if (!res.ok) return null;
    const data = (await res.json()) as {
      features?: Array<{
        properties: {
          name?: string;
          rating?: number;
          user_ratings_total?: number;
          formatted?: string;
          website?: string;
          contact?: { phone?: string };
          opening_hours?: unknown;
        };
      }>;
    };
    const p = data?.features?.[0]?.properties;
    if (!p) return null;
    return {
      name: p.name ?? "",
      rating: p.rating,
      user_ratings_total: p.user_ratings_total,
      formatted_address: p.formatted,
      website: p.website,
      formatted_phone_number: p.contact?.phone,
      opening_hours: p.opening_hours ? { open_now: true } : undefined,
    };
  } catch {
    return null;
  }
}

export interface ReviewData {
  rating: number | null;
  user_ratings_total: number | null;
  address: string | null;
  website: string | null;
  phone: string | null;
  reviews: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    relative_time_description?: string;
  }>;
  source: "google_places" | "serper" | "none";
}

/**
 * Fetch place rating + reviews via Google Places API.
 * Requires GOOGLE_PLACES_API_KEY.
 * Returns up to 5 reviews (Google Places free tier limit).
 */
export async function getGooglePlaceReviews(
  brandName: string,
  city?: string,
): Promise<ReviewData> {
  const empty: ReviewData = {
    rating: null,
    user_ratings_total: null,
    address: null,
    website: null,
    phone: null,
    reviews: [],
    source: "none",
  };

  if (!GOOGLE_PLACES_KEY) {
    console.warn(
      "[googlePlaces] GOOGLE_PLACES_API_KEY not set — skipping Google Places reviews",
    );
    return empty;
  }

  try {
    // Step 1: find the Google Place ID by name + city
    const query = city ? `${brandName} ${city}` : brandName;
    const findUrl = buildUrl(`${GOOGLE_PLACES_BASE}/findplacefromtext/json`, {
      input: query,
      inputtype: "textquery",
      fields: "place_id,name,rating,user_ratings_total,formatted_address",
      key: GOOGLE_PLACES_KEY,
    });
    const findRes = await withRetry(() =>
      fetchWithRetry(findUrl, {}, 2, 10000),
    );
    if (!findRes.ok) return empty;
    const findData = (await findRes.json()) as {
      candidates?: Array<{ place_id?: string }>;
    };

    const candidate = findData?.candidates?.[0];
    if (!candidate?.place_id) return empty;

    // Step 2: fetch place details with reviews
    const detailsUrl = buildUrl(`${GOOGLE_PLACES_BASE}/details/json`, {
      place_id: candidate.place_id,
      fields:
        "name,rating,user_ratings_total,formatted_address,website,formatted_phone_number,reviews",
      key: GOOGLE_PLACES_KEY,
      reviews_sort: "newest",
    });
    const detailsRes = await withRetry(() =>
      fetchWithRetry(detailsUrl, {}, 2, 10000),
    );
    if (!detailsRes.ok) return empty;
    const detailsData = (await detailsRes.json()) as {
      result?: {
        rating?: number;
        user_ratings_total?: number;
        formatted_address?: string;
        website?: string;
        formatted_phone_number?: string;
        reviews?: Array<{
          author_name: string;
          rating: number;
          text: string;
          time: number;
          relative_time_description?: string;
        }>;
      };
    };

    const p = detailsData?.result;
    if (!p) return empty;

    return {
      rating: p.rating ?? null,
      user_ratings_total: p.user_ratings_total ?? null,
      address: p.formatted_address ?? null,
      website: p.website ?? null,
      phone: p.formatted_phone_number ?? null,
      reviews: (p.reviews ?? []).map((r) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.time,
        relative_time_description: r.relative_time_description,
      })),
      source: "google_places",
    };
  } catch (err) {
    console.error(
      "[googlePlaces] Google Places API error:",
      err instanceof Error ? err.message : err,
    );
    return empty;
  }
}

/**
 * Fallback: use Serper /places to at least get rating + count when
 * Google Places API key is not available.
 */
export async function getSerperPlaceRating(
  brandName: string,
  city?: string,
): Promise<
  Pick<ReviewData, "rating" | "user_ratings_total" | "address" | "source">
> {
  try {
    const { getSerpResults } = await import("./dataForSeo");
    const query = city ? `${brandName} ${city}` : brandName;
    const res = await getSerpResults(query);
    // Serper /places results come back in answerBox or knowledgeGraph for local businesses
    const kg = (res as Record<string, unknown> | null)?.knowledgeGraph as
      | { rating?: string; reviews?: string | number; address?: string }
      | undefined;
    if (kg?.rating) {
      return {
        rating: parseFloat(kg.rating) || null,
        user_ratings_total: kg.reviews
          ? parseInt(String(kg.reviews).replace(/\D/g, "")) || null
          : null,
        address: kg.address ?? null,
        source: "serper",
      };
    }
    return {
      rating: null,
      user_ratings_total: null,
      address: null,
      source: "none",
    };
  } catch {
    return {
      rating: null,
      user_ratings_total: null,
      address: null,
      source: "none",
    };
  }
}
