import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Prospect, CreateProspectInput } from "../types";

export function useCreateProspect() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateProspectInput) =>
      apiClient.post<Prospect>("/growth/prospects", input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.prospectsList() });
    },
  });
}
