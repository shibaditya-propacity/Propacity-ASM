import { useNavigate } from "react-router-dom";
import type { SeoAction, ImpactLevel, EffortLevel } from "../types";

// ── Impact / effort badges ─────────────────────────────────────────────────────

const IMPACT_STYLES: Record<ImpactLevel, string> = {
  HIGH: "bg-rose-50 text-rose-600 border-rose-200",
  MEDIUM: "bg-amber-50 text-amber-600 border-amber-200",
  LOW: "bg-emerald-50 text-emerald-600 border-emerald-200",
};

const IMPACT_LABEL: Record<ImpactLevel, string> = {
  HIGH: "High impact",
  MEDIUM: "Medium impact",
  LOW: "Low impact",
};

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

function ImpactBadge({ level }: { level: ImpactLevel }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${IMPACT_STYLES[level]}`}
    >
      {IMPACT_LABEL[level]}
    </span>
  );
}

function EffortBadge({ level }: { level: EffortLevel }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${EFFORT_STYLES[level]}`}
    >
      {EFFORT_LABEL[level]}
    </span>
  );
}

// ── Action item ────────────────────────────────────────────────────────────────

function ActionItem({ action }: { action: SeoAction }) {
  return (
    <div className="flex gap-3 py-3">
      <div className="w-1 rounded-full bg-brand-500 shrink-0" />
      <div className="flex-1 min-w-0 space-y-1.5">
        <p className="text-sm font-medium text-slate-800 leading-snug">
          {action.title}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <ImpactBadge level={action.impactLevel} />
          <EffortBadge level={action.effortLevel} />
        </div>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

interface WhatComesNextProps {
  actions: SeoAction[];
}

export function WhatComesNext({ actions }: WhatComesNextProps) {
  const navigate = useNavigate();
  const top3 = actions.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-2">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          What Comes Next
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Next 3 recommended actions
        </p>
      </div>

      {top3.length === 0 ? (
        <div className="py-6 text-center text-sm text-slate-400">
          Run a sync to generate recommendations
        </div>
      ) : (
        <>
          <div className="divide-y divide-slate-100">
            {top3.map((action) => (
              <ActionItem key={action.id} action={action} />
            ))}
          </div>
          {actions.length > 3 && (
            <button
              onClick={() => navigate("actions")}
              className="text-xs text-brand-500 font-semibold mt-1 hover:underline text-left"
            >
              View full queue ({actions.length} total) →
            </button>
          )}
        </>
      )}
    </div>
  );
}
