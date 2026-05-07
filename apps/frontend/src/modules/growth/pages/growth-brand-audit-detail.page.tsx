import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Play, RefreshCw } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { useFullAudit } from "../api/use-full-audit";
import { useRunAudit } from "../api/use-run-audit";
import { growthKeys } from "../api/keys";
import { AuditStatusBadge } from "../components/audit-status-badge";
import { AuditDimensionCard } from "../components/audit-dimension-card";
import {
  getScoreTier,
  getScoreTierLabel,
  getScoreTierClass,
  type FullAuditDimension,
} from "../brand-audit.types";

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

export default function GrowthBrandAuditDetailPage() {
  const { auditId = "" } = useParams<{ auditId: string }>();
  const queryClient = useQueryClient();

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
  const tier =
    audit.overallScore !== null ? getScoreTier(audit.overallScore) : null;

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
              <button
                onClick={() => void run()}
                disabled={inProgress}
                className="btn-primary flex items-center gap-1.5"
              >
                {inProgress ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Running…
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Audit
                  </>
                )}
              </button>
            )}
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Header cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Score */}
          <div className="card card-pad flex flex-col gap-1">
            <span className="text-xs text-slate-500">Overall Score</span>
            {audit.overallScore !== null ? (
              <>
                <span className="text-4xl font-bold text-slate-900 font-heading tabular-nums">
                  {audit.overallScore}
                </span>
                {tier && (
                  <span
                    className={`text-xs font-semibold ${getScoreTierClass(tier)}`}
                  >
                    {getScoreTierLabel(tier)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-2xl font-bold text-slate-300">—</span>
            )}
          </div>

          {/* Status */}
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

          {/* Data sources */}
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

        {/* Radar chart — shown when ≥3 dimensions have scores */}
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

        {/* Developer info */}
        {audit.developer && (
          <div className="card card-pad">
            <p className="text-xs font-semibold text-slate-600 mb-3">
              Developer
            </p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {(
                [
                  ["Domain", audit.developer.domain],
                  ["Website", audit.developer.websiteUrl],
                  ["Instagram", audit.developer.instagramHandle],
                  ["Facebook", audit.developer.facebookUrl],
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
