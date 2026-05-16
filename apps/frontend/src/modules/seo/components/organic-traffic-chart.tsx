import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import type { MonthlySession } from "../types";

// ── Tooltip ───────────────────────────────────────────────────────────────────

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function TrafficTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  const value = payload[0]?.value ?? 0;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5">
      <p className="text-xs font-semibold text-slate-700">{label}</p>
      <p className="text-sm text-brand-600 font-bold">
        organic: {value.toLocaleString()}
      </p>
    </div>
  );
}

// ── Chart ─────────────────────────────────────────────────────────────────────

interface OrganicTrafficChartProps {
  sessions: MonthlySession[];
}

const MONTH_ABBR: Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

function formatMonth(ym: string): string {
  const parts = ym.split("-");
  const month = parts[1] ?? "";
  return MONTH_ABBR[month] ?? ym;
}

export function OrganicTrafficChart({ sessions }: OrganicTrafficChartProps) {
  const data = [...sessions]
    .sort((a, b) => a.month.localeCompare(b.month))
    .map((s) => ({ month: formatMonth(s.month), sessions: s.sessions }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Organic Traffic
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Monthly sessions from search
        </p>
      </div>

      {data.length === 0 ? (
        <div className="h-48 flex items-center justify-center text-sm text-slate-400">
          No traffic data yet — run a sync to load
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="seoTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3FE7" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#2D3FE7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip content={<TrafficTooltip />} />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#2D3FE7"
              strokeWidth={2}
              fill="url(#seoTrafficGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#2D3FE7" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
