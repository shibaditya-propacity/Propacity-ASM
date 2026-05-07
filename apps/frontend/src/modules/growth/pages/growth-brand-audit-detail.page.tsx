import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Play,
  RefreshCw,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Zap,
  Target,
  AlertCircle,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { useAuditStatusStore } from "@/core/store/audit-status.store";
import { useFullAudit } from "../api/use-full-audit";
import { useRunAudit } from "../api/use-run-audit";
import { growthKeys } from "../api/keys";
import { AuditStatusBadge } from "../components/audit-status-badge";
import { AuditDimensionCard } from "../components/audit-dimension-card";
import {
  getScoreTier,
  getScoreTierLabel,
  getScoreTierClass,
  type FullAudit,
  type FullAuditDimension,
} from "../brand-audit.types";

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

// ── Helpers ────────────────────────────────────────────────────────────────────

function scoreColorClass(score: number): string {
  if (score >= 70) return "text-emerald-600";
  if (score >= 40) return "text-amber-600";
  return "text-red-600";
}

function scoreHex(score: number): string {
  if (score >= 70) return "#10b981";
  if (score >= 40) return "#f59e0b";
  return "#ef4444";
}

// ── ScoreDonut ─────────────────────────────────────────────────────────────────

function ScoreDonut({ score }: { score: number }) {
  const color = scoreHex(score);
  return (
    <div className="relative inline-flex items-center justify-center">
      <PieChart width={108} height={108}>
        <Pie
          data={[{ value: score }, { value: 100 - score }]}
          cx={54}
          cy={54}
          innerRadius={38}
          outerRadius={50}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          strokeWidth={0}
        >
          <Cell fill={color} />
          <Cell fill="#e2e8f0" />
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`text-2xl font-bold font-heading tabular-nums ${scoreColorClass(score)}`}
        >
          {score}
        </span>
      </div>
    </div>
  );
}

// ── BrandOverviewHero ──────────────────────────────────────────────────────────

function BrandOverviewHero({ audit }: { audit: FullAudit }) {
  const dev = audit.developer;
  const [logoError, setLogoError] = useState(false);
  const tier =
    audit.overallScore !== null ? getScoreTier(audit.overallScore) : null;

  const logoSrc =
    dev?.domain && !logoError
      ? `https://logo.clearbit.com/${dev.domain}`
      : null;

  return (
    <div className="card card-pad">
      <div className="flex items-center gap-5">
        {/* Brand logo */}
        <div className="shrink-0">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={dev?.brandName}
              className="w-16 h-16 rounded-xl object-contain bg-slate-50 border border-slate-100 p-1"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-brand-500/10 border border-brand-200 flex items-center justify-center text-2xl font-bold text-brand-600 font-heading">
              {dev?.brandName?.[0]?.toUpperCase() ?? "?"}
            </div>
          )}
        </div>

        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-slate-900 font-heading truncate">
            {dev?.brandName ?? "Unknown Brand"}
          </h1>
          {dev?.promoterName && (
            <p className="text-sm text-slate-500 mt-0.5">
              Promoter:{" "}
              <span className="font-medium text-slate-700">
                {dev.promoterName}
              </span>
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-1.5">
            {dev?.websiteUrl || dev?.domain ? (
              <a
                href={dev.websiteUrl ?? `https://${dev.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-600 hover:text-brand-800 inline-flex items-center gap-1 transition-colors"
              >
                {dev.domain ?? dev.websiteUrl}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : null}
            {dev?.city && (
              <span className="text-xs text-slate-400">{dev.city}</span>
            )}
          </div>
        </div>

        {/* Score donut */}
        <div className="shrink-0 flex flex-col items-center gap-1">
          {audit.overallScore !== null ? (
            <>
              <ScoreDonut score={audit.overallScore} />
              {tier && (
                <span
                  className={`text-xs font-semibold ${getScoreTierClass(tier)}`}
                >
                  {getScoreTierLabel(tier)}
                </span>
              )}
            </>
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center">
              <span className="text-xs text-slate-400 text-center leading-tight px-2">
                Score pending
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── SummaryCards ───────────────────────────────────────────────────────────────

function SummaryCards({ audit }: { audit: FullAudit }) {
  const strengths = audit.dimensions
    .flatMap((d) => d.aiFindings?.strengths ?? [])
    .slice(0, 3);

  const criticalFallbacks = audit.dimensions
    .flatMap((d) => d.aiFindings?.criticalFlags ?? [])
    .slice(0, 3);

  const quickWins = audit.dimensions
    .flatMap((d) => d.aiFindings?.quickWins ?? [])
    .slice(0, 3);

  const competitors = (audit.developer?.competitors ?? []).slice(0, 3);
  const d9 = audit.dimensions.find((d) => d.code === "D9");

  if (
    !strengths.length &&
    !criticalFallbacks.length &&
    !quickWins.length &&
    !competitors.length
  ) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Major Strengths */}
      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Major Strengths
          </p>
        </div>
        {strengths.length > 0 ? (
          <ul className="space-y-1.5">
            {strengths.map((s, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-2">
                <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-400 italic">
            Run audit to see strengths
          </p>
        )}
      </div>

      {/* Critical Fallbacks */}
      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-red-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Critical Fallbacks
          </p>
        </div>
        {criticalFallbacks.length > 0 ? (
          <ul className="space-y-1.5">
            {criticalFallbacks.map((f, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-2">
                <span className="text-red-500 shrink-0 mt-0.5 font-bold">
                  !
                </span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No critical flags found
          </p>
        )}
      </div>

      {/* Quick Win Recommendations */}
      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Quick Wins
          </p>
        </div>
        {quickWins.length > 0 ? (
          <ul className="space-y-1.5">
            {quickWins.map((w, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-2">
                <span className="text-blue-500 shrink-0 mt-0.5">→</span>
                <span className="leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No quick wins identified
          </p>
        )}
      </div>

      {/* Top Competitors */}
      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
            <Target className="w-3.5 h-3.5 text-violet-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Top Competitors
          </p>
        </div>
        {competitors.length > 0 ? (
          <ul className="space-y-1.5">
            {competitors.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-violet-50 border border-violet-200 flex items-center justify-center text-[9px] font-bold text-violet-600 shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs text-slate-700 truncate">{c}</span>
              </li>
            ))}
          </ul>
        ) : d9?.aiSummary ? (
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-4">
            {d9.aiSummary}
          </p>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No competitors specified
          </p>
        )}
      </div>
    </div>
  );
}

// ── AuditRadarChart ────────────────────────────────────────────────────────────

function AuditRadarChart({ dimensions }: { dimensions: FullAuditDimension[] }) {
  const scored = dimensions.filter((d) => d.score !== null);
  if (scored.length < 3) return null;

  const data = scored.map((d) => ({
    subject: DIMENSION_LABELS[d.code] ?? d.code,
    score: d.score ?? 0,
    fullMark: 100,
  }));

  return (
    <div className="card card-pad">
      <p className="text-xs font-semibold text-slate-600 mb-4">
        Score Breakdown
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart
          data={data}
          margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
        >
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 10, fill: "#64748b" }}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Tooltip
            formatter={(value: number) => [`${value}`, "Score"]}
            contentStyle={{ fontSize: 12 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── CompetitorSection ──────────────────────────────────────────────────────────

function CompetitorSection({ audit }: { audit: FullAudit }) {
  const d9 = audit.dimensions.find((d) => d.code === "D9");
  const competitors = (audit.developer?.competitors ?? []).slice(0, 3);

  if (!d9?.aiFindings && competitors.length === 0) return null;

  const strengths = d9?.aiFindings?.strengths ?? [];
  const flags = d9?.aiFindings?.criticalFlags ?? [];
  const wins = d9?.aiFindings?.quickWins ?? [];
  const hasAnalysis =
    strengths.length > 0 || flags.length > 0 || wins.length > 0;

  if (!hasAnalysis && competitors.length === 0) return null;

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
        <Target className="w-4 h-4 text-violet-600 shrink-0" />
        <p className="text-sm font-semibold text-slate-800">
          Competitor Analysis
        </p>
        {d9?.score !== null && d9?.score !== undefined && (
          <span
            className={`ml-auto text-sm font-bold ${scoreColorClass(d9.score)}`}
          >
            D9 Score: {d9.score}
          </span>
        )}
      </div>

      {/* Summary */}
      {d9?.aiSummary && (
        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/30">
          <p className="text-xs text-slate-600 leading-relaxed">
            {d9.aiSummary}
          </p>
        </div>
      )}

      {/* Competitors identified */}
      {competitors.length > 0 && (
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Competitors Analyzed
          </p>
          <div className="flex flex-wrap gap-2">
            {competitors.map((c, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700"
              >
                <span className="w-4 h-4 rounded bg-violet-100 text-violet-600 text-[9px] font-bold flex items-center justify-center shrink-0">
                  {c[0]?.toUpperCase()}
                </span>
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tri-column: stronger / weaker / recommendations */}
      {hasAnalysis && (
        <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Where brand is stronger */}
          {strengths.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Where You&apos;re Stronger
              </p>
              <ul className="space-y-2">
                {strengths.map((s, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-2 p-2 bg-emerald-50 rounded-lg border border-emerald-100 leading-relaxed"
                  >
                    <span className="text-emerald-500 shrink-0 font-bold mt-0.5">
                      ✓
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Where competitors are stronger */}
          {flags.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                Where They&apos;re Stronger
              </p>
              <ul className="space-y-2">
                {flags.map((f, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-2 p-2 bg-red-50 rounded-lg border border-red-100 leading-relaxed"
                  >
                    <span className="text-red-500 shrink-0 font-bold mt-0.5">
                      !
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations to close the gap */}
          {wins.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Key Recommendations
              </p>
              <ul className="space-y-2">
                {wins.map((w, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-2 p-2 bg-blue-50 rounded-lg border border-blue-100 leading-relaxed"
                  >
                    <span className="text-blue-500 shrink-0 mt-0.5">→</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function GrowthBrandAuditDetailPage() {
  const { auditId = "" } = useParams<{ auditId: string }>();
  const queryClient = useQueryClient();
  const runningAuditId = useAuditStatusStore((s) => s.runningAuditId);

  const { data: audit, isLoading, isError, error } = useFullAudit(auditId);

  function onRunComplete() {
    void queryClient.invalidateQueries({
      queryKey: growthKeys.fullAudit(auditId),
    });
  }

  const {
    running,
    events,
    error: runError,
    run,
  } = useRunAudit(auditId, onRunComplete);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;
  if (!audit) return <ErrorState error={new Error("Audit not found")} />;

  const canRun = audit.status === "DRAFT" || audit.status === "FAILED";
  const inProgress =
    running || audit.status === "COLLECTING" || audit.status === "ANALYZING";
  const anotherAuditRunning =
    runningAuditId !== null && runningAuditId !== auditId;

  const sortedDimensions = [...audit.dimensions].sort((a, b) => {
    const n = (code: string) => parseInt(code.replace("D", ""), 10) || 99;
    return n(a.code) - n(b.code);
  });

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar
        title={audit.developer?.brandName ?? "Brand Audit"}
        subtitle={audit.developer?.city ?? undefined}
        actions={
          <div className="flex items-center gap-2">
            <Link
              to="/growth/brand-audits"
              className="btn flex items-center gap-1 text-slate-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            {(canRun || inProgress) && (
              <div className="relative group/run-btn">
                <button
                  onClick={() => void run()}
                  disabled={inProgress || anotherAuditRunning}
                  className="btn-primary flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {inProgress ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Running…
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Launch Audit
                    </>
                  )}
                </button>
                {anotherAuditRunning && !inProgress && (
                  <div
                    className="absolute right-0 top-full mt-2 z-50
                      px-3 py-2 bg-slate-800 border border-white/10 text-white text-xs rounded-lg
                      whitespace-nowrap pointer-events-none shadow-xl
                      opacity-0 group-hover/run-btn:opacity-100 transition-opacity duration-150"
                  >
                    An audit is already in progress
                    <span className="absolute bottom-full right-4 border-4 border-transparent border-b-slate-800" />
                  </div>
                )}
              </div>
            )}
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Brand overview hero */}
        <BrandOverviewHero audit={audit} />

        {/* Summary cards (shown once audit has data) */}
        <SummaryCards audit={audit} />

        {/* Status + Data Sources row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card card-pad flex flex-col gap-1">
            <span className="text-xs text-slate-500">Status</span>
            <div className="mt-1">
              <AuditStatusBadge status={audit.status} />
            </div>
            {audit.auditorName && (
              <span className="text-xs text-slate-500 mt-1">
                Auditor: {audit.auditorName}
              </span>
            )}
          </div>

          {audit.dataSourceStatus && (
            <div className="card card-pad flex flex-col gap-1">
              <span className="text-xs text-slate-500">Data Sources</span>
              <div className="flex items-center gap-3 mt-1">
                <div>
                  <span className="text-xl font-bold text-emerald-600 tabular-nums">
                    {audit.dataSourceStatus.collected.length}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">collected</span>
                </div>
                {audit.dataSourceStatus.failed.length > 0 && (
                  <div>
                    <span className="text-xl font-bold text-red-500 tabular-nums">
                      {audit.dataSourceStatus.failed.length}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">failed</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Radar chart */}
        {sortedDimensions.filter((d) => d.score !== null).length >= 3 && (
          <AuditRadarChart dimensions={sortedDimensions} />
        )}

        {/* Run progress stream */}
        {(running || events.length > 0) && (
          <div className="card card-pad space-y-3">
            <p className="text-xs font-semibold text-slate-600">
              {running ? "Running audit…" : "Last run"}
            </p>
            {runError && (
              <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                {runError}
              </p>
            )}
            <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
              {events.map((ev, i) => {
                const dot =
                  ev.status === "failed"
                    ? "bg-red-400"
                    : ev.status === "done" || ev.stage === "complete"
                      ? "bg-emerald-400"
                      : "bg-blue-400 animate-pulse";

                let text = "";
                if (ev.stage === "collecting" && ev.source)
                  text = `Collecting ${ev.source}${ev.status === "done" ? " ✓" : ev.status === "failed" ? " ✗" : "…"}`;
                else if (ev.stage === "analyzing" && ev.dimension)
                  text = `Analysing ${ev.dimension}${ev.score !== null && ev.score !== undefined ? ` — score ${ev.score}` : ""}${ev.status === "done" ? " ✓" : "…"}`;
                else if (ev.stage === "complete")
                  text = `Complete — overall score: ${ev.overallScore ?? "—"}`;
                else if (ev.stage === "error") text = `Error: ${ev.message}`;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`}
                    />
                    {text}
                  </div>
                );
              })}
              {running && (
                <div className="text-xs text-slate-400 animate-pulse pl-3.5">
                  Processing…
                </div>
              )}
            </div>
          </div>
        )}

        {/* Competitor section */}
        <CompetitorSection audit={audit} />

        {/* Developer info */}
        {audit.developer && (
          <div className="card card-pad">
            <p className="text-xs font-semibold text-slate-600 mb-3">
              Developer Details
            </p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {(
                [
                  ["Domain", audit.developer.domain],
                  ["Website", audit.developer.websiteUrl],
                  ["Instagram", audit.developer.instagramHandle],
                  ["Facebook", audit.developer.facebookUrl],
                  ["LinkedIn", audit.developer.linkedinUrl],
                  ["Promoter", audit.developer.promoterName],
                  [
                    "Micro Markets",
                    audit.developer.microMarkets.join(", ") || null,
                  ],
                ] as [string, string | null][]
              )
                .filter(([, v]) => v)
                .map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <dt className="text-xs text-slate-400">{label}</dt>
                    <dd className="text-xs font-medium text-slate-700 truncate">
                      {value}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        )}

        {/* Objective / known red flags */}
        {(audit.objective || audit.knownRedFlags) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audit.objective && (
              <div className="card card-pad">
                <p className="text-xs font-semibold text-slate-600 mb-1">
                  Objective
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {audit.objective}
                </p>
              </div>
            )}
            {audit.knownRedFlags && (
              <div className="card card-pad">
                <p className="text-xs font-semibold text-red-600 mb-1">
                  Known Red Flags
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {audit.knownRedFlags}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Dimensions */}
        {sortedDimensions.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Dimensions ({sortedDimensions.length})
            </p>
            {sortedDimensions.map((dim) => (
              <AuditDimensionCard key={dim.code} dimension={dim} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
