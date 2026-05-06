import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { FullAudit } from "../brand-audit.types";

export function useFullAudits(filters?: { search?: string; status?: string }) {
  return useQuery({
    queryKey: growthKeys.fullAudits(filters),
    queryFn: () =>
      apiClient.get<FullAudit[]>("/brand-audit/audits", {
        ...(filters?.search && { search: filters.search }),
        ...(filters?.status && { status: filters.status }),
        limit: 100,
        page: 1,
      }),
  });
}
