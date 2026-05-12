import { useState } from "react";
import { X } from "lucide-react";
import type { ProviderWithStatus } from "../types";
import { useConnectApiKey } from "../api/use-connect";

interface ConnectModalProps {
  clientId: string;
  provider: ProviderWithStatus;
  onClose: () => void;
}

export function ConnectModal({
  clientId,
  provider,
  onClose,
}: ConnectModalProps) {
  const [apiKey, setApiKey] = useState("");
  const [accountLabel, setAccountLabel] = useState("");
  const connect = useConnectApiKey(clientId, provider.id);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await connect.mutateAsync({
      apiKey,
      accountLabel: accountLabel || undefined,
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src={provider.logoUrl}
              alt={provider.name}
              className="w-8 h-8 rounded-lg object-contain border border-slate-100"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/32x32/f1f5f9/94a3b8?text=" +
                  provider.name[0];
              }}
            />
            <h2 className="font-heading text-base font-bold text-slate-900">
              Connect {provider.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={(e) => void handleSubmit(e)} className="p-6 space-y-4">
          <p className="text-sm text-slate-500">{provider.description}</p>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              API Key <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-…"
              required
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Account label{" "}
              <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <input
              type="text"
              value={accountLabel}
              onChange={(e) => setAccountLabel(e.target.value)}
              placeholder="e.g. Production account"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
          </div>

          {connect.isError && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {connect.error instanceof Error
                ? connect.error.message
                : "Connection failed"}
            </p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={connect.isPending || !apiKey}
              className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {connect.isPending ? "Connecting…" : "Connect"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
