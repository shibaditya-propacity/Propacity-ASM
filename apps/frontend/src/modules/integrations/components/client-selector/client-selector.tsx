import { useState } from "react";
import { Search, Plus } from "lucide-react";
import type { Client } from "../../types";
import { ClientCard } from "./client-card";
import { useCreateClient } from "../../api/use-create-client";

interface ClientSelectorProps {
  clients: Client[];
  onSelect: (client: Client) => void;
}

export function ClientSelector({ clients, onSelect }: ClientSelectorProps) {
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newIndustry, setNewIndustry] = useState("");
  const createClient = useCreateClient();

  const filtered = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const created = await createClient.mutateAsync({
      name: newName,
      industry: newIndustry || undefined,
    });
    setShowAddForm(false);
    setNewName("");
    setNewIndustry("");
    onSelect(created);
  }

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-lg font-bold text-slate-900">
            Select a Client
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Choose a client to view and manage their integrations
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Client
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search clients…"
          className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 bg-white"
        />
      </div>

      {/* Add form (inline) */}
      {showAddForm && (
        <div className="bg-white rounded-2xl border border-brand-200 shadow-sm p-5 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">New Client</h3>
          <form onSubmit={(e) => void handleAdd(e)} className="space-y-3">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Client name *"
              required
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
            <input
              type="text"
              value={newIndustry}
              onChange={(e) => setNewIndustry(e.target.value)}
              placeholder="Industry (optional)"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={createClient.isPending || !newName}
                className="flex-1 px-3 py-2 text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50"
              >
                {createClient.isPending ? "Adding…" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center">
          <p className="text-sm font-semibold text-slate-600">
            No clients match your search
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((client) => (
            <ClientCard key={client.id} client={client} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}
