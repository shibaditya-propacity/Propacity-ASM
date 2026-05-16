import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";
import type { SeoAction, ActionCounts, ActionsFilters } from "../types";

interface ActionsResponse {
  actions: SeoAction[];
  counts: ActionCounts;
}

export function useSeoActions(clientId: string, filters?: ActionsFilters) {
  const params = new URLSearchParams();
  if (filters?.status) params.set("status", filters.status);
  if (filters?.impact) params.set("impact", filters.impact);
  if (filters?.effort) params.set("effort", filters.effort);
  if (filters?.category) params.set("category", filters.category);

  const qs = params.toString();
  const url = qs
    ? `/seo/${clientId}/actions?${qs}`
    : `/seo/${clientId}/actions`;

  return useQuery({
    queryKey: [...seoKeys.actions(clientId), filters],
    queryFn: () => apiClient.get<ActionsResponse>(url),
    enabled: Boolean(clientId),
  });
}
