import type {
  ImpactLevel,
  EffortLevel,
  ActionStatus,
  ActionCategory,
} from "../../types";

// ── Status ─────────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<ActionStatus, string> = {
  PENDING: "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200",
  IN_PROGRESS: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
  COMPLETED:
    "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
};

const STATUS_LABEL: Record<ActionStatus, string> = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const NEXT_STATUS: Record<ActionStatus, ActionStatus> = {
  PENDING: "IN_PROGRESS",
  IN_PROGRESS: "COMPLETED",
  COMPLETED: "PENDING",
};

interface StatusPillProps {
  status: ActionStatus;
  onClick?: () => void;
  interactive?: boolean;
}

export function StatusPill({
  status,
  onClick,
  interactive = false,
}: StatusPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!interactive}
      title={
        interactive
          ? `Click to move to ${STATUS_LABEL[NEXT_STATUS[status]]}`
          : undefined
      }
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors whitespace-nowrap ${STATUS_STYLES[status]} ${interactive ? "cursor-pointer" : "cursor-default"}`}
    >
      {STATUS_LABEL[status]}
    </button>
  );
}

// ── Impact ─────────────────────────────────────────────────────────────────────

const IMPACT_STYLES: Record<ImpactLevel, string> = {
  HIGH: "bg-rose-50 text-rose-600 border-rose-200",
  MEDIUM: "bg-amber-50 text-amber-600 border-amber-200",
  LOW: "bg-emerald-50 text-emerald-600 border-emerald-200",
};

const IMPACT_LABEL: Record<ImpactLevel, string> = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

export function ImpactBadge({ level }: { level: ImpactLevel }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${IMPACT_STYLES[level]}`}
    >
      {IMPACT_LABEL[level]}
    </span>
  );
}

// ── Effort ─────────────────────────────────────────────────────────────────────

const EFFORT_STYLES: Record<EffortLevel, string> = {
  QUICK: "bg-emerald-50 text-emerald-600 border-emerald-200",
  MEDIUM: "bg-slate-100 text-slate-500 border-slate-200",
  HEAVY: "bg-rose-50 text-rose-500 border-rose-200",
};

const EFFORT_LABEL: Record<EffortLevel, string> = {
  QUICK: "Quick",
  MEDIUM: "Medium",
  HEAVY: "Heavy",
};

export function EffortBadge({ level }: { level: EffortLevel }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${EFFORT_STYLES[level]}`}
    >
      {EFFORT_LABEL[level]}
    </span>
  );
}

// ── Category ───────────────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<ActionCategory, string> = {
  CONTENT: "bg-violet-50 text-violet-600 border-violet-200",
  TECHNICAL: "bg-sky-50 text-sky-600 border-sky-200",
  SCHEMA: "bg-orange-50 text-orange-600 border-orange-200",
  BACKLINKS: "bg-pink-50 text-pink-600 border-pink-200",
};

const CATEGORY_LABEL: Record<ActionCategory, string> = {
  CONTENT: "Content",
  TECHNICAL: "Technical",
  SCHEMA: "Schema",
  BACKLINKS: "Backlinks",
};

export function CategoryBadge({ category }: { category: ActionCategory }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_STYLES[category]}`}
    >
      {CATEGORY_LABEL[category]}
    </span>
  );
}

// ── Next status helper ─────────────────────────────────────────────────────────
export { NEXT_STATUS };
