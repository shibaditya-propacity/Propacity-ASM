import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { ProspectActivity } from "../types";

export function useProspectActivities(prospectId: string) {
  return useQuery({
    queryKey: growthKeys.prospectActivities(prospectId),
    queryFn: () =>
      apiClient.get<ProspectActivity[]>(`/growth/prospects/${prospectId}/activities`),
    enabled: Boolean(prospectId),
  });
}
