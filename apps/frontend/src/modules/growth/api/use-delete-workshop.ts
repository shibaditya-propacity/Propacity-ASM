import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";

export function useDeleteWorkshop() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiClient.delete<void>(`/growth/workshops/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.workshops() });
    },
  });
}
