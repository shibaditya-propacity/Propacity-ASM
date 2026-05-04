import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { Workshop, CreateWorkshopInput } from "../types";

export function useCreateWorkshop() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateWorkshopInput) =>
      apiClient.post<Workshop>("/growth/workshops", input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.workshops() });
    },
  });
}
