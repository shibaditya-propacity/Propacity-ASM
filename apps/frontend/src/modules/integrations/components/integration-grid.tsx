import { useState } from "react";
import type { ProviderWithStatus } from "../types";
import { IntegrationCard } from "./integration-card";
import { ConnectModal } from "./connect-modal";
import { IntegrationDetailDrawer } from "./integration-detail-drawer";
import { CategoryTabs } from "./category-tabs";

interface IntegrationGridProps {
  clientId: string;
  providers: ProviderWithStatus[];
}

export function IntegrationGrid({ clientId, providers }: IntegrationGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [connectingId, setConnectingId] = useState<string | null>(null);
  const [viewingId, setViewingId] = useState<string | null>(null);

  // Always resolve from live `providers` so mutations (account-label save,
  // sync, disconnect) reflect immediately without stale closure state.
  const connectingProvider = connectingId
    ? (providers.find((p) => p.id === connectingId) ?? null)
    : null;
  const viewingProvider = viewingId
    ? (providers.find((p) => p.id === viewingId) ?? null)
    : null;

  const categories = [...new Set(providers.map((p) => p.category))].sort();

  const filtered =
    activeCategory === "All"
      ? providers
      : providers.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-4">
      <CategoryTabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {filtered.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center text-center gap-2 bg-white/60">
          <p className="text-sm font-semibold text-slate-600">
            No providers in this category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((provider) => (
            <IntegrationCard
              key={provider.id}
              clientId={clientId}
              provider={provider}
              onConnect={(p) => setConnectingId(p.id)}
              onView={(p) => setViewingId(p.id)}
            />
          ))}
        </div>
      )}

      {connectingProvider && (
        <ConnectModal
          clientId={clientId}
          provider={connectingProvider}
          onClose={() => setConnectingId(null)}
        />
      )}

      {viewingProvider?.integration && (
        <IntegrationDetailDrawer
          clientId={clientId}
          provider={viewingProvider}
          onClose={() => setViewingId(null)}
        />
      )}
    </div>
  );
}
