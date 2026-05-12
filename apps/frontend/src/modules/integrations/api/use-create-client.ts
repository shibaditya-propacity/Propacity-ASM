import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";
import type { Client, CreateClientInput } from "../types";

export function useCreateClient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateClientInput) =>
      apiClient.post<Client>("/integrations/clients", input),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: integrationKeys.clientsList(),
      });
    },
  });
}
