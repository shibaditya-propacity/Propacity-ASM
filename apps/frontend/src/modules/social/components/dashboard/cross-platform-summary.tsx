import type { SocialDashboard, SocialPlatform } from "../../types";
import { PLATFORM_LABELS, PLATFORM_COLORS } from "../../types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

interface CrossPlatformSummaryProps {
  dashboard: SocialDashboard;
}

export function CrossPlatformSummary({ dashboard }: CrossPlatformSummaryProps) {
  const { profiles, latestSnapshots } = dashboard;
  // Show all profiles that have at least a snapshot (followers > 0)
  const active = profiles.filter(
    (p) => (latestSnapshots[p.platform]?.followers ?? 0) > 0,
  );

  if (active.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="text-sm font-semibold text-slate-900">
          Platform Breakdown
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Follower share by platform
        </p>
        <div className="h-32 flex items-center justify-center text-sm text-slate-400 mt-4">
          No data yet — run a sync to populate
        </div>
      </div>
    );
  }

  const totalFollowers = active.reduce((sum, p) => {
    return sum + (latestSnapshots[p.platform]?.followers ?? 0);
  }, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Platform Breakdown
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Follower share by platform
        </p>
      </div>

      <div className="space-y-3">
        {active.map((p) => {
          const snap = latestSnapshots[p.platform];
          const followers = snap?.followers ?? 0;
          const pct =
            totalFollowers > 0 ? (followers / totalFollowers) * 100 : 0;
          const color = PLATFORM_COLORS[p.platform as SocialPlatform];

          return (
            <div key={p.platform} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">
                  {PLATFORM_LABELS[p.platform as SocialPlatform]}
                </span>
                <span className="text-slate-500">
                  {formatNum(followers)} ({pct.toFixed(0)}%)
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
