import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";
import type { SeoKeyword, AddKeywordInput } from "../types";

export function useSeoKeywords(clientId: string) {
  return useQuery({
    queryKey: seoKeys.keywords(clientId),
    queryFn: () => apiClient.get<SeoKeyword[]>(`/seo/${clientId}/keywords`),
    enabled: Boolean(clientId),
  });
}

export function useAddSeoKeyword(clientId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: AddKeywordInput) =>
      apiClient.post<SeoKeyword>(`/seo/${clientId}/keywords`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.keywords(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
    },
  });
}

export function useRemoveSeoKeyword(clientId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (keywordId: string) =>
      apiClient.delete<void>(`/seo/${clientId}/keywords/${keywordId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.keywords(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
    },
  });
}
