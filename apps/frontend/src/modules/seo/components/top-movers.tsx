import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { TopMover } from "../types";

interface TopMoverRowProps {
  mover: TopMover;
}

function TopMoverRow({ mover }: TopMoverRowProps) {
  const change = mover.rankChange ?? 0;

  const badge =
    change > 0 ? (
      <span className="flex items-center gap-0.5 text-emerald-600 text-xs font-semibold">
        <TrendingUp className="w-3.5 h-3.5" />+{change}
      </span>
    ) : change < 0 ? (
      <span className="flex items-center gap-0.5 text-rose-500 text-xs font-semibold">
        <TrendingDown className="w-3.5 h-3.5" />
        {change}
      </span>
    ) : (
      <span className="flex items-center gap-0.5 text-slate-400 text-xs font-semibold">
        <Minus className="w-3.5 h-3.5" />0
      </span>
    );

  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">
          {mover.keyword}
        </p>
        <p className="text-xs text-slate-400">
          #{mover.currentRank ?? "—"}
          {mover.searchVolume
            ? ` · vol ${mover.searchVolume.toLocaleString()}`
            : ""}
        </p>
      </div>
      {badge}
    </div>
  );
}

interface TopMoversProps {
  movers: TopMover[];
}

export function TopMovers({ movers }: TopMoversProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-2">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Top Movers</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Biggest rank gains this period
        </p>
      </div>

      {movers.length === 0 ? (
        <div className="py-6 text-center text-sm text-slate-400">
          No rank changes yet
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {movers.slice(0, 8).map((m) => (
            <TopMoverRow key={m.keyword} mover={m} />
          ))}
        </div>
      )}
    </div>
  );
}
