import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";

export interface BrandLookupResult {
  brandName: string;
  domain: string | null;
  websiteUrl: string | null;
  logo: string | null;
  industry: string | null;
  description: string | null;
  founded: number | null;
  social: {
    instagram: string | null;
    linkedin: string | null;
    facebook: string | null;
    youtube: string | null;
    twitter: string | null;
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
