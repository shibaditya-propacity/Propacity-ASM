import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, ApiError } from "@/core/api/client";
import { integrationKeys } from "./keys";
import { toast } from "@/core/ui/toast";

export function useUpdateAccountLabel(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (accountLabel: string) =>
      apiClient.patch<{ success: boolean }>(
        `/integrations/${clientId}/${providerId}/account-label`,
        { accountLabel },
      ),
    onSuccess: () => {
      toast.success("Account identifier saved.");
      queryClient.invalidateQueries({
        queryKey: integrationKeys.providers(clientId),
      });
    },
    onError: (err) => {
      toast.error(
        err instanceof ApiError ? err.message : "Failed to save identifier.",
      );
    },
  });
}
