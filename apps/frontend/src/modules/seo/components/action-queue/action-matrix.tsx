import type {
  SeoAction,
  ImpactLevel,
  EffortLevel,
  ActionStatus,
} from "../../types";
import { StatusPill, NEXT_STATUS } from "./action-badges";

const IMPACT_ROWS: ImpactLevel[] = ["HIGH", "MEDIUM", "LOW"];
const EFFORT_COLS: EffortLevel[] = ["QUICK", "MEDIUM", "HEAVY"];

const IMPACT_LABEL: Record<ImpactLevel, string> = {
  HIGH: "High Impact",
  MEDIUM: "Med Impact",
  LOW: "Low Impact",
};
const EFFORT_LABEL: Record<EffortLevel, string> = {
  QUICK: "Quick",
  MEDIUM: "Medium Effort",
  HEAVY: "Heavy",
};

const CELL_PRIORITY: Record<string, string> = {
  "HIGH-QUICK": "bg-emerald-50 border-emerald-200", // do first
  "HIGH-MEDIUM": "bg-blue-50 border-blue-200",
  "HIGH-HEAVY": "bg-amber-50 border-amber-200",
  "MEDIUM-QUICK": "bg-blue-50 border-blue-100",
  "MEDIUM-MEDIUM": "bg-slate-50 border-slate-200",
  "MEDIUM-HEAVY": "bg-slate-50 border-slate-100",
  "LOW-QUICK": "bg-slate-50 border-slate-100",
  "LOW-MEDIUM": "bg-slate-50 border-slate-100",
  "LOW-HEAVY": "bg-rose-50/40 border-rose-100", // deprioritize
};

interface ActionMatrixProps {
  actions: SeoAction[];
  search: string;
  onStatusCycle: (actionId: string, next: ActionStatus) => void;
}

export function ActionMatrix({
  actions,
  search,
  onStatusCycle,
}: ActionMatrixProps) {
  const filtered = search
    ? actions.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase()),
      )
    : actions;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Column headers (effort) */}
        <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-2 mb-2 pl-[120px]">
          {EFFORT_COLS.map((effort) => (
            <div
              key={effort}
              className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wide py-1"
            >
              {EFFORT_LABEL[effort]}
            </div>
          ))}
        </div>

        {/* Rows (impact) */}
        {IMPACT_ROWS.map((impact) => (
          <div
            key={impact}
            className="grid grid-cols-[120px_1fr_1fr_1fr] gap-2 mb-2"
          >
            {/* Row header */}
            <div className="flex items-center justify-end pr-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-right">
                {IMPACT_LABEL[impact]}
              </span>
            </div>

            {/* Cells */}
            {EFFORT_COLS.map((effort) => {
              const cellActions = filtered.filter(
                (a) => a.impactLevel === impact && a.effortLevel === effort,
              );
              const cellClass =
                CELL_PRIORITY[`${impact}-${effort}`] ??
                "bg-slate-50 border-slate-200";

              return (
                <div
                  key={effort}
                  className={`rounded-xl border-2 p-3 min-h-[120px] ${cellClass}`}
                >
                  {cellActions.length === 0 ? (
                    <p className="text-xs text-slate-300 text-center mt-6">—</p>
                  ) : (
                    <div className="space-y-2">
                      {cellActions.map((action) => (
                        <div
                          key={action.id}
                          className="bg-white rounded-lg border border-slate-200 p-2.5 shadow-sm"
                        >
                          <p className="text-xs font-medium text-slate-800 leading-snug mb-1.5 line-clamp-2">
                            {action.title}
                          </p>
                          <StatusPill
                            status={action.status}
                            interactive
                            onClick={() =>
                              onStatusCycle(
                                action.id,
                                NEXT_STATUS[action.status],
                              )
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Legend */}
        <div className="flex gap-4 mt-4 pl-[132px] text-[10px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-emerald-100 border border-emerald-200 inline-block" />
            Do first
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-blue-100 border border-blue-200 inline-block" />
            Plan
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-200 inline-block" />
            Consider
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-rose-100 border border-rose-100 inline-block" />
            Deprioritize
          </span>
        </div>
      </div>
    </div>
  );
}
