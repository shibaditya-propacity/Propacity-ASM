import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Workshop, ListWorkshopsQuery } from "../types";

export function useWorkshops(filters: Partial<ListWorkshopsQuery> = {}) {
  return useQuery({
    queryKey: growthKeys.workshops(filters),
    queryFn: () =>
      apiClient.get<Workshop[]>("/growth/workshops", {
        ...(filters.status !== undefined && { status: filters.status }),
        ...(filters.search !== undefined && { search: filters.search }),
        limit: filters.limit ?? 50,
        offset: filters.offset ?? 0,
      }),
  });
}
