import type { ReactNode } from "react";
import {
  CalendarDays,
  Users,
  Trophy,
  MessageSquare,
  CalendarX,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ErrorState } from "@/core/components/error-state";
import { Topbar } from "@/core/layout/topbar";
import { MotivationalBanner } from "../components/motivational-banner";
import { WorkshopTable } from "../components/workshop-table";
import { useWorkshops } from "../api/use-workshops";
import { useProspects } from "../api/use-prospects";

// ── Stat card config ──────────────────────────────────────────────────────────
interface StatCard {
  label:     string;
  value:     number;
  icon:      typeof CalendarDays;
  gradient:  string;
  iconColor: string;
  accent:    string;
}

// ── Stage colour map ──────────────────────────────────────────────────────────
const STAGE_COLORS: Record<string, string> = {
  Won:             "#2D3FE7",
  "In Discussion": "#F59E0B",
  Lost:            "#EF4444",
  New:             "#8B5CF6",
  Qualified:       "#10B981",
};
const FALLBACK_COLORS = ["#2D3FE7", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06B6D4"];
function stageColor(stage: string, idx: number) {
  return STAGE_COLORS[stage] ?? FALLBACK_COLORS[idx % FALLBACK_COLORS.length];
}

// ── Framer variants ───────────────────────────────────────────────────────────
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardAnim = {
  hidden:  { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ── Custom tooltip ────────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PipelineTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  const stage = entry?.payload?.stage as string | undefined;
  const count = entry?.value as number | undefined;
  const fill  = entry?.fill  as string | undefined;
  if (stage == null || count == null) return null;
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl">
      <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: fill ?? "#2D3FE7" }}>
        {stage}
      </p>
      <p className="text-white font-bold text-lg leading-none">{count}</p>
      <p className="text-white/40 text-[10px] mt-0.5">{count === 1 ? "prospect" : "prospects"}</p>
    </div>
  );
}

// ── Dashboard page ────────────────────────────────────────────────────────────
export default function GrowthDashboardPage() {
  const workshops = useWorkshops();
  const prospects = useProspects();

  const workshopsData = workshops.data ?? [];
  const prospectsData = prospects.data ?? [];

  const wonCount          = prospectsData.filter((p) => p.stage === "Won").length;
  const inDiscussionCount = prospectsData.filter((p) => p.stage === "In Discussion").length;

  const stageCounts = prospectsData.reduce<Record<string, number>>((acc, p) => {
    acc[p.stage] = (acc[p.stage] ?? 0) + 1;
    return acc;
  }, {});

  const pipelineData = Object.entries(stageCounts).map(([stage, count]) => ({ stage, count }));
  const recentWorkshops = workshopsData.slice(-5).reverse();

  const statCards: StatCard[] = [
    {
      label:     "Total Workshops",
      value:     workshopsData.length,
      icon:      CalendarDays,
      gradient:  "from-brand-500 to-blue-600",
      iconColor: "text-white",
      accent:    "border-brand-500/30 shadow-brand-500/10",
    },
    {
      label:     "Total Prospects",
      value:     prospectsData.length,
      icon:      Users,
      gradient:  "from-violet-500 to-purple-600",
      iconColor: "text-white",
      accent:    "border-violet-500/30 shadow-violet-500/10",
    },
    {
      label:     "Won",
      value:     wonCount,
      icon:      Trophy,
      gradient:  "from-emerald-500 to-teal-600",
      iconColor: "text-white",
      accent:    "border-emerald-500/30 shadow-emerald-500/10",
    },
    {
      label:     "In Discussion",
      value:     inDiscussionCount,
      icon:      MessageSquare,
      gradient:  "from-amber-500 to-orange-500",
      iconColor: "text-white",
      accent:    "border-amber-500/30 shadow-amber-500/10",
    },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-auto bg-[#F4F6FB]">
      <Topbar title="Growth Dashboard" />
      <MotivationalBanner wonCount={wonCount} />

      {(workshops.isError || prospects.isError) && (
        <div className="p-6">
          <ErrorState
            error={workshops.error ?? prospects.error}
            onRetry={() => { workshops.refetch(); prospects.refetch(); }}
          />
        </div>
      )}

      {!workshops.isError && !prospects.isError && (
        <div className="p-6 space-y-6 flex-1">

          {/* ── KPI stat cards ── */}
          {workshops.isLoading || prospects.isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 animate-pulse" />
                  <div className="h-9 w-14 rounded-lg bg-slate-100 animate-pulse" />
                  <div className="h-3 w-24 rounded bg-slate-100 animate-pulse" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {statCards.map((card) => (
                <StatCardItem key={card.label} card={card} />
              ))}
            </motion.div>
          )}

          {/* ── Recent Workshops ── */}
          <section>
            <SectionHeading>Recent Workshops</SectionHeading>
            {workshops.isLoading ? (
              <TableSkeleton />
            ) : recentWorkshops.length === 0 ? (
              <EmptyBox
                icon={<CalendarX className="w-8 h-8 text-slate-300" />}
                title="No workshops yet"
                description="Schedule your first workshop using the sidebar button."
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                <WorkshopTable workshops={recentWorkshops} />
              </motion.div>
            )}
          </section>

          {/* ── Pipeline by Stage ── */}
          <section>
            <SectionHeading>Pipeline by Stage</SectionHeading>
            {prospects.isLoading ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="h-44 bg-slate-100 animate-pulse rounded-xl" />
              </div>
            ) : pipelineData.length === 0 ? (
              <EmptyBox
                icon={<UsersRound className="w-8 h-8 text-slate-300" />}
                title="No prospects in the pipeline"
                description="Add prospects from the Workshops section to start tracking stages."
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5"
              >
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={pipelineData}
                    layout="vertical"
                    margin={{ top: 4, right: 24, left: 0, bottom: 4 }}
                    barCategoryGap="30%"
                  >
                    <XAxis type="number" allowDecimals={false}
                      tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="stage" width={110}
                      tick={{ fontSize: 12, fill: "#475569", fontWeight: 500 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<PipelineTooltip />} cursor={{ fill: "rgba(148,163,184,0.08)" }} />
                    <Bar dataKey="count" radius={[0, 6, 6, 0]} isAnimationActive animationDuration={700}>
                      {pipelineData.map((entry, idx) => (
                        <Cell key={entry.stage} fill={stageColor(entry.stage, idx)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </section>

        </div>
      )}
    </div>
  );
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCardItem({ card }: { card: StatCard }) {
  const { label, value, icon: Icon, gradient, iconColor, accent } = card;
  return (
    <motion.div
      variants={cardAnim}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      className={`bg-white rounded-2xl border shadow-md p-5 cursor-default overflow-hidden relative ${accent}`}
    >
      {/* Subtle top gradient stripe */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradient}`} />

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>

      {/* Value */}
      <div className="font-heading text-[38px] font-bold text-slate-900 leading-none mb-1.5">
        {value}
      </div>

      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block" />
      {children}
    </h2>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyBox({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center text-center gap-3 bg-white/60">
      {icon}
      <p className="text-sm font-semibold text-slate-600">{title}</p>
      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">{description}</p>
    </div>
  );
}

// ── Table skeleton ────────────────────────────────────────────────────────────
function TableSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-4 px-4 py-3.5 border-b border-slate-100 last:border-0">
          <div className="h-4 w-40 rounded bg-slate-100 animate-pulse" />
          <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
          <div className="h-4 w-16 rounded bg-slate-100 animate-pulse ml-auto" />
        </div>
      ))}
    </div>
  );
}
