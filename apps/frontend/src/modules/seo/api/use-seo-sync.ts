import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";

export function useSeoSync(clientId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      apiClient.post<{ snapshotId: string }>(`/seo/${clientId}/sync`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
      queryClient.invalidateQueries({
        queryKey: seoKeys.organicTraffic(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: seoKeys.rankTracking(clientId),
      });
      queryClient.invalidateQueries({ queryKey: seoKeys.keywords(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.actions(clientId) });
    },
  });
}
