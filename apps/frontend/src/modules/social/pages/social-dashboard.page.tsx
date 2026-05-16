import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { Skeleton } from "@/core/ui/skeleton";
import { useSocialClients } from "../api/use-social-clients";
import { useSocialDashboard } from "../api/use-social-dashboard";
import {
  useSocialSyncAll,
  useSocialSyncPlatform,
} from "../api/use-social-sync";
import { useAllPlatformSnapshots } from "../api/use-all-platform-snapshots";
import { useSocialStore } from "../store";
import { SocialHeader } from "../components/social-header";
import { BrandHandleSetup } from "../components/setup/brand-handle-setup";
import { SocialStatsBar } from "../components/dashboard/social-stats-bar";
import { PlatformCard } from "../components/dashboard/platform-card";
import { EngagementChart } from "../components/dashboard/engagement-chart";
import { FollowerGrowthChart } from "../components/dashboard/follower-growth-chart";
import { TopPostsGrid } from "../components/dashboard/top-posts-grid";
import { CrossPlatformSummary } from "../components/dashboard/cross-platform-summary";
import { SOCIAL_PLATFORMS } from "../types";
import type { SocialClient } from "../api/use-social-clients";
import type { SocialPlatform } from "../types";

// ── Client picker ─────────────────────────────────────────────────────────────

function ClientPicker({
  clients,
  onSelect,
}: {
  clients: SocialClient[];
  onSelect: (c: SocialClient) => void;
}) {
  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6">
      <p className="text-sm text-slate-500 mb-4">
        Select a client to view their social media dashboard.
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-2xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

function Dashboard({
  clientId,
  brandName,
}: {
  clientId: string;
  brandName: string;
}) {
  const dashboardQuery = useSocialDashboard(clientId);
  const syncAll = useSocialSyncAll(clientId);
  const syncPlatform = useSocialSyncPlatform(clientId);

  // Fetch snapshot history for all profiles (whether connected or not)
  const allProfilePlatforms = (dashboardQuery.data?.profiles ?? []).map(
    (p) => p.platform as SocialPlatform,
  );

  const snapshotsByPlatform = useAllPlatformSnapshots(
    clientId,
    allProfilePlatforms,
  );

  if (dashboardQuery.isPending) return <DashboardSkeleton />;

  if (dashboardQuery.isError) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-slate-400">
        Failed to load social data.{" "}
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
  const hasAnyProfile = data.profiles.length > 0;
  const hasAnySnapshot = Object.values(data.latestSnapshots).some(Boolean);

  return (
    <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6 space-y-4">
      {/* Syncing banner */}
      {syncAll.isPending && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-brand-700 font-medium flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0" />
          Syncing all platforms…
        </div>
      )}

      {/* First sync CTA */}
      {hasAnyProfile && !hasAnySnapshot && !syncAll.isPending && (
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4 text-brand-500" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                No metrics yet — run your first sync
              </p>
              <p className="text-xs text-slate-400 truncate">
                Fetches followers, engagement rate, reach, and top posts across
                all connected platforms.
              </p>
            </div>
          </div>
          <button
            onClick={() => syncAll.mutate(brandName)}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Sync Now
          </button>
        </div>
      )}

      {/* Stats bar */}
      <SocialStatsBar dashboard={data} />

      {/* Platform cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOCIAL_PLATFORMS.map((platform) => {
          const profile =
            data.profiles.find((p) => p.platform === platform) ?? null;
          const snapshot = data.latestSnapshots[platform] ?? null;
          return (
            <PlatformCard
              key={platform}
              platform={platform}
              profile={profile}
              snapshot={snapshot}
              isSyncing={syncPlatform.isPending}
              onSync={
                profile
                  ? () =>
                      syncPlatform.mutate({
                        platform: platform as SocialPlatform,
                        brandName,
                      })
                  : undefined
              }
            />
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EngagementChart dashboard={data} />
        <CrossPlatformSummary dashboard={data} />
      </div>

      {/* Follower growth chart */}
      <FollowerGrowthChart snapshotsByPlatform={snapshotsByPlatform} />

      {/* Top posts */}
      <TopPostsGrid dashboard={data} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SocialDashboardPage() {
  const { data: clients, isLoading } = useSocialClients();
  const { selectedClientId, setSelectedClientId } = useSocialStore();

  const selectedClient =
    clients?.find((c) => c.id === selectedClientId) ?? null;

  const syncAll = useSocialSyncAll(selectedClientId ?? "");
  const dashboardData = useSocialDashboard(selectedClientId ?? "");
  const [showSetup, setShowSetup] = useState(false);

  // Most recent lastSyncAt across all profiles
  const lastSyncAt =
    dashboardData.data?.profiles.reduce<string | null>((latest, p) => {
      if (!p.lastSyncAt) return latest;
      if (!latest) return p.lastSyncAt;
      return p.lastSyncAt > latest ? p.lastSyncAt : latest;
    }, null) ?? null;

  function handleSelectClient(c: SocialClient) {
    setSelectedClientId(c.id);
    setShowSetup(false);
  }

  function handleBack() {
    setSelectedClientId(null);
    setShowSetup(false);
  }

  function handleSwitchClient(c: SocialClient) {
    setSelectedClientId(c.id);
    setShowSetup(false);
  }

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Social Media"
          subtitle="Cross-platform social performance"
        />
        <DashboardSkeleton />
      </div>
    );
  }

  // ── No clients ───────────────────────────────────────────────────────────────
  if (!clients?.length) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Social Media"
          subtitle="Cross-platform social performance"
        />
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

  // ── No client selected ───────────────────────────────────────────────────────
  if (!selectedClient) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title="Social Media"
          subtitle="Select a client to view their social dashboard"
        />
        <ClientPicker clients={clients} onSelect={handleSelectClient} />
      </div>
    );
  }

  // ── Setup flow ───────────────────────────────────────────────────────────────
  if (showSetup) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <SocialHeader
          currentClient={selectedClient}
          allClients={clients}
          lastSyncAt={lastSyncAt}
          isSyncing={false}
          onBack={handleBack}
          onSwitchClient={handleSwitchClient}
          onSync={() => {}}
        />
        <BrandHandleSetup
          clientId={selectedClient.id}
          onComplete={() => setShowSetup(false)}
        />
      </div>
    );
  }

  // ── Client selected — dashboard ──────────────────────────────────────────────
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <SocialHeader
        currentClient={selectedClient}
        allClients={clients}
        lastSyncAt={lastSyncAt}
        isSyncing={syncAll.isPending}
        onBack={handleBack}
        onSwitchClient={handleSwitchClient}
        onSync={() => syncAll.mutate(selectedClient.name)}
      />
      <DashboardInner
        clientId={selectedClient.id}
        brandName={selectedClient.name}
        onSetup={() => setShowSetup(true)}
      />
    </div>
  );
}

// Separate inner component so hooks aren't called conditionally
function DashboardInner({
  clientId,
  brandName,
  onSetup,
}: {
  clientId: string;
  brandName: string;
  onSetup: () => void;
}) {
  const dashboardQuery = useSocialDashboard(clientId);

  if (dashboardQuery.isPending) return <DashboardSkeleton />;

  if (dashboardQuery.isError) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-slate-400">
        Failed to load social data.{" "}
        <button
          onClick={() => void dashboardQuery.refetch()}
          className="ml-1 text-brand-500 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  const hasAnyProfile = dashboardQuery.data.profiles.length > 0;

  // No profiles configured yet — show setup CTA
  if (!hasAnyProfile) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 bg-[#F4F6FB]">
        <div className="text-center space-y-4 max-w-xs">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto">
            <RefreshCw className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">
              No social profiles yet
            </p>
            <p className="text-xs text-slate-500">
              Set up social media handles for this client to start tracking
              their performance.
            </p>
          </div>
          <button
            onClick={onSetup}
            className="w-full px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
          >
            Set Up Social Media
          </button>
        </div>
      </div>
    );
  }

  return <Dashboard clientId={clientId} brandName={brandName} />;
}
