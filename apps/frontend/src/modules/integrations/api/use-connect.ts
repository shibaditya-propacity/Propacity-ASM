import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type {
  Integration,
  ConnectApiKeyInput,
  ConnectOAuthInput,
} from "../types";

export function useConnectApiKey(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ConnectApiKeyInput) =>
      apiClient.post<Integration>(
        `/integrations/${clientId}/${providerId}/connect/api-key`,
        input,
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

export function useConnectOAuth(clientId: string, providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ConnectOAuthInput) =>
      apiClient.post<Integration>(
        `/integrations/${clientId}/${providerId}/connect/oauth`,
        input,
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
