import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Workshop } from "../types";

export function useWorkshop(id: string) {
  return useQuery({
    queryKey: growthKeys.workshop(id),
    queryFn: () => apiClient.get<Workshop>(`/growth/workshops/${id}`),
    enabled: Boolean(id),
  });
}
