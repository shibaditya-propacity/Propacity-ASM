import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowRight, Users, MapPin } from "lucide-react";
import { WorkshopStatusBadge } from "./workshop-status-badge";
import { ProgressBar } from "@/core/ui";
import type { Workshop } from "../types";

interface WorkshopTableProps {
  workshops: Workshop[];
}

export function WorkshopTable({ workshops }: WorkshopTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="th w-[30%]">Workshop</th>
            <th className="th">Date</th>
            <th className="th">Capacity</th>
            <th className="th">Status</th>
            <th className="th hidden sm:table-cell">Created by</th>
            <th className="th w-10" />
          </tr>
        </thead>
        <tbody>
          {workshops.map((w) => {
            const pct =
              w.capacity > 0
                ? Math.round((w.registered / w.capacity) * 100)
                : 0;
            const tone = pct >= 90 ? "emerald" : pct >= 60 ? "brand" : "amber";

            return (
              <tr
                key={w.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors duration-100 group"
              >
                {/* Title + format */}
                <td className="td font-medium text-slate-900 max-w-0">
                  <div className="truncate">{w.title}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {w.format}
                    </span>
                    {w.city && (
                      <>
                        <span className="text-slate-200">·</span>
                        <MapPin className="w-2.5 h-2.5 text-slate-300" />
                        <span className="text-[11px] text-slate-400">
                          {w.city}
                        </span>
                      </>
                    )}
                  </div>
                </td>

                {/* Date */}
                <td className="td text-slate-600 whitespace-nowrap">
                  <div className="text-[13px] font-medium">
                    {format(new Date(w.date), "dd MMM")}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {format(new Date(w.date), "yyyy")}
                  </div>
                </td>

                {/* Capacity with bar */}
                <td className="td">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Users className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="text-[13px] text-slate-700">
                      <span className="font-semibold text-slate-900">
                        {w.registered}
                      </span>
                      <span className="text-slate-400"> / {w.capacity}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 ml-auto">
                      {pct}%
                    </span>
                  </div>
                  <ProgressBar
                    value={w.registered}
                    max={w.capacity}
                    tone={tone}
                  />
                </td>

                {/* Status */}
                <td className="td">
                  <WorkshopStatusBadge status={w.status} />
                </td>

                {/* Created by */}
                <td className="td hidden sm:table-cell text-[12px] text-slate-500">
                  {w.createdByName ?? <span className="text-slate-300">—</span>}
                </td>

                {/* Action */}
                <td className="td pr-4">
                  <Link
                    to={`/growth/workshops/${w.id}`}
                    className="flex items-center justify-end text-slate-300 group-hover:text-brand-500 transition-colors"
                    aria-label={`View workshop ${w.title}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
