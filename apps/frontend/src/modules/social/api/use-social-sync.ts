import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";
import type { SocialPlatform } from "../types";

interface SyncAllResult {
  platform: string;
  snapshotId: string | null;
  error?: string;
}

export function useSocialSyncAll(clientId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (brandName: string) =>
      apiClient.post<SyncAllResult[]>(`/social/${clientId}/sync`, {
        brandName,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: socialKeys.dashboard(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: socialKeys.profiles(clientId),
      });
    },
  });
}

export function useSocialSyncPlatform(clientId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      platform,
      brandName,
    }: {
      platform: SocialPlatform;
      brandName: string;
    }) =>
      apiClient.post<{ snapshotId: string }>(
        `/social/${clientId}/profiles/${platform}/sync`,
        { brandName },
      ),
    onSuccess: (_data, { platform }) => {
      queryClient.invalidateQueries({
        queryKey: socialKeys.dashboard(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: socialKeys.snapshots(clientId, platform),
      });
    },
  });
}
