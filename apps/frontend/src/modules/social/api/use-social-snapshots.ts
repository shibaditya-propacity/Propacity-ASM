import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";
import type { SocialSnapshot, SocialPlatform } from "../types";

export function useSocialSnapshots(
  clientId: string,
  platform: SocialPlatform,
  limit = 30,
) {
  return useQuery({
    queryKey: socialKeys.snapshots(clientId, platform),
    queryFn: () =>
      apiClient.get<SocialSnapshot[]>(
        `/social/${clientId}/snapshots/${platform}?limit=${limit}`,
      ),
    enabled: Boolean(clientId),
    staleTime: 60_000,
  });
}
