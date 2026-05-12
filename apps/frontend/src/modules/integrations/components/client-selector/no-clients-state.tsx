import { useState } from "react";
import { Building2, Plus, X } from "lucide-react";
import { useCreateClient } from "../../api/use-create-client";

export function NoClientsState() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const createClient = useCreateClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createClient.mutateAsync({ name, industry: industry || undefined });
    setShowForm(false);
    setName("");
    setIndustry("");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-12">
      <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mb-6">
        <Building2 className="w-10 h-10 text-slate-300" />
      </div>
      <h2 className="font-heading text-xl font-bold text-slate-900 mb-2">
        No clients added yet
      </h2>
      <p className="text-sm text-slate-500 text-center max-w-sm mb-8 leading-relaxed">
        Add your first client (developer brand) to start managing their
        integrations.
      </p>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 w-full max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-sm font-bold text-slate-900">
              Add Client
            </h3>
            <button
              onClick={() => setShowForm(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <form onSubmit={(e) => void handleSubmit(e)} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Client name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Lodha Group"
                required
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Industry{" "}
                <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Real Estate"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
            </div>
            {createClient.isError && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {createClient.error instanceof Error
                  ? createClient.error.message
                  : "Failed to create client"}
              </p>
            )}
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={createClient.isPending || !name}
                className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {createClient.isPending ? "Adding…" : "Add Client"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
