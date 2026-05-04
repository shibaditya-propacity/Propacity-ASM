interface KpiProps {
  label: string;
  value: string | number;
  delta?: string;
  hint?: string;
}

export function Kpi({ label, value, delta, hint }: KpiProps) {
  const positive = delta?.startsWith("+");
  const negative = delta?.startsWith("-");
  return (
    <div className="card card-pad">
      <div className="kpi-label">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="kpi-value">{value}</div>
        {delta && (
          <span className={`text-xs font-semibold ${positive ? "text-emerald-600" : negative ? "text-red-600" : "text-slate-500"}`}>
            {delta}
          </span>
        )}
      </div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
    </div>
  );
}
