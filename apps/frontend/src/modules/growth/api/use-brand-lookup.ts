import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";

export interface YouTubeVideo {
  videoId: string;
  title: string;
  publishedAt: string;
  viewCount: number | null;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface BrandLookupResult {
  brandName: string;
  domain: string | null;
  websiteUrl: string | null;
  logo: string | null;
  industry: string | null;
  description: string | null;
  founded: number | null;

  social: {
    instagram: {
      url: string | null;
      handle: string | null;
      followers: number | null;
      totalPosts: number | null;
    };
    linkedin: {
      url: string | null;
      followers: number | null;
      employees: number | null;
    };
    facebook: {
      url: string | null;
      likes: number | null;
      followers: number | null;
    };
    youtube: {
      url: string | null;
      subscribers: number | null;
      totalVideos: number | null;
      videos: YouTubeVideo[];
    };
    twitter: { url: string | null };
  };

  techStack: {
    cms: string | null;
    framework: string | null;
    analytics: string[];
    adPixels: string[];
    otherTech: string[];
  } | null;

  fonts: string[];
  colors: string[];

  developerCredit: {
    name: string | null;
    url: string | null;
    confidence: "Confirmed" | "Likely" | "Unknown";
  } | null;

  seo: {
    metaTitle: string | null;
    metaDescription: string | null;
    ogImage: string | null;
    hasSSL: boolean;
    hasRobotsTxt: boolean | null;
    hasSitemap: boolean | null;
    canonical: string | null;
  };
}

export function useBrandLookup(brandName: string, city?: string) {
  const cityKey = city ?? "";
  return useQuery({
    queryKey: growthKeys.brandLookup(brandName, cityKey),
    queryFn: () =>
      apiClient.get<BrandLookupResult>("/brand-audit/lookup", {
        brandName,
        ...(city ? { city } : {}),
      }),
    enabled: brandName.trim().length >= 2,
    staleTime: 5 * 60_000,
    retry: false,
  });
}
