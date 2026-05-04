import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Prospect } from "../types";

export function useProspect(id: string) {
  return useQuery({
    queryKey: growthKeys.prospect(id),
    queryFn: () => apiClient.get<Prospect>(`/growth/prospects/${id}`),
    enabled: Boolean(id),
  });
}
