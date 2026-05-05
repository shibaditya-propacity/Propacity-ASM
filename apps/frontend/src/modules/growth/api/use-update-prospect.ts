import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Prospect, UpdateProspectInput } from "../types";

export function useUpdateProspect(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateProspectInput) =>
      apiClient.patch<Prospect>(`/growth/prospects/${id}`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.prospect(id) });
      queryClient.invalidateQueries({ queryKey: growthKeys.prospectsList() });
    },
  });
}
