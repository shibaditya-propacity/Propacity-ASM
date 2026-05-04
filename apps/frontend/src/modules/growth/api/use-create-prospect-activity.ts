import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { ProspectActivity, CreateProspectActivityInput } from "../types";

export function useCreateProspectActivity(prospectId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateProspectActivityInput) =>
      apiClient.post<ProspectActivity>(
        `/growth/prospects/${prospectId}/activities`,
        input
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: growthKeys.prospectActivities(prospectId),
      });
    },
  });
}
