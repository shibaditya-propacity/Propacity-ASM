import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";
import type { SocialDashboard } from "../types";

export function useSocialDashboard(clientId: string) {
  return useQuery({
    queryKey: socialKeys.dashboard(clientId),
    queryFn: () =>
      apiClient.get<SocialDashboard>(`/social/${clientId}/dashboard`),
    enabled: Boolean(clientId),
    staleTime: 60_000,
  });
}
