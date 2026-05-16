import { X, CheckCircle2, AlertCircle, RefreshCw, Clock } from "lucide-react";
import type { ProviderWithStatus, SyncLog } from "../types";
import { useSyncLogs } from "../api/use-sync-logs";

interface IntegrationDetailDrawerProps {
  clientId: string;
  provider: ProviderWithStatus;
  onClose: () => void;
}

const SYNC_STATUS_CONFIG = {
  SUCCESS: { label: "Success", classes: "text-emerald-600 bg-emerald-50" },
  FAILED: { label: "Failed", classes: "text-red-600 bg-red-50" },
  IN_PROGRESS: { label: "In progress", classes: "text-amber-600 bg-amber-50" },
};

function SyncLogRow({ log }: { log: SyncLog }) {
  const config =
    SYNC_STATUS_CONFIG[log.status] ?? SYNC_STATUS_CONFIG.IN_PROGRESS;
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-2">
        {log.status === "SUCCESS" ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
        ) : log.status === "FAILED" ? (
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
        ) : (
          <RefreshCw className="w-4 h-4 text-amber-500 animate-spin shrink-0" />
        )}
        <div>
          <p className="text-xs font-medium text-slate-700">
            {new Date(log.triggeredAt).toLocaleString()}
          </p>
          {log.errorMessage && (
            <p className="text-[11px] text-red-500 mt-0.5">
              {log.errorMessage}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {log.recordsSynced != null && (
          <span className="text-[11px] text-slate-400">
            {log.recordsSynced} records
          </span>
        )}
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${config.classes}`}
        >
          {config.label}
        </span>
      </div>
    </div>
  );
}

export function IntegrationDetailDrawer({
  clientId,
  provider,
  onClose,
}: IntegrationDetailDrawerProps) {
  const integration = provider.integration;
  const { data: logs, isLoading } = useSyncLogs(clientId, provider.id);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src={provider.logoUrl}
              alt={provider.name}
              className="w-9 h-9 rounded-xl object-contain border border-slate-100"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/36x36/f1f5f9/94a3b8?text=" +
                  provider.name[0];
              }}
            />
            <div>
              <h2 className="font-heading text-sm font-bold text-slate-900">
                {provider.name}
              </h2>
              <p className="text-[11px] text-slate-400">{provider.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Integration details */}
          <section>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Integration details
            </h3>
            <div className="bg-slate-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Status</span>
                <span className="font-semibold text-emerald-600">
                  {integration?.status ?? "—"}
                </span>
              </div>
              {integration?.accountLabel && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Account</span>
                  <span className="font-medium text-slate-800">
                    {integration.accountLabel}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Connected since</span>
                <span className="font-medium text-slate-800">
                  {integration?.createdAt
                    ? new Date(integration.createdAt).toLocaleDateString()
                    : "—"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Last synced</span>
                <span className="font-medium text-slate-800 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {integration?.lastSyncAt
                    ? new Date(integration.lastSyncAt).toLocaleString()
                    : "Never"}
                </span>
              </div>
            </div>
          </section>

          {/* Module relevance */}
          <section>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Used by modules
            </h3>
            <div className="flex gap-1.5 flex-wrap">
              {provider.moduleRelevance.map((mod) => (
                <span
                  key={mod}
                  className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full"
                >
                  {mod}
                </span>
              ))}
            </div>
          </section>

          {/* Sync logs */}
          <section>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Sync history
            </h3>
            {isLoading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-slate-100 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            ) : logs && logs.length > 0 ? (
              <div className="bg-slate-50 rounded-xl px-4">
                {logs.map((log) => (
                  <SyncLogRow key={log.id} log={log} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 text-center py-6">
                No sync history yet
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
