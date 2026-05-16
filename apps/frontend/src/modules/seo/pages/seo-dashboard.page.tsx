import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { Skeleton } from "@/core/ui/skeleton";
import { useSeoClients } from "../api/use-seo-clients";
import { useSeoDashboard } from "../api/use-seo-dashboard";
import { useSeoSync } from "../api/use-seo-sync";
import { useSeoStore } from "../store";
import { SeoHeader } from "../components/seo-header";
import { ConnectBanner } from "../components/connect-banner";
import { StatsBar } from "../components/stats-bar";
import { OrganicTrafficChart } from "../components/organic-traffic-chart";
import { RankTrackingChart } from "../components/rank-tracking-chart";
import { TopMovers } from "../components/top-movers";
import { WhatComesNext } from "../components/what-comes-next";
import type { SeoClient } from "../api/use-seo-clients";

// ── Client selector (shown when no client is picked) ──────────────────────────

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
        Select a client to view their SEO dashboard.
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

// ── Dashboard skeleton ─────────────────────────────────────────────────────────

function DashboardSkeleton() {
  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6 space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28 rounded-2xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-56 rounded-2xl" />
          <Skeleton className="h-56 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

function Dashboard({ clientId }: { clientId: string }) {
  const dashboardQuery = useSeoDashboard(clientId);
  const sync = useSeoSync(clientId);

  if (dashboardQuery.isPending) return <DashboardSkeleton />;

  if (dashboardQuery.isError) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-slate-400">
        Failed to load SEO data.{" "}
        <button
          onClick={() => void dashboardQuery.refetch()}
          className="ml-1 text-brand-500 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  const { data } = dashboardQuery;

  // GA4 not connected — hard block
  if (!data.integrationStatus.ga4Connected) {
    return (
      <ConnectBanner
        gscConnected={data.integrationStatus.gscConnected}
        ga4Connected={data.integrationStatus.ga4Connected}
      />
    );
  }

  const hasData = !!data.snapshot;
  const sessions =
    hasData && Array.isArray(data.snapshot!.organicSessions)
      ? (data.snapshot!.organicSessions as {
          month: string;
          sessions: number;
        }[])
      : [];

  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6 space-y-4">
      {/* First-sync banner — shown until data arrives */}
      {!hasData && !sync.isPending && (
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4 text-brand-500" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                No data yet — run your first sync
              </p>
              <p className="text-xs text-slate-400 truncate">
                Pulls organic traffic, keyword positions, and recommended
                actions from Google.
              </p>
            </div>
          </div>
          <button
            onClick={() => sync.mutate()}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Sync Now
          </button>
        </div>
      )}

      {/* Syncing in-progress banner */}
      {sync.isPending && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-brand-700 font-medium flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0" />
          Syncing data from Google…
        </div>
      )}

      {/* GSC missing — soft warning */}
      {!data.integrationStatus.gscConnected && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-amber-700 flex items-center gap-2">
          <span className="shrink-0">⚠️</span>
          <span>
            <strong>Google Search Console not connected</strong> — keyword
            rankings won't populate.{" "}
            <button
              onClick={() => {
                window.location.href = "/integrations";
              }}
              className="underline font-semibold hover:text-amber-900 transition-colors"
            >
              Connect in Integrations
            </button>
          </span>
        </div>
      )}

      {/* Stats bar — shows zeros until first sync */}
      <StatsBar dashboard={data} />

      {/* Charts + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <OrganicTrafficChart sessions={sessions} />
          <RankTrackingChart keywords={data.keywords} />
        </div>
        <div className="space-y-4">
          <TopMovers movers={data.topMovers} />
          <WhatComesNext actions={data.actions} />
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SeoDashboardPage() {
  const { data: clients, isLoading } = useSeoClients();
  const { selectedClientId, setSelectedClientId } = useSeoStore();
  const sync = useSeoSync(selectedClientId ?? "");

  const selectedClient =
    clients?.find((c) => c.id === selectedClientId) ?? null;

  function handleSelectClient(c: SeoClient) {
    setSelectedClientId(c.id);
  }

  function handleBack() {
    setSelectedClientId(null);
  }

  function handleSwitchClient(c: SeoClient) {
    setSelectedClientId(c.id);
  }

  // ── Loading ────────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="SEO" subtitle="Search performance dashboard" />
        <DashboardSkeleton />
      </div>
    );
  }

  // ── No clients ─────────────────────────────────────────────────────────────
  if (!clients?.length) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="SEO" subtitle="Search performance dashboard" />
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

  // ── No client selected ─────────────────────────────────────────────────────
  if (!selectedClient) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="SEO"
          subtitle="Select a client to view their SEO dashboard"
        />
        <ClientPicker clients={clients} onSelect={handleSelectClient} />
      </div>
    );
  }

  // ── Client selected ────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <SeoHeader
        currentClient={selectedClient}
        allClients={clients}
        lastSyncAt={null}
        isSyncing={sync.isPending}
        onBack={handleBack}
        onSwitchClient={handleSwitchClient}
        onSync={() => sync.mutate()}
      />
      <Dashboard clientId={selectedClient.id} />
    </div>
  );
}
