import { Users, TrendingUp, Radio, Award } from "lucide-react";
import type { SocialDashboard } from "../../types";
import { PLATFORM_LABELS } from "../../types";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  Icon: React.ElementType;
  color: string;
}

function StatCard({ label, value, sub, Icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-0.5 leading-none">
          {value}
        </p>
        {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
      </div>
    </div>
  );
}

function formatFollowers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

interface SocialStatsBarProps {
  dashboard: SocialDashboard;
}

export function SocialStatsBar({ dashboard }: SocialStatsBarProps) {
  const { summary } = dashboard;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total Followers"
        value={formatFollowers(summary.totalFollowers)}
        sub={`${dashboard.profiles.length} platform${dashboard.profiles.length !== 1 ? "s" : ""} tracked`}
        Icon={Users}
        color="#2D3FE7"
      />
      <StatCard
        label="Avg Engagement Rate"
        value={
          summary.avgEngagementRate != null
            ? `${summary.avgEngagementRate}%`
            : "—"
        }
        sub="Across connected platforms"
        Icon={TrendingUp}
        color="#10B981"
      />
      <StatCard
        label="Total Reach"
        value={
          summary.totalReach != null ? formatFollowers(summary.totalReach) : "—"
        }
        sub="Combined estimated reach"
        Icon={Radio}
        color="#8B5CF6"
      />
      <StatCard
        label="Best Platform"
        value={
          summary.bestPlatform
            ? (PLATFORM_LABELS[
                summary.bestPlatform as keyof typeof PLATFORM_LABELS
              ] ?? summary.bestPlatform)
            : "—"
        }
        sub="By follower count"
        Icon={Award}
        color="#F59E0B"
      />
    </div>
  );
}
