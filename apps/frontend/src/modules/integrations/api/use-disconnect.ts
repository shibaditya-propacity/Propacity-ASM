import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";

export function useDisconnect(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ success: boolean }>(
        `/integrations/${clientId}/${providerId}/disconnect`,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: integrationKeys.readiness(clientId),
      });
      queryClient.invalidateQueries({ queryKey: integrationKeys.matrix() });
    },
  });
}
