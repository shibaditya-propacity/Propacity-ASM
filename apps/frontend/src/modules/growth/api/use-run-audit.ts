import { useState, useCallback, useRef } from "react";
import { getToken } from "@/core/auth/token";
import { useAuditStatusStore } from "@/core/store/audit-status.store";
import type { ProgressEvent } from "../brand-audit.types";

const BASE_URL =
  (import.meta.env["VITE_API_BASE_URL"] as string | undefined) ??
  "http://localhost:3000/api/v1";

export function useRunAudit(auditId: string, onComplete?: () => void) {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<ProgressEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const setGlobalRunning = useAuditStatusStore((s) => s.setRunning);

  const run = useCallback(async () => {
    if (running) return;
    setRunning(true);
    setGlobalRunning(auditId);
    setEvents([]);
    setError(null);

    abortRef.current = new AbortController();

    try {
      const res = await fetch(`${BASE_URL}/brand-audit/audits/${auditId}/run`, {
        headers: { Authorization: `Bearer ${getToken() ?? ""}` },
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error(`Server responded with ${res.status}`);
      }

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
            // skip malformed SSE lines
          }
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError((err as Error).message);
      }
    } finally {
      setRunning(false);
      setGlobalRunning(null);
    }
  }, [auditId, running, onComplete, setGlobalRunning]);

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  return { running, events, error, run, stop };
}
