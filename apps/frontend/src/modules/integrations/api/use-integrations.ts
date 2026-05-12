import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { ProviderWithStatus } from "../types";

export function useIntegrations(clientId: string) {
  return useQuery({
    queryKey: integrationKeys.providers(clientId),
    queryFn: () =>
      apiClient.get<ProviderWithStatus[]>(`/integrations/${clientId}`),
    enabled: Boolean(clientId),
    refetchInterval: 60_000,
  });
}
