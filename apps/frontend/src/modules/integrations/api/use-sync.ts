import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, ApiError } from "@/core/api/client";
import { integrationKeys } from "./keys";
import { toast } from "@/core/ui/toast";

export function useSync(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ syncLogId: string; status: string }>(
        `/integrations/${clientId}/${providerId}/sync`,
      ),
    onSuccess: () => {
      toast.success("Sync completed successfully.");
      // Invalidate using a 4-element prefix so all filter variants of sync-logs match
      queryClient.invalidateQueries({
        queryKey: [...integrationKeys.all, "sync-logs", clientId, providerId],
      });
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
    },
    onError: (err) => {
      const message =
        err instanceof ApiError
          ? err.message
          : "Sync failed. Please try again.";
      toast.error(message);
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
    },
  });
}
