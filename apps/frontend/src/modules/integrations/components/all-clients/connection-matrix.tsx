import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import type { ConnectionMatrix as ConnectionMatrixType } from "../../types";

interface ConnectionMatrixProps {
  matrix: ConnectionMatrixType;
}

type StatusDotConfig = {
  color: string;
  icon: typeof CheckCircle2;
  label: string;
};

const NOT_CONNECTED_CONFIG: StatusDotConfig = {
  color: "bg-slate-200",
  icon: XCircle,
  label: "Not connected",
};

const STATUS_DOT: Record<string, StatusDotConfig> = {
  CONNECTED: {
    color: "bg-emerald-500",
    icon: CheckCircle2,
    label: "Connected",
  },
  ERROR: { color: "bg-red-500", icon: AlertCircle, label: "Error" },
  EXPIRED: { color: "bg-amber-500", icon: AlertCircle, label: "Expired" },
  NOT_CONNECTED: NOT_CONNECTED_CONFIG,
};

export function ConnectionMatrix({ matrix }: ConnectionMatrixProps) {
  const { providers, clients, matrix: data } = matrix;

  if (!clients.length || !providers.length) {
    return (
      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-white/60">
        <p className="text-sm font-semibold text-slate-600">
          No data to display
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            {/* Top-left corner cell */}
            <th className="sticky left-0 bg-white z-10 px-4 py-3 text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider min-w-[160px] border-r border-slate-100">
              Client / Provider
            </th>
            {providers.map((p) => (
              <th
                key={p.id}
                className="px-3 py-3 text-center whitespace-nowrap"
              >
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={p.logoUrl}
                    alt={p.name}
                    className="w-6 h-6 rounded object-contain border border-slate-100"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://placehold.co/24x24/f1f5f9/94a3b8?text=${p.name[0]}`;
                    }}
                  />
                  <span className="text-[10px] font-semibold text-slate-500 max-w-[64px] truncate">
                    {p.name}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map((client, rowIdx) => (
            <tr
              key={client.id}
              className={`${rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-brand-50/30 transition-colors`}
            >
              <td className="sticky left-0 bg-inherit z-10 px-4 py-3 border-r border-slate-100">
                <p className="text-sm font-semibold text-slate-900 truncate max-w-[140px]">
                  {client.name}
                </p>
                {client.industry && (
                  <p className="text-[10px] text-slate-400 truncate">
                    {client.industry}
                  </p>
                )}
              </td>
              {providers.map((p) => {
                const status = data[client.id]?.[p.id] ?? "NOT_CONNECTED";
                const cfg = STATUS_DOT[status] ?? NOT_CONNECTED_CONFIG;
                return (
                  <td key={p.id} className="px-3 py-3 text-center">
                    <div className="group relative inline-flex items-center justify-center">
                      <span
                        className={`w-3 h-3 rounded-full ${cfg.color} cursor-default`}
                        title={cfg.label}
                      />
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        {cfg.label}
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
