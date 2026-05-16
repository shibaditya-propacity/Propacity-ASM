import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";

export interface SocialClient {
  id: string;
  tenantId: string;
  name: string;
  industry: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export function useSocialClients() {
  return useQuery({
    queryKey: socialKeys.clients(),
    queryFn: () => apiClient.get<SocialClient[]>("/integrations/clients"),
  });
}
