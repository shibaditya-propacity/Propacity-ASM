import { Link } from "react-router-dom";
import { format } from "date-fns";
import { WorkshopStatusBadge } from "./workshop-status-badge";
import type { Workshop } from "../types";

interface WorkshopTableProps {
  workshops: Workshop[];
}

export function WorkshopTable({ workshops }: WorkshopTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="th">Title</th>
            <th className="th">Format</th>
            <th className="th">Date / City</th>
            <th className="th">Capacity</th>
            <th className="th">Status</th>
            <th className="th">Created by</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((w) => (
            <tr
              key={w.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
            >
              <td className="td font-medium text-slate-900">{w.title}</td>
              <td className="td text-slate-600">{w.format}</td>
              <td className="td text-slate-600">
                <div>{format(new Date(w.date), "dd MMM yyyy")}</div>
                {w.city && (
                  <div className="text-xs text-slate-400">{w.city}</div>
                )}
              </td>
              <td className="td text-slate-600">
                <span className="text-emerald-600 font-medium">
                  {w.attended}
                </span>
                <span className="text-slate-400"> / </span>
                <span className="text-slate-700">{w.registered}</span>
                <span className="text-slate-400 text-xs"> of {w.capacity}</span>
              </td>
              <td className="td">
                <WorkshopStatusBadge status={w.status} />
              </td>
              <td className="td text-slate-500 text-xs">
                {w.createdByName ?? <span className="text-slate-300">—</span>}
              </td>
              <td className="td">
                <Link
                  to={`/growth/workshops/${w.id}`}
                  className="text-brand-600 hover:text-brand-700 font-medium text-xs"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
