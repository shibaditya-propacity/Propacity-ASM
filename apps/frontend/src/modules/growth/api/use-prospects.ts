import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Prospect, ListProspectsQuery } from "../types";

export function useProspects(filters: Partial<ListProspectsQuery> = {}) {
  return useQuery({
    queryKey: growthKeys.prospects(filters),
    queryFn: () =>
      apiClient.get<Prospect[]>("/growth/prospects", {
        ...(filters.workshopId !== undefined && { workshopId: filters.workshopId }),
        ...(filters.stage !== undefined && { stage: filters.stage }),
        ...(filters.classification !== undefined && { classification: filters.classification }),
        ...(filters.search !== undefined && { search: filters.search }),
        limit: filters.limit ?? 50,
        offset: filters.offset ?? 0,
      }),
  });
}
