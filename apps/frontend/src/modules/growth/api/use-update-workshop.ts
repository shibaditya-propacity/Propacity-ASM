import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Workshop, UpdateWorkshopInput } from "../types";

export function useUpdateWorkshop(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateWorkshopInput) =>
      apiClient.patch<Workshop>(`/growth/workshops/${id}`, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.workshops() });
      queryClient.invalidateQueries({ queryKey: growthKeys.workshop(id) });
    },
  });
}
