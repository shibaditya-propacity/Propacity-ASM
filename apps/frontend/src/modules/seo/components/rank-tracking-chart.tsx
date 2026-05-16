import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { SeoKeyword } from "../types";

// ── Constants ─────────────────────────────────────────────────────────────────

const LINE_COLORS = [
  "#2D3FE7",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
  "#84CC16",
];

// ── Tooltip ───────────────────────────────────────────────────────────────────

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function RankTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5 space-y-1">
      <p className="text-xs font-semibold text-slate-700">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-xs" style={{ color: p.color }}>
          {p.name}: #{p.value}
        </p>
      ))}
    </div>
  );
}

// ── Chart ─────────────────────────────────────────────────────────────────────

interface RankTrackingChartProps {
  keywords: SeoKeyword[];
}

export function RankTrackingChart({ keywords }: RankTrackingChartProps) {
  const tracked = keywords.filter(
    (kw) => Array.isArray(kw.weeklyHistory) && kw.weeklyHistory.length > 0,
  );

  if (tracked.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Rank Tracking
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Weekly positions for priority keywords
          </p>
        </div>
        <div className="h-48 flex items-center justify-center text-sm text-slate-400">
          Add keywords and run a sync to see rank history
        </div>
      </div>
    );
  }

  // Build weekly data points: W1 … W7 (or however many history points exist)
  const maxWeeks = Math.max(...tracked.map((kw) => kw.weeklyHistory.length));
  const chartData = Array.from({ length: maxWeeks }, (_, i) => {
    const point: Record<string, string | number> = {
      week: `W${i + 1}`,
    };
    tracked.forEach((kw) => {
      const rank = kw.weeklyHistory[i];
      if (rank !== null && rank !== undefined) {
        point[kw.keyword] = rank;
      }
    });
    return point;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Rank Tracking</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Weekly positions for priority keywords
        </p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={chartData}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            reversed
            domain={[1, 25]}
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            width={30}
            label={{
              value: "Rank",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 10, fill: "#94A3B8" },
            }}
          />
          <Tooltip content={<RankTooltip />} />
          {tracked.map((kw, i) => (
            <Line
              key={kw.id}
              type="monotone"
              dataKey={kw.keyword}
              stroke={LINE_COLORS[i % LINE_COLORS.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {tracked.map((kw, i) => (
          <div key={kw.id} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: LINE_COLORS[i % LINE_COLORS.length] }}
            />
            <span className="text-xs text-slate-600 truncate max-w-[120px]">
              {kw.keyword}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
