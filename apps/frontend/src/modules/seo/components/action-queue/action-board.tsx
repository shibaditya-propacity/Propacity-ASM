import { useState } from "react";
import type { SeoAction, ActionStatus } from "../../types";
import {
  StatusPill,
  ImpactBadge,
  EffortBadge,
  NEXT_STATUS,
} from "./action-badges";

const COLUMNS: { status: ActionStatus; label: string; color: string }[] = [
  {
    status: "PENDING",
    label: "Pending",
    color: "bg-slate-100 border-slate-200",
  },
  {
    status: "IN_PROGRESS",
    label: "In Progress",
    color: "bg-blue-50 border-blue-200",
  },
  {
    status: "COMPLETED",
    label: "Completed",
    color: "bg-emerald-50 border-emerald-200",
  },
];

interface ActionBoardProps {
  actions: SeoAction[];
  search: string;
  onStatusChange: (actionId: string, next: ActionStatus) => void;
  onDelete: (actionId: string) => void;
}

export function ActionBoard({
  actions,
  search,
  onStatusChange,
  onDelete,
}: ActionBoardProps) {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overColumn, setOverColumn] = useState<ActionStatus | null>(null);

  const filtered = search
    ? actions.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase()),
      )
    : actions;

  function handleDragStart(e: React.DragEvent, actionId: string) {
    setDraggingId(actionId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", actionId);
  }

  function handleDragOver(e: React.DragEvent, status: ActionStatus) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverColumn(status);
  }

  function handleDrop(e: React.DragEvent, status: ActionStatus) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (id) {
      const action = actions.find((a) => a.id === id);
      if (action && action.status !== status) {
        onStatusChange(id, status);
      }
    }
    setDraggingId(null);
    setOverColumn(null);
  }

  function handleDragEnd() {
    setDraggingId(null);
    setOverColumn(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {COLUMNS.map(({ status, label, color }) => {
        const colActions = filtered.filter((a) => a.status === status);
        const isOver = overColumn === status;

        return (
          <div
            key={status}
            onDragOver={(e) => handleDragOver(e, status)}
            onDrop={(e) => handleDrop(e, status)}
            onDragLeave={() => setOverColumn(null)}
            className={`rounded-2xl border-2 p-4 min-h-[320px] transition-colors ${color} ${isOver ? "ring-2 ring-brand-400 ring-offset-1" : ""}`}
          >
            {/* Column header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-700">{label}</h3>
              <span className="text-xs font-bold text-slate-400 bg-white/70 px-2 py-0.5 rounded-full border border-slate-200">
                {colActions.length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-2.5">
              {colActions.map((action) => (
                <div
                  key={action.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, action.id)}
                  onDragEnd={handleDragEnd}
                  className={`bg-white rounded-xl border border-slate-200 shadow-sm p-3.5 cursor-grab active:cursor-grabbing transition-all group ${draggingId === action.id ? "opacity-40 scale-95" : "hover:shadow-md"}`}
                >
                  <p className="text-sm font-medium text-slate-800 leading-snug mb-2">
                    {action.title}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <ImpactBadge level={action.impactLevel} />
                    <EffortBadge level={action.effortLevel} />
                  </div>
                  <div className="flex items-center justify-between">
                    <StatusPill
                      status={action.status}
                      interactive
                      onClick={() =>
                        onStatusChange(action.id, NEXT_STATUS[action.status])
                      }
                    />
                    <button
                      onClick={() => onDelete(action.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-rose-500 p-1 rounded"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}

              {colActions.length === 0 && (
                <div
                  className={`rounded-xl border-2 border-dashed p-6 text-center text-xs text-slate-400 transition-colors ${isOver ? "border-brand-400 bg-brand-50/30" : "border-slate-200"}`}
                >
                  {isOver ? "Drop here" : "No actions"}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
