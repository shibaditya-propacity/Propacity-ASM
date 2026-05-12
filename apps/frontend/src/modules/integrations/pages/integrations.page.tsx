import { useState } from "react";
import { Topbar } from "@/core/layout/topbar";
import { useClients } from "../api/use-clients";
import { useIntegrationsStore } from "../store";
import { NoClientsState } from "../components/client-selector/no-clients-state";
import { ClientSelector } from "../components/client-selector/client-selector";
import { IntegrationsHeader } from "../components/integrations-header";
import { IntegrationsLayout } from "../components/integrations-layout";
import { ThisClientView } from "../components/this-client/this-client-view";
import { AllClientsView } from "../components/all-clients/all-clients-view";
import { PlatformServicesView } from "../components/platform-services/platform-services-view";
import { Skeleton } from "@/core/ui";
import type { Client } from "../types";

type ActiveTab = "this-client" | "all-clients" | "platform";

export default function IntegrationsPage() {
  const { data: clients, isLoading } = useClients();
  const { selectedClientId, setSelectedClientId } = useIntegrationsStore();
  const [activeTab, setActiveTab] = useState<ActiveTab>("this-client");

  // Resolve the current client object from the list
  const selectedClient =
    clients?.find((c) => c.id === selectedClientId) ?? null;

  function handleSelectClient(client: Client) {
    setSelectedClientId(client.id);
    setActiveTab("this-client");
  }

  function handleBack() {
    setSelectedClientId(null);
  }

  function handleSwitchClient(client: Client) {
    setSelectedClientId(client.id);
    setActiveTab("this-client");
  }

  // ── Loading ────────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Integrations"
          subtitle="Manage third-party connections"
        />
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 animate-pulse"
              >
                <Skeleton className="w-12 h-12 rounded-xl" />
                <Skeleton className="h-4 w-3/4 rounded" />
                <Skeleton className="h-3 w-1/2 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── No clients ─────────────────────────────────────────────────────────────
  if (!clients?.length) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Integrations"
          subtitle="Manage third-party connections"
        />
        <NoClientsState />
      </div>
    );
  }

  // ── Clients exist but none selected ────────────────────────────────────────
  if (!selectedClient) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Integrations"
          subtitle="Select a client to manage their integrations"
        />
        <div className="flex-1 overflow-auto bg-[#F4F6FB]">
          <ClientSelector clients={clients} onSelect={handleSelectClient} />
        </div>
      </div>
    );
  }

  // ── Client selected — full integrations UI ─────────────────────────────────
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <IntegrationsHeader
        currentClient={selectedClient}
        allClients={clients}
        onSwitchClient={handleSwitchClient}
        onBack={handleBack}
      />
      <IntegrationsLayout
        activeTab={activeTab}
        onTabChange={(t) => setActiveTab(t as ActiveTab)}
      >
        {activeTab === "this-client" && (
          <ThisClientView clientId={selectedClient.id} />
        )}
        {activeTab === "all-clients" && <AllClientsView />}
        {activeTab === "platform" && <PlatformServicesView />}
      </IntegrationsLayout>
    </div>
  );
}
