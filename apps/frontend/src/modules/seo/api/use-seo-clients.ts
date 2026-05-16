import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";

export interface SeoClient {
  id: string;
  tenantId: string;
  name: string;
  industry: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export function useSeoClients() {
  return useQuery({
    queryKey: seoKeys.clients(),
    queryFn: () => apiClient.get<SeoClient[]>("/integrations/clients"),
  });
}
