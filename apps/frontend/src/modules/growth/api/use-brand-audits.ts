import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { BrandAudit, ListBrandAuditsQuery } from "../types";

export function useBrandAudits(filters: Partial<ListBrandAuditsQuery> = {}) {
  return useQuery({
    queryKey: growthKeys.brandAudits(filters),
    queryFn: () =>
      apiClient.get<BrandAudit[]>("/growth/brand-audits", {
        ...(filters.prospectId !== undefined && { prospectId: filters.prospectId }),
        ...(filters.status !== undefined && { status: filters.status }),
        limit: filters.limit ?? 50,
        offset: filters.offset ?? 0,
      }),
  });
}
