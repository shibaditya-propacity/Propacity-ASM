import type { ProviderWithStatus } from "../types";

interface StatsBarProps {
  providers: ProviderWithStatus[];
}

export function StatsBar({ providers }: StatsBarProps) {
  const total = providers.length;
  const connected = providers.filter(
    (p) => p.integration?.status === "CONNECTED",
  ).length;
  const pct = total > 0 ? Math.round((connected / total) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Overall connectivity
          </span>
          <span className="text-sm font-bold text-slate-900">
            {connected} / {total}
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-2xl font-bold text-slate-900">{pct}%</p>
        <p className="text-[11px] text-slate-400">connected</p>
      </div>
    </div>
  );
}
