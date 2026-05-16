import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import type { ToastEvent } from "./toast";

const ICONS = {
  success: (
    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
  ),
  error: <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />,
  info: <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />,
};

const BORDER = {
  success: "border-emerald-200",
  error: "border-red-200",
  info: "border-blue-200",
};

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastEvent[]>([]);

  useEffect(() => {
    function onToast(e: Event) {
      const toast = (e as CustomEvent<ToastEvent>).detail;
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration ?? 4000);
    }
    window.addEventListener("app:toast", onToast);
    return () => window.removeEventListener("app:toast", onToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-[200] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-start gap-3 bg-white border ${BORDER[t.type]} rounded-xl shadow-lg px-4 py-3.5 max-w-sm animate-toast-in`}
        >
          {ICONS[t.type]}
          <p className="text-sm text-slate-700 flex-1 leading-snug">
            {t.message}
          </p>
          <button
            onClick={() =>
              setToasts((prev) => prev.filter((x) => x.id !== t.id))
            }
            className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
