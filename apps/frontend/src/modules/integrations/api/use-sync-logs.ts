import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { SyncLog } from "../types";

interface SyncLogsParams {
  limit?: number;
  offset?: number;
}

export function useSyncLogs(
  clientId: string,
  providerId: string,
  params: SyncLogsParams = {},
) {
  return useQuery({
    queryKey: integrationKeys.syncLogs(clientId, providerId, params),
    queryFn: () =>
      apiClient.get<SyncLog[]>(
        `/integrations/${clientId}/${providerId}/sync-logs`,
        {
          limit: params.limit ?? 20,
          offset: params.offset ?? 0,
        },
      ),
    enabled: Boolean(clientId) && Boolean(providerId),
  });
}
