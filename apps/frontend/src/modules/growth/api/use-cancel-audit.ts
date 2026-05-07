import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { growthKeys } from "./keys";

export function useCancelAudit(auditId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      apiClient.post<{ success: boolean }>(
        `/brand-audit/audits/${auditId}/cancel`,
        {},
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: growthKeys.fullAudit(auditId),
      });
    },
  });
}
