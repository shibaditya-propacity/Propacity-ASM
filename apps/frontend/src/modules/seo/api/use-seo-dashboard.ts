import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";
import type { SeoDashboard } from "../types";

export function useSeoDashboard(clientId: string) {
  return useQuery({
    queryKey: seoKeys.dashboard(clientId),
    queryFn: () => apiClient.get<SeoDashboard>(`/seo/${clientId}/dashboard`),
    enabled: Boolean(clientId),
    staleTime: 60_000,
  });
}
