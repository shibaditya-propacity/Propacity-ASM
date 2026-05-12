import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { PlatformIntegration, ConnectApiKeyInput } from "../types";

export function usePlatformIntegrations() {
  return useQuery({
    queryKey: integrationKeys.platform(),
    queryFn: () =>
      apiClient.get<PlatformIntegration[]>("/integrations/platform"),
  });
}

export function useConnectPlatform(providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ConnectApiKeyInput) =>
      apiClient.post<PlatformIntegration>(
        `/integrations/platform/${providerId}/connect`,
        input,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: integrationKeys.platform() });
    },
  });
}

export function useSyncPlatform(providerId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ status: string }>(
        `/integrations/platform/${providerId}/sync`,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: integrationKeys.platform() });
    },
  });
}
