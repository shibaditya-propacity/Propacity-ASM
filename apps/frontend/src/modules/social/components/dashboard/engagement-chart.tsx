import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { SocialDashboard, SocialPlatform } from "../../types";
import { PLATFORM_LABELS, PLATFORM_COLORS } from "../../types";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function EngagementTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5">
      <p className="text-xs font-semibold text-slate-700">{label}</p>
      <p className="text-sm font-bold text-slate-900">
        {(payload[0]?.value ?? 0).toFixed(2)}% engagement
      </p>
    </div>
  );
}

interface EngagementChartProps {
  dashboard: SocialDashboard;
}

export function EngagementChart({ dashboard }: EngagementChartProps) {
  const { profiles, latestSnapshots } = dashboard;

  const data = profiles
    .filter((p) => latestSnapshots[p.platform]?.engagementRate != null)
    .map((p) => ({
      platform: PLATFORM_LABELS[p.platform as SocialPlatform],
      platformKey: p.platform as SocialPlatform,
      rate: latestSnapshots[p.platform]?.engagementRate ?? 0,
    }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Engagement Rate by Platform
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          % engagement per platform
        </p>
      </div>

      {data.length === 0 ? (
        <div className="h-48 flex items-center justify-center text-sm text-slate-400">
          No engagement data yet — sync platforms to load
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F1F5F9"
              vertical={false}
            />
            <XAxis
              dataKey="platform"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
              width={36}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip content={<EngagementTooltip />} />
            <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
              {data.map((entry) => (
                <Cell
                  key={entry.platformKey}
                  fill={PLATFORM_COLORS[entry.platformKey]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
