import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { FullAudit, CreateFullAuditInput } from "../brand-audit.types";

export function useCreateFullAudit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateFullAuditInput) =>
      apiClient.post<FullAudit>("/brand-audit/audits", input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: growthKeys.fullAudits() });
    },
  });
}
