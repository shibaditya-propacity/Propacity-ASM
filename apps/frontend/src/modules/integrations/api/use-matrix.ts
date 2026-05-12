import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { ConnectionMatrix } from "../types";

export function useMatrix() {
  return useQuery({
    queryKey: integrationKeys.matrix(),
    queryFn: () => apiClient.get<ConnectionMatrix>("/integrations/matrix"),
  });
}
