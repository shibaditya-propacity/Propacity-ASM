import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { ModuleReadiness } from "../types";

export function useReadiness(clientId: string) {
  return useQuery({
    queryKey: integrationKeys.readiness(clientId),
    queryFn: () =>
      apiClient.get<ModuleReadiness[]>(`/integrations/${clientId}/readiness`),
    enabled: Boolean(clientId),
  });
}
