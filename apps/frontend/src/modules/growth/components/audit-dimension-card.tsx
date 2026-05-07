import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Code2,
  Copy,
  Check,
  AlertTriangle,
  AlertCircle,
  Info,
  Minus,
} from "lucide-react";
import { Chip } from "@/core/ui";
import type { FullAuditDimension, ItemStatus } from "../brand-audit.types";

// ── Types ──────────────────────────────────────────────────────────────────────

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";
type Priority = "critical" | "high" | "medium" | "low";

interface MergedItem {
  itemCode: string;
  status: ItemStatus | null;
  aiNote: string | null;
  dataSource: string | null;
  sourceUrl: string | null;
  priority: Priority;
  recommendation: string | null;
}

// ── Constants ──────────────────────────────────────────────────────────────────

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

const PRIORITY_CONFIG: Record<
  Priority,
  { label: string; icon: React.ReactNode; badgeCls: string; ringCls: string }
> = {
  critical: {
    label: "Critical",
    icon: <AlertCircle className="w-3 h-3" />,
    badgeCls: "bg-red-100 text-red-700 border border-red-200",
    ringCls: "border-l-red-500",
  },
  high: {
    label: "High",
    icon: <AlertTriangle className="w-3 h-3" />,
    badgeCls: "bg-amber-100 text-amber-700 border border-amber-200",
    ringCls: "border-l-amber-400",
  },
  medium: {
    label: "Medium",
    icon: <Info className="w-3 h-3" />,
    badgeCls: "bg-blue-100 text-blue-700 border border-blue-200",
    ringCls: "border-l-blue-400",
  },
  low: {
    label: "Low",
    icon: <Minus className="w-3 h-3" />,
    badgeCls: "bg-slate-100 text-slate-600 border border-slate-200",
    ringCls: "border-l-slate-300",
  },
};

// ── Helpers ────────────────────────────────────────────────────────────────────

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

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

// ── CopyButton ─────────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }
  return (
    <button
      onClick={copy}
      className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
      title="Copy"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

// ── EvidencePanel ──────────────────────────────────────────────────────────────

function EvidencePanel({ item }: { item: MergedItem }) {
  if (!item.sourceUrl && !item.dataSource) return null;

  const viewSourceUrl = item.sourceUrl ? `view-source:${item.sourceUrl}` : null;

  return (
    <div className="mt-2 rounded-lg bg-[#0F172A] border border-slate-700/60 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/60">
        <Code2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-[10px] font-mono text-slate-400 flex-1 truncate">
          {item.dataSource ?? "evidence"}
        </span>
        {item.sourceUrl && (
          <div className="flex items-center gap-1">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300 transition-colors px-2 py-0.5 rounded bg-blue-900/30 border border-blue-700/40"
            >
              <ExternalLink className="w-2.5 h-2.5" />
              View Page
            </a>
            {viewSourceUrl && (
              <a
                href={viewSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-300 transition-colors px-2 py-0.5 rounded bg-slate-700/40 border border-slate-600/40"
              >
                <Code2 className="w-2.5 h-2.5" />
                Source
              </a>
            )}
          </div>
        )}
      </div>

      {/* Source URL display */}
      {item.sourceUrl && (
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/40">
          <span className="text-[10px] font-mono text-slate-500 truncate flex-1">
            {item.sourceUrl}
          </span>
          <CopyButton text={item.sourceUrl} />
        </div>
      )}

      {/* Finding text as "code" block */}
      {item.aiNote && (
        <div className="px-3 py-2.5">
          <pre className="text-[11px] font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
            {item.aiNote}
          </pre>
        </div>
      )}
    </div>
  );
}

// ── FindingItem ────────────────────────────────────────────────────────────────

function FindingItem({
  item,
  defaultOpen,
}: {
  item: MergedItem;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const cfg = PRIORITY_CONFIG[item.priority];

  return (
    <div
      className={`rounded-lg border border-slate-100 border-l-4 ${cfg.ringCls} overflow-hidden`}
    >
      {/* Row header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start gap-3 px-3 py-2.5 text-left hover:bg-slate-50/60 transition-colors"
      >
        {/* Priority badge */}
        <span
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold shrink-0 mt-0.5 ${cfg.badgeCls}`}
        >
          {cfg.icon}
          {cfg.label}
        </span>

        {/* Status chip */}
        <div className="shrink-0 mt-0.5">
          <Chip tone={itemTone(item.status)}>{item.status ?? "NA"}</Chip>
        </div>

        {/* Code + finding preview */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-mono text-slate-400 mr-2">
            {item.itemCode}
          </span>
          <span className="text-xs text-slate-700 line-clamp-2">
            {item.aiNote ?? "—"}
          </span>
        </div>

        {/* Expand icon */}
        <span className="text-slate-400 shrink-0 mt-0.5">
          {open ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      {/* Expanded panel */}
      {open && (
        <div className="px-3 pb-3 space-y-2 border-t border-slate-100">
          {item.recommendation && (
            <div className="mt-2">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Recommendation
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.recommendation}
              </p>
            </div>
          )}
          <EvidencePanel item={item} />
        </div>
      )}
    </div>
  );
}

// ── AuditDimensionCard ─────────────────────────────────────────────────────────

interface Props {
  dimension: FullAuditDimension;
}

export function AuditDimensionCard({ dimension }: Props) {
  const [open, setOpen] = useState(false);
  const label = DIMENSION_LABELS[dimension.code] ?? dimension.code;
  const findings = dimension.aiFindings;

  // Merge stored items with AI findings for priority + recommendation
  const mergedItems: MergedItem[] = dimension.items.map((stored) => {
    const aiItem = findings?.items?.find((ai) => ai.code === stored.itemCode);
    const rawPriority = (aiItem?.priority ?? "low") as string;
    const priority: Priority = ["critical", "high", "medium", "low"].includes(
      rawPriority,
    )
      ? (rawPriority as Priority)
      : "low";
    return {
      itemCode: stored.itemCode,
      status: stored.status,
      aiNote: stored.aiNote,
      dataSource: stored.dataSource,
      sourceUrl: stored.sourceUrl,
      priority,
      recommendation: aiItem?.recommendation ?? null,
    };
  });

  // Sort: critical → high → medium → low
  const PRIORITY_ORDER: Record<Priority, number> = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3,
  };
  const sortedItems = [...mergedItems].sort(
    (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
  );

  const criticalCount = sortedItems.filter(
    (i) => i.priority === "critical",
  ).length;
  const failCount = sortedItems.filter((i) => i.status === "FAIL").length;

  return (
    <div className="card overflow-hidden">
      {/* Dimension header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50 transition-colors"
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

        {/* Issue counts */}
        {criticalCount > 0 && (
          <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200 shrink-0">
            <AlertCircle className="w-3 h-3" />
            {criticalCount} critical
          </span>
        )}
        {failCount > 0 && criticalCount === 0 && (
          <span className="text-[10px] text-slate-400 shrink-0">
            {failCount} fail{failCount !== 1 ? "s" : ""}
          </span>
        )}

        {/* Score */}
        {dimension.score !== null ? (
          <span
            className={`text-sm font-bold tabular-nums shrink-0 ${scoreColor(dimension.score)}`}
          >
            {dimension.score}
          </span>
        ) : (
          <span className="text-xs text-slate-400 shrink-0">pending</span>
        )}
      </button>

      {/* Expanded body */}
      {open && (
        <div className="border-t border-slate-100">
          {/* Summary */}
          {dimension.aiSummary && (
            <div className="px-4 py-3 bg-slate-50/60 border-b border-slate-100">
              <p className="text-xs text-slate-600 leading-relaxed">
                {dimension.aiSummary}
              </p>
            </div>
          )}

          {/* Strengths / Critical flags / Quick wins */}
          {findings?.strengths?.length ||
          findings?.criticalFlags?.length ||
          findings?.quickWins?.length ? (
            <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100">
              {findings?.strengths && findings.strengths.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
                    Strengths
                  </p>
                  <ul className="space-y-1">
                    {findings.strengths.map((s, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-slate-600 flex gap-1.5"
                      >
                        <span className="text-emerald-500 shrink-0 mt-0.5">
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {findings?.criticalFlags && findings.criticalFlags.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1.5">
                    Critical Flags
                  </p>
                  <ul className="space-y-1">
                    {findings.criticalFlags.map((f, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-slate-600 flex gap-1.5"
                      >
                        <span className="text-red-500 shrink-0 mt-0.5">!</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {findings?.quickWins && findings.quickWins.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">
                    Quick Wins
                  </p>
                  <ul className="space-y-1">
                    {findings.quickWins.map((w, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-slate-600 flex gap-1.5"
                      >
                        <span className="text-blue-500 shrink-0 mt-0.5">→</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : null}

          {/* Finding items */}
          {sortedItems.length > 0 && (
            <div className="px-4 py-3 space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Checklist ({sortedItems.length} items)
              </p>
              {sortedItems.map((item) => (
                <FindingItem
                  key={item.itemCode}
                  item={item}
                  defaultOpen={
                    item.priority === "critical" || item.priority === "high"
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
