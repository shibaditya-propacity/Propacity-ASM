import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ProspectStageBadge } from "./prospect-stage-badge";
import type { Prospect } from "../types";

interface ProspectTableProps {
  prospects: Prospect[];
}

export function ProspectTable({ prospects }: ProspectTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="th">Name / Company</th>
            <th className="th">Stage</th>
            <th className="th">Classification</th>
            <th className="th">City</th>
            <th className="th">Owner PM</th>
            <th className="th">Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((p) => (
            <tr
              key={p.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer"
            >
              <td className="td">
                <Link
                  to={`/growth/prospects/${p.id}`}
                  className="block hover:text-brand-600"
                >
                  <div className="font-medium text-slate-900">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.company}</div>
                </Link>
              </td>
              <td className="td">
                <ProspectStageBadge stage={p.stage} />
              </td>
              <td className="td text-slate-600">{p.classification ?? "-"}</td>
              <td className="td text-slate-600">{p.city ?? "-"}</td>
              <td className="td text-slate-600">{p.ownerPm ?? "-"}</td>
              <td className="td text-slate-500 text-xs">
                {format(new Date(p.lastActivity), "dd MMM yyyy")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
