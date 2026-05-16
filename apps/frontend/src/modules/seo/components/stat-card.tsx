interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  deltaPositive?: boolean;
}

export function StatCard({
  label,
  value,
  delta,
  deltaPositive,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-2 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="text-3xl font-bold text-slate-900 leading-none">{value}</p>
      {delta && (
        <p
          className={`text-xs font-medium ${
            deltaPositive ? "text-emerald-600" : "text-rose-500"
          }`}
        >
          {delta}
        </p>
      )}
    </div>
  );
}
