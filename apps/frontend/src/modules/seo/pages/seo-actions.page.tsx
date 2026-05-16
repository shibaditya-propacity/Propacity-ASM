import { useState } from "react";
import { List, Columns, Grid3x3, Plus, Search, X } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { Skeleton } from "@/core/ui/skeleton";
import { useSeoClients } from "../api/use-seo-clients";
import { useSeoActions } from "../api/use-seo-actions";
import {
  useCreateAction,
  useUpdateAction,
  useDeleteAction,
} from "../api/use-seo-action-mutations";
import { useSeoStore } from "../store";
import { SeoHeader } from "../components/seo-header";
import { ActionFilters } from "../components/action-queue/action-filters";
import { ActionTable } from "../components/action-queue/action-table";
import { ActionBoard } from "../components/action-queue/action-board";
import { ActionMatrix } from "../components/action-queue/action-matrix";
import type { SeoClient } from "../api/use-seo-clients";
import type {
  ActionsFilters,
  ActionStatus,
  ActionCategory,
  ImpactLevel,
  EffortLevel,
} from "../types";

type ViewMode = "list" | "board" | "matrix";

// ── Client picker ──────────────────────────────────────────────────────────────

function ClientPicker({
  clients,
  onSelect,
}: {
  clients: SeoClient[];
  onSelect: (c: SeoClient) => void;
}) {
  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6">
      <p className="text-sm text-slate-500 mb-4">
        Select a client to manage their action queue.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
        {clients.map((c) => {
          const initials = c.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c)}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:border-brand-400 hover:shadow-md transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 truncate">
                  {c.name}
                </p>
                {c.industry && (
                  <p className="text-xs text-slate-400 truncate">
                    {c.industry}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Create action modal ────────────────────────────────────────────────────────

interface CreateModalProps {
  clientId: string;
  onClose: () => void;
}

function CreateActionModal({ clientId, onClose }: CreateModalProps) {
  const create = useCreateAction(clientId);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "TECHNICAL" as ActionCategory,
    impactLevel: "MEDIUM" as ImpactLevel,
    effortLevel: "MEDIUM" as EffortLevel,
    assignedTo: "",
    dueDate: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) return;
    await create.mutateAsync({
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      category: form.category,
      impactLevel: form.impactLevel,
      effortLevel: form.effortLevel,
      assignedTo: form.assignedTo.trim() || undefined,
      dueDate: form.dueDate || undefined,
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-slate-900">New Action</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              Title *
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Fix missing meta descriptions on product pages"
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={2}
              placeholder="Optional details…"
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 resize-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as ActionCategory,
                  })
                }
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <option value="TECHNICAL">Technical</option>
                <option value="CONTENT">Content</option>
                <option value="SCHEMA">Schema</option>
                <option value="BACKLINKS">Backlinks</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Impact
              </label>
              <select
                value={form.impactLevel}
                onChange={(e) =>
                  setForm({
                    ...form,
                    impactLevel: e.target.value as ImpactLevel,
                  })
                }
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Effort
              </label>
              <select
                value={form.effortLevel}
                onChange={(e) =>
                  setForm({
                    ...form,
                    effortLevel: e.target.value as EffortLevel,
                  })
                }
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <option value="QUICK">Quick</option>
                <option value="MEDIUM">Medium</option>
                <option value="HEAVY">Heavy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Assign To
              </label>
              <input
                type="text"
                value={form.assignedTo}
                onChange={(e) =>
                  setForm({ ...form, assignedTo: e.target.value })
                }
                placeholder="Name or email"
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={create.isPending}
              className="flex-1 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors disabled:opacity-60"
            >
              {create.isPending ? "Creating…" : "Create Action"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Action queue content ───────────────────────────────────────────────────────

function ActionQueueContent({ clientId }: { clientId: string }) {
  const [view, setView] = useState<ViewMode>("list");
  const [filters, setFilters] = useState<ActionsFilters>({});
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const { data, isPending, isError } = useSeoActions(clientId, filters);
  const updateAction = useUpdateAction(clientId);
  const deleteAction = useDeleteAction(clientId);

  function handleStatusCycle(actionId: string, next: ActionStatus) {
    updateAction.mutate({ actionId, input: { status: next } });
  }

  function handleDelete(actionId: string) {
    if (confirm("Delete this action?")) {
      deleteAction.mutate(actionId);
    }
  }

  if (isPending) {
    return (
      <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-14 rounded-xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-slate-400">
        Failed to load actions.
      </div>
    );
  }

  const actions = data?.actions ?? [];
  const counts = data?.counts;

  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] flex flex-col">
      {/* Sub-header: counts + search + view toggle + create */}
      <div className="bg-white border-b border-slate-200/80 px-6 py-3 flex flex-wrap items-center gap-3">
        {/* Counts */}
        {counts && (
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              {counts.total} total
            </span>
            <span className="w-px h-3.5 bg-slate-200" />
            <span>{counts.pending} pending</span>
            <span>{counts.inProgress} in progress</span>
            <span>{counts.completed} completed</span>
          </div>
        )}

        <div className="flex-1" />

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search actions…"
            className="pl-8 pr-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 w-48"
          />
        </div>

        {/* View toggle */}
        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
          {(
            [
              { mode: "list" as const, Icon: List, title: "List" },
              { mode: "board" as const, Icon: Columns, title: "Board" },
              { mode: "matrix" as const, Icon: Grid3x3, title: "Matrix" },
            ] as const
          ).map(({ mode, Icon, title }) => (
            <button
              key={mode}
              onClick={() => setView(mode)}
              title={title}
              className={`p-2 transition-colors ${view === mode ? "bg-brand-500 text-white" : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"}`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Create button */}
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Action
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-100 px-6 py-2.5">
        <ActionFilters filters={filters} onChange={setFilters} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {view === "list" && (
          <ActionTable
            actions={actions}
            search={search}
            onStatusCycle={handleStatusCycle}
            onDelete={handleDelete}
          />
        )}
        {view === "board" && (
          <ActionBoard
            actions={actions}
            search={search}
            onStatusChange={handleStatusCycle}
            onDelete={handleDelete}
          />
        )}
        {view === "matrix" && (
          <ActionMatrix
            actions={actions}
            search={search}
            onStatusCycle={handleStatusCycle}
          />
        )}
      </div>

      {showCreate && (
        <CreateActionModal
          clientId={clientId}
          onClose={() => setShowCreate(false)}
        />
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SeoActionsPage() {
  const { data: clients, isLoading } = useSeoClients();
  const { selectedClientId, setSelectedClientId } = useSeoStore();

  const selectedClient =
    clients?.find((c) => c.id === selectedClientId) ?? null;

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Action Queue" subtitle="SEO action management" />
        <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-12 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!clients?.length) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Action Queue" subtitle="SEO action management" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-slate-700">No clients yet</p>
            <p className="text-xs text-slate-400">
              Add a client in Integrations to get started.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedClient) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Action Queue"
          subtitle="Select a client to manage their SEO actions"
        />
        <ClientPicker
          clients={clients}
          onSelect={(c) => setSelectedClientId(c.id)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <SeoHeader
        currentClient={selectedClient}
        allClients={clients}
        lastSyncAt={null}
        isSyncing={false}
        onBack={() => setSelectedClientId(null)}
        onSwitchClient={(c) => setSelectedClientId(c.id)}
        onSync={() => {}}
      />
      <ActionQueueContent clientId={selectedClient.id} />
    </div>
  );
}
