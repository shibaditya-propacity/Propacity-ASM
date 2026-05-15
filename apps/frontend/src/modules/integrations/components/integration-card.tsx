import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  Unplug,
  Info,
} from "lucide-react";
import type { ProviderWithStatus } from "../types";
import { useDisconnect } from "../api/use-disconnect";
import { useSync } from "../api/use-sync";
import { IntegrationGuideModal } from "./integration-guide-modal";
import { INTEGRATION_GUIDES } from "./integration-guides";
import { PROVIDER_DATA_POINTS } from "../provider-data-points";

interface IntegrationCardProps {
  clientId: string;
  provider: ProviderWithStatus;
  onConnect: (provider: ProviderWithStatus) => void;
  onView?: (provider: ProviderWithStatus) => void;
}

const STATUS_CONFIG = {
  CONNECTED: {
    icon: CheckCircle2,
    label: "Connected",
    classes: "text-emerald-600 bg-emerald-50",
  },
  NOT_CONNECTED: {
    icon: XCircle,
    label: "Not connected",
    classes: "text-slate-400 bg-slate-50",
  },
  ERROR: {
    icon: AlertCircle,
    label: "Error",
    classes: "text-red-600 bg-red-50",
  },
  EXPIRED: {
    icon: AlertCircle,
    label: "Expired",
    classes: "text-amber-600 bg-amber-50",
  },
};

export function IntegrationCard({
  clientId,
  provider,
  onConnect,
  onView,
}: IntegrationCardProps) {
  const status = provider.integration?.status ?? "NOT_CONNECTED";
  const config =
    STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ??
    STATUS_CONFIG.NOT_CONNECTED;
  const StatusIcon = config.icon;
  const isConnected = status === "CONNECTED";

  const [showGuide, setShowGuide] = useState(false);
  const disconnect = useDisconnect(clientId, provider.id);
  const sync = useSync(clientId, provider.id);
  const brandColor = INTEGRATION_GUIDES[provider.name]?.brandColor;
  const dataPoints = PROVIDER_DATA_POINTS[provider.name] ?? [];

  return (
    <>
      <div
        className={`bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow overflow-hidden ${isConnected && onView ? "cursor-pointer" : ""}`}
        onClick={isConnected && onView ? () => onView(provider) : undefined}
      >
        {/* Brand color top bar */}
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: brandColor ?? "#e2e8f0" }}
        />

        <div className="p-5 flex flex-col gap-4 flex-1">
          {/* Header */}
          <div className="flex items-start gap-3">
            <img
              src={provider.logoUrl}
              alt={provider.name}
              className="w-10 h-10 rounded-xl object-contain border border-slate-100 shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/40x40/f1f5f9/94a3b8?text=" +
                  provider.name[0];
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {provider.name}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowGuide(true);
                  }}
                  aria-label={`How to connect ${provider.name}`}
                  className="shrink-0 transition-colors hover:opacity-80"
                  style={
                    brandColor ? { color: brandColor } : { color: "#cbd5e1" }
                  }
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {provider.category}
              </p>
            </div>
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold shrink-0 ${config.classes}`}
            >
              <StatusIcon className="w-3 h-3" />
              {config.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
            {provider.description}
          </p>

          {/* Data points tracked */}
          {dataPoints.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Tracks
              </p>
              <div className="flex gap-1 flex-wrap">
                {dataPoints.slice(0, 4).map((point) => (
                  <span
                    key={point}
                    className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-medium rounded border border-indigo-100"
                  >
                    {point}
                  </span>
                ))}
                {dataPoints.length > 4 && (
                  <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-400 text-[10px] rounded border border-indigo-100">
                    +{dataPoints.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Module tags */}
          <div className="flex gap-1 flex-wrap">
            {provider.moduleRelevance.slice(0, 3).map((mod) => (
              <span
                key={mod}
                className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded"
              >
                {mod}
              </span>
            ))}
            {provider.moduleRelevance.length > 3 && (
              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-400 text-[10px] rounded">
                +{provider.moduleRelevance.length - 3}
              </span>
            )}
          </div>

          {/* Last sync */}
          {provider.integration?.lastSyncAt && (
            <p className="text-[10px] text-slate-400">
              Last synced{" "}
              {new Date(provider.integration.lastSyncAt).toLocaleDateString()}
            </p>
          )}

          {/* Actions */}
          <div
            className="flex gap-2 pt-1 border-t border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {isConnected ? (
              <>
                <button
                  onClick={() => void sync.mutate()}
                  disabled={sync.isPending}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-600 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors disabled:opacity-50"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${sync.isPending ? "animate-spin" : ""}`}
                  />
                  Sync
                </button>
                <button
                  onClick={() => void disconnect.mutate()}
                  disabled={disconnect.isPending}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  <Unplug className="w-3.5 h-3.5" />
                  Disconnect
                </button>
              </>
            ) : (
              <button
                onClick={() => onConnect(provider)}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </div>

      {showGuide && (
        <IntegrationGuideModal
          provider={provider}
          onClose={() => setShowGuide(false)}
        />
      )}
    </>
  );
}
