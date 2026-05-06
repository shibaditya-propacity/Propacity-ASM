import type { ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KpiProps {
  label: string;
  value: string | number;
  delta?: string;
  hint?: string;
  icon?: ReactNode;
  gradient?: string; // Tailwind gradient classes e.g. "from-brand-500 to-blue-600"
}

export function Kpi({ label, value, delta, hint, icon, gradient }: KpiProps) {
  const positive = delta?.startsWith("+");
  const negative = delta?.startsWith("-");

  return (
    <div className="card card-pad relative overflow-hidden group hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      {/* Accent stripe */}
      {gradient && (
        <div
          className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient}`}
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="kpi-label">{label}</div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <div className="kpi-value">{value}</div>
            {delta && (
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                  positive
                    ? "text-emerald-600"
                    : negative
                      ? "text-red-500"
                      : "text-slate-400"
                }`}
              >
                {positive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : negative ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <Minus className="w-3 h-3" />
                )}
                {delta}
              </span>
            )}
          </div>
          {hint && (
            <div className="text-xs text-slate-500 mt-1 leading-relaxed">
              {hint}
            </div>
          )}
        </div>
        {icon && (
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${gradient ? `bg-gradient-to-br ${gradient}` : "bg-slate-100"}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
