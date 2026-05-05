import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Prospect, UpdateProspectStageInput } from "../types";

export function useUpdateProspectStage(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateProspectStageInput) =>
      apiClient.post<Prospect>(`/growth/prospects/${id}/stage`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.prospect(id) });
      queryClient.invalidateQueries({ queryKey: growthKeys.prospectsList() });
      queryClient.invalidateQueries({
        queryKey: growthKeys.prospectActivities(id),
      });
    },
  });
}
