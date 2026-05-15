import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, ApiError } from "@/core/api/client";
import { integrationKeys } from "./keys";
import { toast } from "@/core/ui/toast";

export function useDisconnect(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ success: boolean }>(
        `/integrations/${clientId}/${providerId}/disconnect`,
      ),
    onSuccess: () => {
      toast.success("Integration disconnected.");
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: integrationKeys.readiness(clientId),
      });
      queryClient.invalidateQueries({ queryKey: integrationKeys.matrix() });
    },
    onError: (err) => {
      const message =
        err instanceof ApiError ? err.message : "Failed to disconnect.";
      toast.error(message);
    },
  });
}
