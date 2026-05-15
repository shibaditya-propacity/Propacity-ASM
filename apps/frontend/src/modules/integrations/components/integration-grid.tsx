import { useState } from "react";
import type { ProviderWithStatus } from "../types";
import { IntegrationCard } from "./integration-card";
import { ConnectModal } from "./connect-modal";
import { CategoryTabs } from "./category-tabs";
import { IntegrationDetailDrawer } from "./integration-detail-drawer";

interface IntegrationGridProps {
  clientId: string;
  providers: ProviderWithStatus[];
}

export function IntegrationGrid({ clientId, providers }: IntegrationGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [connecting, setConnecting] = useState<ProviderWithStatus | null>(null);
  const [detailProvider, setDetailProvider] =
    useState<ProviderWithStatus | null>(null);

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
              onConnect={setConnecting}
              onDetails={setDetailProvider}
            />
          ))}
        </div>
      )}

      {connecting && (
        <ConnectModal
          clientId={clientId}
          provider={connecting}
          onClose={() => setConnecting(null)}
        />
      )}

      {detailProvider && (
        <IntegrationDetailDrawer
          clientId={clientId}
          provider={detailProvider}
          onClose={() => setDetailProvider(null)}
        />
      )}
    </div>
  );
}
