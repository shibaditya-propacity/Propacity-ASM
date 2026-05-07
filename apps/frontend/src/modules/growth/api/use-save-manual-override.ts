import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";

export function useSaveManualOverride(auditId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      dimensionCode,
      data,
    }: {
      dimensionCode: string;
      data: Record<string, unknown>;
    }) =>
      apiClient.post<{ success: boolean }>(
        `/brand-audit/audits/${auditId}/manual-input`,
        { dimensionCode, data },
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: growthKeys.fullAudit(auditId),
      });
    },
  });
}
