import { useState } from "react";
import { ArrowLeft, ChevronDown, Building2, RefreshCw } from "lucide-react";
import type { SocialClient } from "../api/use-social-clients";

interface SocialHeaderProps {
  currentClient: SocialClient;
  allClients: SocialClient[];
  lastSyncAt: string | null;
  isSyncing: boolean;
  onBack: () => void;
  onSwitchClient: (client: SocialClient) => void;
  onSync: () => void;
}

export function SocialHeader({
  currentClient,
  allClients,
  lastSyncAt,
  isSyncing,
  onBack,
  onSwitchClient,
  onSync,
}: SocialHeaderProps) {
  const [open, setOpen] = useState(false);

  const initials = currentClient.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const syncLabel = lastSyncAt
    ? `Last synced ${new Date(lastSyncAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })}`
    : "Never synced";

  return (
    <div className="bg-white border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-6 py-3 flex items-center gap-4">
      <button
        onClick={onBack}
        className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-lg hover:bg-slate-100"
        aria-label="Back to client list"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span>Social Media</span>
        <span>/</span>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          {currentClient.avatarUrl ? (
            <img
              src={currentClient.avatarUrl}
              alt={currentClient.name}
              className="w-6 h-6 rounded-md object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-[10px]">
              {initials || <Building2 className="w-3 h-3" />}
            </div>
          )}
          <span className="text-sm font-semibold text-slate-900">
            {currentClient.name}
          </span>
          {currentClient.industry && (
            <span className="text-[11px] text-slate-400">
              {currentClient.industry}
            </span>
          )}
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-full left-0 mt-1.5 z-40 bg-white rounded-xl border border-slate-200 shadow-xl min-w-[220px] py-1">
              <p className="px-3 pt-1.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Switch Client
              </p>
              {allClients.map((c) => {
                const ci = c.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2);
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSwitchClient(c);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-slate-50 transition-colors ${
                      c.id === currentClient.id
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700"
                    }`}
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                      {ci}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="font-medium truncate">{c.name}</p>
                      {c.industry && (
                        <p className="text-[10px] text-slate-400 truncate">
                          {c.industry}
                        </p>
                      )}
                    </div>
                    {c.id === currentClient.id && (
                      <span className="text-[10px] font-semibold text-brand-500">
                        Current
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="flex-1" />

      <p className="text-xs text-slate-400 hidden sm:block">{syncLabel}</p>

      <button
        onClick={onSync}
        disabled={isSyncing}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-60 transition-colors text-sm font-medium text-slate-700"
      >
        <RefreshCw
          className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`}
        />
        {isSyncing ? "Syncing…" : "Sync All"}
      </button>
    </div>
  );
}
