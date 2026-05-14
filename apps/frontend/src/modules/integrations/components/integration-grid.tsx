import { useState } from "react";
import type { ProviderWithStatus } from "../types";
import { IntegrationCard } from "./integration-card";
import { ConnectModal } from "./connect-modal";
import { IntegrationDetailDrawer } from "./integration-detail-drawer";
import { CategoryTabs } from "./category-tabs";

// Providers shown in the "Priority Integrations" section at the top.
// Order determines card order within the section.
const PRIORITY_PROVIDER_NAMES = [
  "Google Analytics 4",
  "Google Search Console",
  "Google Ads",
  "Meta Ads",
];

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

  // Priority providers, preserving the defined order
  const prioritySet = new Set(PRIORITY_PROVIDER_NAMES);
  const priorityProviders = PRIORITY_PROVIDER_NAMES.flatMap((name) =>
    filtered.filter((p) => p.name === name),
  );
  const remainingProviders = filtered.filter((p) => !prioritySet.has(p.name));

  function renderCards(list: ProviderWithStatus[]) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list.map((provider) => (
          <IntegrationCard
            key={provider.id}
            clientId={clientId}
            provider={provider}
            onConnect={(p) => setConnectingId(p.id)}
            onView={(p) => setViewingId(p.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
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
        <div className="space-y-6">
          {priorityProviders.length > 0 && (
            <section>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                Priority Integrations
              </p>
              {renderCards(priorityProviders)}
            </section>
          )}

          {remainingProviders.length > 0 && (
            <section>
              {priorityProviders.length > 0 && (
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  All Integrations
                </p>
              )}
              {renderCards(remainingProviders)}
            </section>
          )}
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
