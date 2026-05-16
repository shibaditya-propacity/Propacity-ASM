import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { seoKeys } from "./keys";
import type {
  SeoAction,
  ActionStatus,
  ImpactLevel,
  EffortLevel,
  ActionCategory,
} from "../types";

export interface CreateActionInput {
  title: string;
  description?: string;
  category?: ActionCategory;
  impactLevel?: ImpactLevel;
  effortLevel?: EffortLevel;
  assignedTo?: string;
  dueDate?: string;
}

export interface UpdateActionInput {
  title?: string;
  description?: string | null;
  category?: ActionCategory;
  impactLevel?: ImpactLevel;
  effortLevel?: EffortLevel;
  status?: ActionStatus;
  assignedTo?: string | null;
  dueDate?: string | null;
}

export function useCreateAction(clientId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateActionInput) =>
      apiClient.post<SeoAction>(`/seo/${clientId}/actions`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.actions(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
    },
  });
}

export function useUpdateAction(clientId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      actionId,
      input,
    }: {
      actionId: string;
      input: UpdateActionInput;
    }) =>
      apiClient.patch<SeoAction>(`/seo/${clientId}/actions/${actionId}`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.actions(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
    },
  });
}

export function useDeleteAction(clientId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (actionId: string) =>
      apiClient.delete<void>(`/seo/${clientId}/actions/${actionId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.actions(clientId) });
      queryClient.invalidateQueries({ queryKey: seoKeys.dashboard(clientId) });
    },
  });
}
