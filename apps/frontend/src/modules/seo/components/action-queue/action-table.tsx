import { Trash2 } from "lucide-react";
import type { SeoAction, ActionStatus } from "../../types";
import {
  StatusPill,
  ImpactBadge,
  EffortBadge,
  CategoryBadge,
  NEXT_STATUS,
} from "./action-badges";

interface ActionTableProps {
  actions: SeoAction[];
  search: string;
  onStatusCycle: (actionId: string, next: ActionStatus) => void;
  onDelete: (actionId: string) => void;
}

export function ActionTable({
  actions,
  search,
  onStatusCycle,
  onDelete,
}: ActionTableProps) {
  const filtered = search
    ? actions.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase()),
      )
    : actions;

  if (filtered.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center h-48 text-sm text-slate-400">
        {search
          ? "No actions match your search."
          : "No actions yet — create one or run a sync."}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide min-w-[260px]">
                Action
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-32">
                Status
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-28">
                Impact
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-28">
                Effort
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-28">
                Category
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-32">
                Assigned To
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide w-28">
                Due Date
              </th>
              <th className="w-10" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((action) => (
              <tr
                key={action.id}
                className="hover:bg-slate-50/50 group transition-colors"
              >
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-800 leading-snug">
                    {action.title}
                  </p>
                  {action.description && (
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {action.description}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3">
                  <StatusPill
                    status={action.status}
                    interactive
                    onClick={() =>
                      onStatusCycle(action.id, NEXT_STATUS[action.status])
                    }
                  />
                </td>
                <td className="px-4 py-3">
                  <ImpactBadge level={action.impactLevel} />
                </td>
                <td className="px-4 py-3">
                  <EffortBadge level={action.effortLevel} />
                </td>
                <td className="px-4 py-3">
                  <CategoryBadge category={action.category} />
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">
                  {action.assignedTo ?? (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">
                  {action.dueDate ? (
                    new Date(action.dueDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onDelete(action.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-rose-500 p-1 rounded"
                    title="Delete action"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
