import type { ReactNode } from "react";
import {
  CalendarDays,
  Users,
  Trophy,
  MessageSquare,
  CalendarX,
  UsersRound,
  ArrowRight,
  Flame,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import { Skeleton } from "@/core/ui";
import { MotivationalBanner } from "../components/motivational-banner";
import { WorkshopTable } from "../components/workshop-table";
import { ProspectTable } from "../components/prospect-table";
import { useWorkshops } from "../api/use-workshops";
import { useProspects } from "../api/use-prospects";

// ── Stage colour map ──────────────────────────────────────────────────────────
const STAGE_COLORS: Record<string, string> = {
  Won: "#2D3FE7",
  "In Discussion": "#F59E0B",
  Lost: "#EF4444",
  New: "#8B5CF6",
  Qualified: "#10B981",
};
const FALLBACK_COLORS = [
  "#2D3FE7",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
];
function stageColor(stage: string, idx: number) {
  return STAGE_COLORS[stage] ?? FALLBACK_COLORS[idx % FALLBACK_COLORS.length];
}

// ── Animation variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

// ── Custom chart tooltip ──────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PipelineTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  const stage = entry?.payload?.stage as string | undefined;
  const count = entry?.value as number | undefined;
  const fill = entry?.fill as string | undefined;
  if (stage == null || count == null) return null;
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl">
      <p
        className="text-[11px] font-semibold uppercase tracking-wider mb-0.5"
        style={{ color: fill ?? "#2D3FE7" }}
      >
        {stage}
      </p>
      <p className="text-white font-bold text-lg leading-none">{count}</p>
      <p className="text-white/40 text-[10px] mt-0.5">
        {count === 1 ? "prospect" : "prospects"}
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GrowthDashboardPage() {
  const workshops = useWorkshops();
  const prospects = useProspects();

  const workshopsData = workshops.data ?? [];
  const prospectsData = prospects.data ?? [];

  const wonCount = prospectsData.filter((p) => p.stage === "Won").length;
  const inDiscussionCount = prospectsData.filter(
    (p) => p.stage === "In Discussion",
  ).length;
  const upcomingCount = workshopsData.filter(
    (w) => w.status === "Upcoming",
  ).length;
  const proposalCount = prospectsData.filter(
    (p) => p.stage === "Proposal Sent",
  ).length;

  const stageCounts = prospectsData.reduce<Record<string, number>>((acc, p) => {
    acc[p.stage] = (acc[p.stage] ?? 0) + 1;
    return acc;
  }, {});
  const pipelineData = Object.entries(stageCounts).map(([stage, count]) => ({
    stage,
    count,
  }));
  const recentWorkshops = workshopsData.slice(-5).reverse();
  const recentProspects = prospectsData.slice(0, 6);

  const isLoading = workshops.isLoading || prospects.isLoading;
  const isError = workshops.isError || prospects.isError;

  type StatCard = {
    label: string;
    value: number;
    icon: typeof CalendarDays;
    gradient: string;
    iconColor: string;
    accent: string;
  };
  const statCards: StatCard[] = [
    {
      label: "Total Workshops",
      value: workshopsData.length,
      icon: CalendarDays,
      gradient: "from-brand-500 to-blue-600",
      iconColor: "text-white",
      accent: "border-brand-500/20 shadow-brand-500/8",
    },
    {
      label: "Total Prospects",
      value: prospectsData.length,
      icon: Users,
      gradient: "from-violet-500 to-purple-600",
      iconColor: "text-white",
      accent: "border-violet-500/20 shadow-violet-500/8",
    },
    {
      label: "Proposals Sent",
      value: proposalCount,
      icon: MessageSquare,
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-white",
      accent: "border-amber-500/20 shadow-amber-500/8",
    },
    {
      label: "Deals Won",
      value: wonCount,
      icon: Trophy,
      gradient: "from-emerald-500 to-teal-600",
      iconColor: "text-white",
      accent: "border-emerald-500/20 shadow-emerald-500/8",
    },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-auto bg-[#F4F6FB]">
      <Topbar
        title="Growth Dashboard"
        subtitle="Pipeline, workshops, and prospect intelligence"
      />
      <MotivationalBanner
        wonCount={wonCount}
        inDiscussion={inDiscussionCount}
        totalProspects={prospectsData.length}
        upcomingWorkshops={upcomingCount}
      />

      {isError && (
        <div className="p-6">
          <ErrorState
            error={workshops.error ?? prospects.error}
            onRetry={() => {
              void workshops.refetch();
              void prospects.refetch();
            }}
          />
        </div>
      )}

      {!isError && (
        <div className="p-6 space-y-6 flex-1">
          {/* ── KPI Stat cards ── */}
          {isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3"
                >
                  <Skeleton className="w-10 h-10 rounded-xl" />
                  <Skeleton className="h-8 w-14 rounded-lg" />
                  <Skeleton className="h-3 w-24 rounded" />
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

          {/* ── Pipeline + Prospects grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pipeline by Stage — 2/3 width */}
            <section className="lg:col-span-2">
              <SectionHeading>Pipeline by Stage</SectionHeading>
              {isLoading ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <Skeleton className="h-44 w-full rounded-xl" />
                </div>
              ) : pipelineData.length === 0 ? (
                <EmptyBox
                  icon={<UsersRound className="w-8 h-8 text-slate-300" />}
                  title="No prospects in the pipeline"
                  description="Add prospects from a workshop to see your funnel."
                  action={
                    <Link
                      to="/growth/workshops"
                      className="btn btn-primary text-xs mt-1"
                    >
                      Go to Workshops
                    </Link>
                  }
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2,
                  }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-slate-500 font-medium">
                      {prospectsData.length} prospects across{" "}
                      {pipelineData.length} stages
                    </p>
                    <Link
                      to="/growth/prospects"
                      className="text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1"
                    >
                      View all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={pipelineData}
                      layout="vertical"
                      margin={{ top: 2, right: 20, left: 0, bottom: 2 }}
                      barCategoryGap="28%"
                    >
                      <XAxis
                        type="number"
                        allowDecimals={false}
                        tick={{ fontSize: 11, fill: "#94a3b8" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        type="category"
                        dataKey="stage"
                        width={118}
                        tick={{
                          fontSize: 12,
                          fill: "#64748b",
                          fontWeight: 500,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        content={<PipelineTooltip />}
                        cursor={{ fill: "rgba(148,163,184,0.07)" }}
                      />
                      <Bar
                        dataKey="count"
                        radius={[0, 6, 6, 0]}
                        isAnimationActive
                        animationDuration={700}
                      >
                        {pipelineData.map((entry, idx) => (
                          <Cell
                            key={entry.stage}
                            fill={stageColor(entry.stage, idx)}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
            </section>

            {/* Conversion snapshot — 1/3 width */}
            <section>
              <SectionHeading>Conversion</SectionHeading>
              {isLoading ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                  {[0, 1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-lg" />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.28,
                  }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3"
                >
                  {[
                    {
                      label: "Attended",
                      count: prospectsData.filter((p) => p.attended).length,
                      color: "bg-blue-500",
                    },
                    {
                      label: "In Discussion",
                      count: inDiscussionCount,
                      color: "bg-amber-500",
                    },
                    {
                      label: "Proposals",
                      count: proposalCount,
                      color: "bg-violet-500",
                    },
                    { label: "Won", count: wonCount, color: "bg-emerald-500" },
                  ].map(({ label, count, color }) => {
                    const pct =
                      prospectsData.length > 0
                        ? Math.round((count / prospectsData.length) * 100)
                        : 0;
                    return (
                      <div key={label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[12px] font-semibold text-slate-600">
                            {label}
                          </span>
                          <span className="text-[12px] font-bold text-slate-900">
                            {count}{" "}
                            <span className="font-normal text-slate-400 text-[11px]">
                              ({pct}%)
                            </span>
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{
                              duration: 0.9,
                              ease: "easeOut",
                              delay: 0.4,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] text-slate-500 font-medium">
                      {prospectsData.length > 0
                        ? `${Math.round((wonCount / prospectsData.length) * 100)}% overall win rate`
                        : "No prospects yet"}
                    </span>
                  </div>
                </motion.div>
              )}
            </section>
          </div>

          {/* ── Recent Workshops ── */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <SectionHeading>Recent Workshops</SectionHeading>
              <Link
                to="/growth/workshops"
                className="text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1"
              >
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {isLoading ? (
              <TableSkeleton rows={3} />
            ) : recentWorkshops.length === 0 ? (
              <EmptyBox
                icon={<CalendarX className="w-8 h-8 text-slate-300" />}
                title="No workshops yet"
                description="Schedule your first workshop using the sidebar button."
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15,
                }}
              >
                <WorkshopTable workshops={recentWorkshops} />
              </motion.div>
            )}
          </section>

          {/* ── Recent Prospects ── */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <SectionHeading>Active Prospects</SectionHeading>
              <Link
                to="/growth/prospects"
                className="text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1"
              >
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {isLoading ? (
              <TableSkeleton rows={4} />
            ) : recentProspects.length === 0 ? (
              <EmptyBox
                icon={<UsersRound className="w-8 h-8 text-slate-300" />}
                title="No prospects yet"
                description="Prospects appear here once added from a workshop."
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.22,
                }}
              >
                <ProspectTable prospects={recentProspects} />
              </motion.div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────
type StatCard = {
  label: string;
  value: number;
  icon: typeof CalendarDays;
  gradient: string;
  iconColor: string;
  accent: string;
};

function StatCardItem({ card }: { card: StatCard }) {
  const { label, value, icon: Icon, gradient, iconColor, accent } = card;
  return (
    <motion.div
      variants={cardAnim}
      whileHover={{ y: -3, boxShadow: "0 12px 28px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className={`bg-white rounded-2xl border shadow-sm p-5 cursor-default overflow-hidden relative ${accent}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${gradient}`}
      />
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-md`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="font-heading text-[36px] font-bold text-slate-900 leading-none mb-1.5">
        {value}
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-[13px] font-bold text-slate-700 mb-3 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0" />
      {children}
    </h2>
  );
}

function EmptyBox({
  icon,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center text-center gap-2.5 bg-white/60">
      {icon}
      <p className="text-sm font-semibold text-slate-600">{title}</p>
      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
        {description}
      </p>
      {action}
    </div>
  );
}

function TableSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 px-4 py-3.5 border-b border-slate-100 last:border-0"
        >
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-3.5 flex-1 max-w-[180px] rounded" />
          <Skeleton className="h-5 w-20 rounded-full ml-auto" />
          <Skeleton className="h-3 w-16 rounded hidden sm:block" />
        </div>
      ))}
    </div>
  );
}
