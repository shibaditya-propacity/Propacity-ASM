import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { SocialSnapshot, SocialPlatform } from "../../types";
import { PLATFORM_LABELS, PLATFORM_COLORS } from "../../types";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function FollowerTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5 space-y-1">
      <p className="text-xs font-semibold text-slate-700">{label}</p>
      {payload.map((p) => (
        <p
          key={p.name}
          className="text-xs font-medium"
          style={{ color: p.color }}
        >
          {p.name}:{" "}
          {p.value >= 1000 ? `${(p.value / 1000).toFixed(1)}K` : p.value}
        </p>
      ))}
    </div>
  );
}

interface FollowerGrowthChartProps {
  snapshotsByPlatform: Partial<Record<SocialPlatform, SocialSnapshot[]>>;
}

export function FollowerGrowthChart({
  snapshotsByPlatform,
}: FollowerGrowthChartProps) {
  const platforms = Object.keys(snapshotsByPlatform) as SocialPlatform[];

  if (platforms.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="text-sm font-semibold text-slate-900">
          Follower Growth
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Historical follower trend
        </p>
        <div className="h-48 flex items-center justify-center text-sm text-slate-400 mt-4">
          No data yet — sync to populate
        </div>
      </div>
    );
  }

  // Build time-series data points keyed by date
  const dateMap = new Map<string, Record<string, number>>();
  platforms.forEach((platform) => {
    const snaps = snapshotsByPlatform[platform] ?? [];
    snaps.forEach((s) => {
      const date = new Date(s.snapshotDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });
      if (!dateMap.has(date)) dateMap.set(date, {});
      dateMap.get(date)![PLATFORM_LABELS[platform]] = s.followers;
    });
  });

  const data = Array.from(dateMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, vals]) => ({ date, ...vals }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Follower Growth
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Historical follower trend
        </p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <defs>
            {platforms.map((p) => (
              <linearGradient
                key={p}
                id={`grad-${p}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={PLATFORM_COLORS[p]}
                  stopOpacity={0.15}
                />
                <stop
                  offset="95%"
                  stopColor={PLATFORM_COLORS[p]}
                  stopOpacity={0}
                />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            width={44}
            tickFormatter={(v: number) =>
              v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)
            }
          />
          <Tooltip content={<FollowerTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
          />
          {platforms.map((p) => (
            <Area
              key={p}
              type="monotone"
              dataKey={PLATFORM_LABELS[p]}
              stroke={PLATFORM_COLORS[p]}
              strokeWidth={2}
              fill={`url(#grad-${p})`}
              dot={false}
              activeDot={{ r: 4, fill: PLATFORM_COLORS[p] }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
