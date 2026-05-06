import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Chip } from "@/core/ui";
import type { FullAuditDimension, ItemStatus } from "../brand-audit.types";

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

const DIMENSION_LABELS: Record<string, string> = {
  D1: "Brand Overview",
  D2: "Website & SEO",
  D3: "Social Media",
  D4: "Paid Media",
  D5: "Visual Identity",
  D6: "Collateral",
  D7: "Reputation",
  D8: "Technology",
  D9: "Competitors",
  D10: "Promoter",
};

function itemTone(status: ItemStatus | null): ChipTone {
  switch (status) {
    case "PASS":
      return "emerald";
    case "FAIL":
      return "red";
    case "PARTIAL":
      return "amber";
    default:
      return "slate";
  }
}

function scoreColor(score: number): string {
  if (score >= 75) return "text-emerald-600";
  if (score >= 50) return "text-amber-600";
  return "text-red-600";
}

interface Props {
  dimension: FullAuditDimension;
}

export function AuditDimensionCard({ dimension }: Props) {
  const [open, setOpen] = useState(false);
  const label = DIMENSION_LABELS[dimension.code] ?? dimension.code;
  const findings = dimension.aiFindings;

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
      >
        {open ? (
          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        )}
        <span className="text-xs font-bold text-slate-400 w-8 shrink-0">
          {dimension.code}
        </span>
        <span className="flex-1 text-sm font-medium text-slate-800">
          {label}
        </span>
        {dimension.score !== null ? (
          <span
            className={`text-sm font-bold tabular-nums ${scoreColor(dimension.score)}`}
          >
            {dimension.score}
          </span>
        ) : (
          <span className="text-xs text-slate-400">pending</span>
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-slate-100 pt-3 space-y-4">
          {dimension.aiSummary && (
            <p className="text-xs text-slate-600 leading-relaxed">
              {dimension.aiSummary}
            </p>
          )}

          {findings?.strengths && findings.strengths.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-emerald-700 mb-1.5">
                Strengths
              </p>
              <ul className="space-y-1">
                {findings.strengths.map((s, i) => (
                  <li key={i} className="text-xs text-slate-600 flex gap-2">
                    <span className="text-emerald-500 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {findings?.criticalFlags && findings.criticalFlags.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-red-600 mb-1.5">
                Critical Flags
              </p>
              <ul className="space-y-1">
                {findings.criticalFlags.map((f, i) => (
                  <li key={i} className="text-xs text-slate-600 flex gap-2">
                    <span className="text-red-500 shrink-0">!</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {findings?.quickWins && findings.quickWins.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-blue-700 mb-1.5">
                Quick Wins
              </p>
              <ul className="space-y-1">
                {findings.quickWins.map((w, i) => (
                  <li key={i} className="text-xs text-slate-600 flex gap-2">
                    <span className="text-blue-500 shrink-0">→</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {dimension.items.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">
                Checklist
              </p>
              <div className="space-y-2">
                {dimension.items.map((item) => (
                  <div key={item.itemCode} className="flex items-start gap-2.5">
                    <Chip tone={itemTone(item.status)}>
                      {item.status ?? "NA"}
                    </Chip>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-700">
                        {item.itemCode}
                      </p>
                      {item.aiNote && (
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.aiNote}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
