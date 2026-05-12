import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";

export function useSync(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ syncLogId: string; status: string }>(
        `/integrations/${clientId}/${providerId}/sync`,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: integrationKeys.syncLogs(clientId, providerId),
      });
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
    },
  });
}
