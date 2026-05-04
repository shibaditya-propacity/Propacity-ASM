import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { BrandAudit } from "../types";

export function useProspectBrandAudit(prospectId: string) {
  return useQuery({
    queryKey: growthKeys.prospectBrandAudit(prospectId),
    queryFn: () =>
      apiClient.get<BrandAudit>(`/growth/prospects/${prospectId}/brand-audit`),
    enabled: Boolean(prospectId),
    retry: (failureCount, error) => {
      // Don't retry 404 - prospect might not have an audit yet
      const apiErr = error as { statusCode?: number };
      if (apiErr.statusCode === 404) return false;
      return failureCount < 2;
    },
  });
}
