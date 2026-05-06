import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { FullAudit } from "../brand-audit.types";

export type { FullAudit, FullAuditDimension } from "../brand-audit.types";

export function useFullAuditByProspect(prospectId: string | undefined) {
  return useQuery({
    queryKey: growthKeys.fullAuditByProspect(prospectId ?? ""),
    queryFn: () =>
      apiClient.get<FullAudit | null>(
        `/brand-audit/audits/by-prospect/${prospectId}`,
      ),
    enabled: Boolean(prospectId),
    retry: (failureCount, error) => {
      const apiErr = error as { statusCode?: number };
      if (apiErr.statusCode === 404) return false;
      return failureCount < 2;
    },
  });
}
