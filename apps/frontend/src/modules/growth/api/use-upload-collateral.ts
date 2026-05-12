import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getToken } from "@/core/auth/token";
import { growthKeys } from "./keys";
import type { CollateralAsset } from "../brand-audit.types";

const BASE_URL =
  (import.meta.env["VITE_API_BASE_URL"] as string | undefined) ??
  "http://localhost:3000/api/v1";

export function useUploadCollateral(auditId: string) {
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File): Promise<CollateralAsset | null> {
    setUploading(true);
    setError(null);

    try {
      const base64 = await readAsBase64(file);

      const res = await fetch(
        `${BASE_URL}/brand-audit/audits/${auditId}/collateral-upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken() ?? ""}`,
          },
          body: JSON.stringify({
            fileData: base64,
            fileName: file.name,
            size: file.size,
          }),
        },
      );

      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(err.error ?? `Upload failed (${res.status})`);
      }

      const json = (await res.json()) as { data: CollateralAsset };
      void queryClient.invalidateQueries({
        queryKey: growthKeys.fullAudit(auditId),
      });
      return json.data;
    } catch (err) {
      setError((err as Error).message ?? "Upload failed");
      return null;
    } finally {
      setUploading(false);
    }
  }

  return { upload, uploading, error };
}

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
