import { useQueries } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";
import type { SocialSnapshot, SocialPlatform } from "../types";

export function useAllPlatformSnapshots(
  clientId: string,
  platforms: SocialPlatform[],
  limit = 30,
): Partial<Record<SocialPlatform, SocialSnapshot[]>> {
  const results = useQueries({
    queries: platforms.map((platform) => ({
      queryKey: socialKeys.snapshots(clientId, platform),
      queryFn: () =>
        apiClient.get<SocialSnapshot[]>(
          `/social/${clientId}/snapshots/${platform}?limit=${limit}`,
        ),
      enabled: Boolean(clientId),
      staleTime: 60_000,
    })),
  });

  const map: Partial<Record<SocialPlatform, SocialSnapshot[]>> = {};
  platforms.forEach((platform, i) => {
    const result = results[i];
    if (result?.data?.length) map[platform] = result.data;
  });
  return map;
}
