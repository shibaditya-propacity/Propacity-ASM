import { useState, useCallback } from "react";
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
  Youtube,
  Trophy,
  Info,
  CheckCircle2,
  Clock,
  XCircle,
  Sparkles,
  ChevronDown,
  ChevronRight,
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
import { useSaveManualOverride } from "../api/use-save-manual-override";
import { growthKeys } from "../api/keys";
import { AuditStatusBadge } from "../components/audit-status-badge";
import { DimensionAccordion } from "../components/dimension-accordion";
import { PostAuditForm } from "../components/post-audit-form";
import {
  getScoreTier,
  getScoreTierLabel,
  getScoreTierClass,
  type FullAudit,
  type FullAuditDimension,
  type AuditCollectedData,
  type YouTubeVideoData,
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

const DIMENSION_ORDER = [
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
];

const DIMENSION_WEIGHTS: Record<string, number> = {
  D1: 8,
  D2: 12,
  D3: 10,
  D4: 12,
  D5: 8,
  D6: 8,
  D7: 15,
  D8: 10,
  D9: 9,
  D10: 8,
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function scoreHex(score: number) {
  if (score >= 70) return "#10b981";
  if (score >= 40) return "#f59e0b";
  return "#ef4444";
}

function scoreColorClass(score: number) {
  if (score >= 70) return "text-emerald-600";
  if (score >= 40) return "text-amber-600";
  return "text-red-600";
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

function deriveScore(dimensions: FullAuditDimension[]) {
  let totalWeight = 0;
  let weightedSum = 0;
  let completedCount = 0;
  for (const dim of dimensions) {
    if (dim.score !== null) {
      const w = DIMENSION_WEIGHTS[dim.code] ?? 0;
      weightedSum += dim.score * w;
      totalWeight += w;
      completedCount++;
    }
  }
  return {
    score: totalWeight > 0 ? Math.round(weightedSum / totalWeight) : null,
    completedCount,
  };
}

function scrollToDimension(code: string) {
  document
    .getElementById(`dim-${code}`)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── InsightsBanner ─────────────────────────────────────────────────────────────

function InsightsBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="relative rounded-2xl overflow-hidden border border-brand-200/60 bg-gradient-to-r from-brand-50 via-indigo-50/50 to-violet-50/30 shadow-sm">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 via-transparent to-violet-400/5 pointer-events-none" />

      <div className="relative px-5 py-4 flex items-start gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <Info className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-900 mb-1">
            Want More Accurate Insights?
          </p>
          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
            For better AI analysis and deeper brand intelligence, fill the{" "}
            <span className="font-semibold text-brand-700">
              Manual Input form
            </span>{" "}
            inside each analysis section below. More context leads to more
            precise recommendations — expand any section and save your inputs
            before running.
          </p>
          <div className="flex items-center gap-4 mt-2.5 flex-wrap">
            {[
              "Richer context → smarter AI",
              "Save inputs, then rerun",
              "Each section is independent",
            ].map((tip) => (
              <span
                key={tip}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-700 bg-white/70 border border-brand-200/50 px-2 py-0.5 rounded-full"
              >
                <Sparkles className="w-2.5 h-2.5" />
                {tip}
              </span>
            ))}
          </div>
        </div>

        {/* Dismiss */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-slate-600 transition-colors shrink-0 text-lg leading-none mt-0.5"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ── ProgressSidebar ────────────────────────────────────────────────────────────

function ProgressSidebar({
  audit,
  openSection,
  onToggle,
}: {
  audit: FullAudit;
  openSection: string | null;
  onToggle: (code: string) => void;
}) {
  const { completedCount } = deriveScore(audit.dimensions);
  const total = DIMENSION_ORDER.length;
  const pct = Math.round((completedCount / total) * 100);

  const dimMap = Object.fromEntries(audit.dimensions.map((d) => [d.code, d]));

  return (
    <aside className="w-52 shrink-0 hidden lg:block">
      <div className="sticky top-6 space-y-3">
        {/* Progress ring */}
        <div className="card card-pad">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">
            Completion
          </p>
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 shrink-0">
              <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke={
                    pct >= 80 ? "#10b981" : pct >= 40 ? "#f59e0b" : "#3b82f6"
                  }
                  strokeWidth="3"
                  strokeDasharray={`${pct} ${100 - pct}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-800">
                {pct}%
              </span>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-none">
                {completedCount}
                <span className="text-sm text-slate-400 font-normal">
                  /{total}
                </span>
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                sections complete
              </p>
            </div>
          </div>
        </div>

        {/* Dimension list */}
        <div className="card overflow-hidden">
          <div className="px-3 py-2.5 border-b border-slate-100">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Sections
            </p>
          </div>
          <div className="divide-y divide-slate-100">
            {DIMENSION_ORDER.map((code) => {
              const dim = dimMap[code];
              const isOpen = openSection === code;
              const score = dim?.score ?? null;
              const isComplete = dim?.status === "complete" || score !== null;
              const isFailed = dim?.status === "failed";

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    onToggle(code);
                    scrollToDimension(code);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors ${
                    isOpen ? "bg-brand-50" : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* Status dot */}
                  <span className="shrink-0">
                    {isComplete ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : isFailed ? (
                      <XCircle className="w-3.5 h-3.5 text-red-400" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </span>

                  <span
                    className={`flex-1 text-xs truncate ${
                      isOpen ? "font-semibold text-brand-700" : "text-slate-700"
                    }`}
                  >
                    {code} · {DIMENSION_LABELS[code]}
                  </span>

                  {score !== null && (
                    <span
                      className={`text-xs font-bold tabular-nums shrink-0 ${scoreColorClass(score)}`}
                    >
                      {score}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status */}
        <div className="card card-pad">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Audit Status
          </p>
          <AuditStatusBadge status={audit.status} />
        </div>
      </div>
    </aside>
  );
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

// ── BrandLogo ──────────────────────────────────────────────────────────────────

function BrandLogo({
  logoUrl,
  domain,
  brandName,
  size = "lg",
}: {
  logoUrl?: string | null;
  domain?: string | null;
  brandName?: string | null;
  size?: "sm" | "lg";
}) {
  const [error, setError] = useState(false);
  const sizeClass =
    size === "sm"
      ? "w-8 h-8 text-sm rounded-lg"
      : "w-16 h-16 text-2xl rounded-xl";
  const imgSizeClass =
    size === "sm" ? "w-8 h-8 rounded-lg" : "w-16 h-16 rounded-xl";
  const src =
    !error &&
    (logoUrl ?? (domain ? `https://logo.clearbit.com/${domain}` : null));

  if (src) {
    return (
      <img
        src={src}
        alt={brandName ?? "Brand logo"}
        className={`${imgSizeClass} object-contain bg-slate-50 border border-slate-100 p-1`}
        onError={() => setError(true)}
      />
    );
  }
  return (
    <div
      className={`${sizeClass} bg-brand-500/10 border border-brand-200 flex items-center justify-center font-bold text-brand-600 font-heading shrink-0`}
    >
      {brandName?.[0]?.toUpperCase() ?? "?"}
    </div>
  );
}

// ── BrandOverviewHero ──────────────────────────────────────────────────────────

function BrandOverviewHero({ audit }: { audit: FullAudit }) {
  const dev = audit.developer;
  const cd = audit.collectedData;
  const { score: derivedScore, completedCount } = deriveScore(audit.dimensions);
  const displayScore = audit.overallScore ?? derivedScore;
  const totalDimensions = DIMENSION_ORDER.length;
  const isPartial =
    audit.overallScore === null &&
    derivedScore !== null &&
    completedCount < totalDimensions;
  const tier = displayScore !== null ? getScoreTier(displayScore) : null;

  return (
    <div className="card card-pad">
      <div className="flex items-center gap-5">
        <div className="shrink-0">
          <BrandLogo
            logoUrl={cd?.logoUrl}
            domain={dev?.domain}
            brandName={dev?.brandName}
            size="lg"
          />
        </div>
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
            {(dev?.websiteUrl || dev?.domain) && (
              <a
                href={dev.websiteUrl ?? `https://${dev.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-600 hover:text-brand-800 inline-flex items-center gap-1 transition-colors"
              >
                {dev.domain ?? dev.websiteUrl}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {dev?.city && (
              <span className="text-xs text-slate-400">{dev.city}</span>
            )}
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-center gap-1">
          {displayScore !== null ? (
            <>
              <ScoreDonut score={displayScore} />
              {isPartial && (
                <span className="text-[10px] text-amber-600 font-medium text-center leading-tight">
                  {completedCount}/{totalDimensions} dimensions
                </span>
              )}
              {tier && !isPartial && (
                <span
                  className={`text-xs font-semibold ${getScoreTierClass(tier)}`}
                >
                  {getScoreTierLabel(tier)}
                </span>
              )}
            </>
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-0.5 px-2">
              <span className="text-[10px] text-slate-400 text-center leading-tight">
                Score pending
              </span>
              {completedCount > 0 && (
                <span className="text-[10px] text-amber-500 text-center font-medium leading-tight">
                  {completedCount}/{totalDimensions} done
                </span>
              )}
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

  const d9 = audit.dimensions.find((d) => d.code === "D9");
  const discoveredNames = (
    audit.collectedData?.competitorData?.competitors ?? []
  )
    .map((c) => c.name)
    .filter(Boolean);
  const aiExtractedNames: string[] = d9?.aiFindings?.competitors ?? [];
  const manualNames: string[] = audit.developer?.competitors ?? [];
  const competitorNames = (
    discoveredNames.length > 0
      ? discoveredNames
      : aiExtractedNames.length > 0
        ? aiExtractedNames
        : manualNames
  ).slice(0, 3);

  if (
    !strengths.length &&
    !criticalFallbacks.length &&
    !quickWins.length &&
    !competitorNames.length
  )
    return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-red-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Critical Gaps
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

      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
            <Target className="w-3.5 h-3.5 text-violet-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            Top Competitors
          </p>
        </div>
        {competitorNames.length > 0 ? (
          <ul className="space-y-1.5">
            {competitorNames.map((name, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-violet-50 border border-violet-200 flex items-center justify-center text-[9px] font-bold text-violet-600 shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs text-slate-700 truncate">{name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No competitors detected
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
      <ResponsiveContainer width="100%" height={280}>
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
            formatter={(v: number) => [`${v}`, "Score"]}
            contentStyle={{ fontSize: 12 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── YouTubeSection ─────────────────────────────────────────────────────────────

function VideoThumbnail({ video }: { video: YouTubeVideoData }) {
  return (
    <a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        {video.viewCount !== null && (
          <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-mono px-1 py-0.5 rounded">
            {formatCount(video.viewCount)}
          </div>
        )}
      </div>
      <p className="text-[10px] text-slate-600 mt-1 line-clamp-2 group-hover:text-brand-700 leading-relaxed">
        {video.title}
      </p>
    </a>
  );
}

function YouTubeSection({ audit }: { audit: FullAudit }) {
  const yt = audit.collectedData?.youtubeData;
  const hasYouTubeUrl = !!audit.developer?.youtubeUrl;
  if (!yt && !hasYouTubeUrl) return null;

  if (!yt || (!yt.channelName && yt.subscribers === null)) {
    return (
      <div className="card card-pad">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
            <Youtube className="w-3.5 h-3.5 text-red-600" />
          </div>
          <p className="text-sm font-semibold text-slate-800">
            YouTube Presence
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <p className="text-xs text-red-700">
            No YouTube presence detected —{" "}
            <span className="font-semibold">Major gap</span>
          </p>
        </div>
      </div>
    );
  }

  const mostViewed =
    yt.recentVideos.length > 0
      ? yt.recentVideos.reduce(
          (best, v) => ((v.viewCount ?? 0) > (best.viewCount ?? 0) ? v : best),
          yt.recentVideos[0]!,
        )
      : null;
  const lastUploadDate = yt.recentVideos[0]?.publishedAt
    ? new Date(yt.recentVideos[0].publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="card overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
          <Youtube className="w-4 h-4 text-red-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">
            {yt.channelName ?? "YouTube Channel"}
          </p>
          {yt.channelUrl && (
            <a
              href={yt.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-600 hover:text-brand-800 inline-flex items-center gap-1 transition-colors"
            >
              View Channel <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
        <div className="flex items-center gap-5 shrink-0">
          {yt.subscribers !== null && (
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 tabular-nums">
                {formatCount(yt.subscribers)}
              </p>
              <p className="text-[10px] text-slate-500">subscribers</p>
            </div>
          )}
          {yt.totalVideos !== null && (
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 tabular-nums">
                {yt.totalVideos}
              </p>
              <p className="text-[10px] text-slate-500">videos</p>
            </div>
          )}
          {lastUploadDate && (
            <div className="text-right">
              <p className="text-xs font-medium text-slate-700">
                {lastUploadDate}
              </p>
              <p className="text-[10px] text-slate-500">last upload</p>
            </div>
          )}
        </div>
      </div>
      {yt.description && (
        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/30">
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
            {yt.description}
          </p>
        </div>
      )}
      {mostViewed && (
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Trophy className="w-3 h-3" /> Most Viewed
          </p>
          <a
            href={mostViewed.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <img
              src={mostViewed.thumbnailUrl}
              alt={mostViewed.title}
              className="w-24 h-14 object-cover rounded-md shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-800 line-clamp-2 group-hover:text-brand-700 leading-relaxed">
                {mostViewed.title}
              </p>
              {mostViewed.viewCount !== null && (
                <p className="text-[10px] text-slate-500 mt-1">
                  {formatCount(mostViewed.viewCount)} views
                </p>
              )}
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>
        </div>
      )}
      {yt.recentVideos.slice(0, 3).length > 0 && (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">
            Recent Videos
          </p>
          <div className="grid grid-cols-3 gap-3">
            {yt.recentVideos.slice(0, 3).map((v) => (
              <VideoThumbnail key={v.videoId} video={v} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── CompetitorSection ──────────────────────────────────────────────────────────

function CompetitorSection({ audit }: { audit: FullAudit }) {
  const d9 = audit.dimensions.find((d) => d.code === "D9");
  const cd = audit.collectedData;
  const discoveredCompetitors = cd?.competitorData?.competitors ?? [];
  const manualCompetitorNames = audit.developer?.competitors ?? [];
  const hasDiscovered = discoveredCompetitors.length > 0;
  const hasManual = manualCompetitorNames.length > 0;
  const strengths = d9?.aiFindings?.strengths ?? [];
  const flags = d9?.aiFindings?.criticalFlags ?? [];
  const wins = d9?.aiFindings?.quickWins ?? [];
  const hasAnalysis =
    strengths.length > 0 || flags.length > 0 || wins.length > 0;

  if (!hasAnalysis && !hasDiscovered && !hasManual) return null;

  return (
    <div className="card overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
        <Target className="w-4 h-4 text-violet-600 shrink-0" />
        <p className="text-sm font-semibold text-slate-800">
          Competitor Analysis
        </p>
        {d9?.score != null && (
          <span
            className={`ml-auto text-sm font-bold ${scoreColorClass(d9.score)}`}
          >
            D9 Score: {d9.score}
          </span>
        )}
      </div>
      {d9?.aiSummary && (
        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/30">
          <p className="text-xs text-slate-600 leading-relaxed">
            {d9.aiSummary}
          </p>
        </div>
      )}
      {hasDiscovered && (
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Detected Competitors
          </p>
          <div className="space-y-2">
            {discoveredCompetitors.slice(0, 5).map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 bg-slate-50/40"
              >
                <div className="w-7 h-7 rounded-lg bg-violet-100 border border-violet-200 flex items-center justify-center text-[11px] font-bold text-violet-700 shrink-0">
                  {c.name[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-800 truncate">
                    {c.name}
                  </p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-brand-600 hover:text-brand-800 inline-flex items-center gap-0.5 truncate max-w-[160px]"
                    >
                      {c.domain || c.link}{" "}
                      <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                    </a>
                  )}
                </div>
                {c.rating !== undefined && c.rating > 0 && (
                  <span className="text-[10px] text-amber-700 font-medium shrink-0">
                    ★ {c.rating.toFixed(1)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!hasDiscovered && hasManual && (
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Competitors Analyzed
          </p>
          <div className="flex flex-wrap gap-2">
            {manualCompetitorNames.slice(0, 5).map((name, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
      {hasAnalysis && (
        <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {strengths.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Where You're Stronger
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
          {flags.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> Where They're Stronger
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
          {wins.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Zap className="w-3 h-3" /> Key Recommendations
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

// ── MobileProgressBar ──────────────────────────────────────────────────────────

function MobileProgressBar({ audit }: { audit: FullAudit }) {
  const { completedCount } = deriveScore(audit.dimensions);
  const total = DIMENSION_ORDER.length;
  const pct = Math.round((completedCount / total) * 100);
  return (
    <div className="lg:hidden card card-pad flex items-center gap-3">
      <div className="flex-1">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="font-semibold text-slate-700">
            {completedCount}/{total} sections complete
          </span>
          <span className="font-bold text-brand-700">{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function GrowthBrandAuditDetailPage() {
  const { auditId = "" } = useParams<{ auditId: string }>();
  const queryClient = useQueryClient();
  const runningAuditId = useAuditStatusStore((s) => s.runningAuditId);
  const saveMutation = useSaveManualOverride(auditId);

  const { data: audit, isLoading, isError, error } = useFullAudit(auditId);

  // Track which accordion is open (one at a time for clean UX)
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showOverview, setShowOverview] = useState(true);

  function invalidate() {
    void queryClient.invalidateQueries({
      queryKey: growthKeys.fullAudit(auditId),
    });
  }

  const {
    running,
    events,
    error: runError,
    run,
  } = useRunAudit(auditId, invalidate);

  const handleToggle = useCallback((code: string) => {
    setOpenSection((prev) => (prev === code ? null : code));
  }, []);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;
  if (!audit) return <ErrorState error={new Error("Audit not found")} />;

  const canRun = audit.status === "DRAFT" || audit.status === "FAILED";
  const inProgress =
    running || audit.status === "COLLECTING" || audit.status === "ANALYZING";
  const anotherRunning = runningAuditId !== null && runningAuditId !== auditId;
  const isComplete = audit.status === "COMPLETE";

  const dimMap = Object.fromEntries(audit.dimensions.map((d) => [d.code, d]));
  const manualOverrides =
    (audit.manualOverrides as Record<string, Record<string, unknown>> | null) ??
    {};

  const sortedDimensions = DIMENSION_ORDER.map((code) => dimMap[code]).filter(
    (d): d is FullAuditDimension => Boolean(d),
  );

  async function handlePostAuditSubmit(data: Record<string, unknown>) {
    await saveMutation.mutateAsync({ dimensionCode: "POST_AUDIT", data });
  }

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
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            {(canRun || inProgress) && (
              <div className="relative group/run-btn">
                <button
                  onClick={() => void run()}
                  disabled={inProgress || anotherRunning}
                  className="btn-primary flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {inProgress ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Running…
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Launch Full Audit
                    </>
                  )}
                </button>
                {anotherRunning && !inProgress && (
                  <div className="absolute right-0 top-full mt-2 z-50 px-3 py-2 bg-slate-800 border border-white/10 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none shadow-xl opacity-0 group-hover/run-btn:opacity-100 transition-opacity duration-150">
                    An audit is already in progress
                    <span className="absolute bottom-full right-4 border-4 border-transparent border-b-slate-800" />
                  </div>
                )}
              </div>
            )}
          </div>
        }
      />

      <div className="p-6 flex gap-6 min-h-0">
        {/* Sticky sidebar */}
        <ProgressSidebar
          audit={audit}
          openSection={openSection}
          onToggle={handleToggle}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-5">
          {/* Insights banner */}
          <InsightsBanner />

          {/* Mobile progress */}
          <MobileProgressBar audit={audit} />

          {/* Overview toggle */}
          <div className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setShowOverview((o) => !o)}
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50/60 transition-colors"
            >
              {showOverview ? (
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              )}
              <span className="text-sm font-semibold text-slate-800">
                Audit Overview
              </span>
              <AuditStatusBadge status={audit.status} />
            </button>
            {showOverview && (
              <div className="border-t border-slate-100 p-4 space-y-4">
                <BrandOverviewHero audit={audit} />
                <SummaryCards audit={audit} />
                {sortedDimensions.filter((d) => d.score !== null).length >=
                  3 && <AuditRadarChart dimensions={sortedDimensions} />}
                <YouTubeSection audit={audit} />
                <CompetitorSection audit={audit} />

                {/* Full-run event log */}
                {(running || events.length > 0) && (
                  <div className="card card-pad space-y-3">
                    <p className="text-xs font-semibold text-slate-600">
                      {running ? "Running full audit…" : "Last full run"}
                    </p>
                    {runError && (
                      <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                        {runError}
                      </p>
                    )}
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
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
                          text = `Analysing ${ev.dimension}${ev.score != null ? ` — score ${ev.score}` : ""}${ev.status === "done" ? " ✓" : "…"}`;
                        else if (ev.stage === "complete")
                          text = `Complete — overall score: ${ev.overallScore ?? "—"}`;
                        else if (ev.stage === "error")
                          text = `Error: ${ev.message}`;
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
              </div>
            )}
          </div>

          {/* D1–D10 Accordions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Analysis Sections
              </p>
              <button
                type="button"
                onClick={() => setOpenSection(null)}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                Collapse all
              </button>
            </div>

            {sortedDimensions.map((dim) => (
              <DimensionAccordion
                key={dim.code}
                auditId={auditId}
                dimension={dim}
                label={DIMENSION_LABELS[dim.code] ?? dim.code}
                isOpen={openSection === dim.code}
                onToggle={() => handleToggle(dim.code)}
                savedManualData={manualOverrides[dim.code] ?? {}}
                onRerunComplete={invalidate}
              />
            ))}

            {/* Placeholder rows for dimensions not yet in DB */}
            {DIMENSION_ORDER.filter((code) => !dimMap[code]).map((code) => (
              <div
                key={code}
                className="card px-4 py-3.5 flex items-center gap-3 opacity-50"
              >
                <Clock className="w-4 h-4 text-slate-300 shrink-0" />
                <span className="text-xs font-bold text-slate-400 w-8 shrink-0">
                  {code}
                </span>
                <span className="flex-1 text-sm text-slate-400">
                  {DIMENSION_LABELS[code]}
                </span>
                <span className="text-xs text-slate-300">not started</span>
              </div>
            ))}
          </div>

          {/* Post Audit Enhancement Form */}
          {isComplete && (
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Post-Audit Enhancement
              </p>
              <PostAuditForm
                onSubmit={(data) =>
                  handlePostAuditSubmit(
                    data as unknown as Record<string, unknown>,
                  )
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
