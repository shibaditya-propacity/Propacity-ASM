import { CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import {
  usePlatformIntegrations,
  useSyncPlatform,
} from "../../api/use-platform-services";
import { ErrorState } from "@/core/components/error-state";
import { Skeleton } from "@/core/ui";
import type { PlatformIntegration } from "../../types";

function PlatformCard({ integration }: { integration: PlatformIntegration }) {
  const sync = useSyncPlatform(integration.providerId);
  const isConnected = integration.status === "CONNECTED";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
      <img
        src={integration.provider.logoUrl}
        alt={integration.provider.name}
        className="w-10 h-10 rounded-xl object-contain border border-slate-100 shrink-0"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://placehold.co/40x40/f1f5f9/94a3b8?text=" +
            integration.provider.name[0];
        }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900">
          {integration.provider.name}
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          {integration.provider.category}
        </p>
        {integration.accountLabel && (
          <p className="text-[11px] text-slate-500 mt-0.5">
            {integration.accountLabel}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {isConnected ? (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Connected
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <XCircle className="w-3.5 h-3.5" />
            Not connected
          </span>
        )}

        {isConnected && (
          <button
            onClick={() => void sync.mutate()}
            disabled={sync.isPending}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-brand-600 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3 h-3 ${sync.isPending ? "animate-spin" : ""}`}
            />
            Sync
          </button>
        )}
      </div>
    </div>
  );
}

export function PlatformServicesView() {
  const { data, isLoading, isError, error, refetch } =
    usePlatformIntegrations();

  if (isError) {
    return (
      <div className="p-6">
        <ErrorState error={error} onRetry={() => void refetch()} />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="font-heading text-[13px] font-bold text-slate-700 mb-1 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0" />
          Platform Services
        </h2>
        <p className="text-xs text-slate-400 ml-3">
          Propacity-level integrations shared across all client tenants.
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 animate-pulse"
            >
              <Skeleton className="w-10 h-10 rounded-xl" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3.5 w-32 rounded" />
                <Skeleton className="h-2.5 w-20 rounded" />
              </div>
              <Skeleton className="h-7 w-20 rounded-lg" />
            </div>
          ))}
        </div>
      ) : data && data.length > 0 ? (
        <div className="space-y-3">
          {data.map((integration) => (
            <PlatformCard key={integration.id} integration={integration} />
          ))}
        </div>
      ) : (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center text-center gap-2 bg-white/60">
          <p className="text-sm font-semibold text-slate-600">
            No platform integrations yet
          </p>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Platform-level integrations will appear here once configured by an
            admin.
          </p>
        </div>
      )}
    </div>
  );
}
