import { RefreshCw } from "lucide-react";

interface SyncPromptProps {
  onSync: () => void;
  isSyncing: boolean;
}

export function SyncPrompt({ onSync, isSyncing }: SyncPromptProps) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-10">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col items-center gap-5 text-center">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center">
          <RefreshCw className="w-6 h-6 text-brand-500" />
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-bold text-slate-900">
            Ready to pull your SEO data
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Your integrations are connected. Run your first sync to load SEO
            data from Google Search Console and Google Analytics 4.
          </p>
        </div>
        <button
          onClick={onSync}
          disabled={isSyncing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white text-sm font-semibold transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncing ? "animate-spin" : ""}`} />
          {isSyncing ? "Syncing…" : "Sync Now"}
        </button>
      </div>
    </div>
  );
}
