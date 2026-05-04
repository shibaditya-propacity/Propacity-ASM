import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";
import type { BrandAudit, CreateBrandAuditInput } from "../types";

export function useCreateBrandAudit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateBrandAuditInput) =>
      apiClient.post<BrandAudit>("/growth/brand-audits", input),
    onSuccess: (_, input) => {
      queryClient.invalidateQueries({ queryKey: growthKeys.brandAudits() });
      queryClient.invalidateQueries({
        queryKey: growthKeys.prospectBrandAudit(input.prospectId),
      });
    },
  });
}
