import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface AuthToastProps {
  message: string;
  onClose: () => void;
  /** Auto-dismiss delay in ms. Default 3500. */
  duration?: number;
}

export function AuthToast({ message, onClose, duration = 3500 }: AuthToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-5 right-5 z-50 flex items-start gap-3 bg-white border border-emerald-200 rounded-xl shadow-lg px-4 py-3.5 max-w-sm animate-toast-in"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
      <p className="text-sm text-slate-700 flex-1">{message}</p>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="text-slate-400 hover:text-slate-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
