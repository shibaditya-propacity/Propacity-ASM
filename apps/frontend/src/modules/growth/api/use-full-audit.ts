import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { FullAudit } from "../brand-audit.types";

export function useFullAudit(id: string | undefined) {
  return useQuery({
    queryKey: growthKeys.fullAudit(id ?? ""),
    queryFn: () => apiClient.get<FullAudit>(`/brand-audit/audits/${id}`),
    enabled: Boolean(id),
  });
}
