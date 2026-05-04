import { AlertCircle } from "lucide-react";
import { ApiError } from "@/core/api/client";

interface ErrorStateProps {
  error: unknown;
  onRetry?: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  const message =
    error instanceof ApiError
      ? error.message
      : error instanceof Error
      ? error.message
      : "Something went wrong.";

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
      <AlertCircle className="w-10 h-10 text-red-400" />
      <div>
        <div className="text-sm font-semibold text-slate-900">Failed to load</div>
        <div className="text-xs text-slate-500 mt-1">{message}</div>
      </div>
      {onRetry && (
        <button onClick={onRetry} className="btn-primary text-xs">
          Retry
        </button>
      )}
    </div>
  );
}
