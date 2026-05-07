import { useState, useCallback, useRef } from "react";
import { getToken } from "@/core/auth/token";
import type { ProgressEvent } from "../brand-audit.types";

const BASE_URL =
  (import.meta.env["VITE_API_BASE_URL"] as string | undefined) ??
  "http://localhost:3000/api/v1";

export function useRerunDimension(
  auditId: string,
  dimension: string,
  onComplete?: () => void,
) {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<ProgressEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const run = useCallback(
    async (skipCollection = true) => {
      if (running) return;
      setRunning(true);
      setEvents([]);
      setError(null);
      abortRef.current = new AbortController();

      try {
        const url = new URL(`${BASE_URL}/brand-audit/audits/${auditId}/rerun`);
        url.searchParams.set("dimension", dimension);
        url.searchParams.set("skipCollection", String(skipCollection));

        const res = await fetch(url.toString(), {
          headers: { Authorization: `Bearer ${getToken() ?? ""}` },
          signal: abortRef.current.signal,
        });

        if (!res.ok || !res.body) throw new Error(`Server error ${res.status}`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            try {
              const event = JSON.parse(line.slice(6)) as ProgressEvent;
              setEvents((prev) => [...prev, event]);
              if (event.stage === "complete") onComplete?.();
            } catch {
              /* skip malformed */
            }
          }
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message ?? "Analysis failed");
        }
      } finally {
        setRunning(false);
      }
    },
    [auditId, dimension, running, onComplete],
  );

  const stop = useCallback(() => abortRef.current?.abort(), []);

  return { running, events, error, run, stop };
}
