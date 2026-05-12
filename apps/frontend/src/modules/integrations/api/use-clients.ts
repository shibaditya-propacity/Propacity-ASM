import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { Client } from "../types";

export function useClients() {
  return useQuery({
    queryKey: integrationKeys.clientsList(),
    queryFn: () => apiClient.get<Client[]>("/integrations/clients"),
  });
}
