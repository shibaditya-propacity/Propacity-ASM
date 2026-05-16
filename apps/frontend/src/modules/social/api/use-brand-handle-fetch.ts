import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import type { FetchedHandle } from "../types";

export function useBrandHandleFetch(clientId: string) {
  return useMutation({
    mutationFn: (brandName: string) =>
      apiClient.post<FetchedHandle[]>(`/social/${clientId}/fetch-handles`, {
        brandName,
      }),
  });
}
