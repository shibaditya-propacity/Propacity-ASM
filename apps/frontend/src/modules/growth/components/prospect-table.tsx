import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight, Building2 } from "lucide-react";
import { ProspectStageBadge } from "./prospect-stage-badge";
import type { Prospect } from "../types";

interface ProspectTableProps {
  prospects: Prospect[];
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length >= 2 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  const letters = parts.length >= 2 ? `${first}${last}` : name.slice(0, 2);
  return letters.toUpperCase();
}

// Deterministic color from name for avatar bg
const AVATAR_COLORS = [
  "bg-brand-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];
function avatarColor(name: string): string {
  const idx =
    [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    AVATAR_COLORS.length;
  return AVATAR_COLORS[idx] ?? "bg-brand-500";
}

export function ProspectTable({ prospects }: ProspectTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="th w-[32%]">Prospect</th>
            <th className="th">Stage</th>
            <th className="th hidden md:table-cell">City</th>
            <th className="th hidden lg:table-cell">Owner</th>
            <th className="th">Last activity</th>
            <th className="th w-10" />
          </tr>
        </thead>
        <tbody>
          {prospects.map((p) => (
            <tr
              key={p.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors duration-100 group cursor-pointer"
            >
              {/* Avatar + Name */}
              <td className="td">
                <Link
                  to={`/growth/prospects/${p.id}`}
                  className="flex items-center gap-3 min-w-0"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${avatarColor(p.name)} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}
                  >
                    <Initials name={p.name} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate text-[13px] group-hover:text-brand-600 transition-colors">
                      {p.name}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 truncate">
                      <Building2 className="w-2.5 h-2.5 shrink-0" />
                      <span>{p.company}</span>
                      {p.designation && (
                        <>
                          <span>·</span>
                          <span className="truncate">{p.designation}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </td>

              {/* Stage */}
              <td className="td">
                <ProspectStageBadge stage={p.stage} />
              </td>

              {/* City */}
              <td className="td hidden md:table-cell text-[12px] text-slate-500">
                {p.city ?? <span className="text-slate-300">—</span>}
              </td>

              {/* Owner */}
              <td className="td hidden lg:table-cell text-[12px] text-slate-500">
                {p.ownerPm ?? <span className="text-slate-300">—</span>}
              </td>

              {/* Last activity */}
              <td className="td text-[12px] text-slate-400 whitespace-nowrap">
                {formatDistanceToNow(new Date(p.lastActivity), {
                  addSuffix: true,
                })}
              </td>

              {/* Arrow */}
              <td className="td pr-4">
                <Link
                  to={`/growth/prospects/${p.id}`}
                  aria-label={`View ${p.name}`}
                  className="flex items-center justify-end text-slate-300 group-hover:text-brand-500 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
