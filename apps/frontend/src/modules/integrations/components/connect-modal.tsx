import { useState } from "react";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import type { ProviderWithStatus } from "../types";
import { useConnectApiKey } from "../api/use-connect";
import { useOAuthPopup } from "../api/use-oauth-popup";
import { toast } from "@/core/ui/toast";

interface ConnectModalProps {
  clientId: string;
  provider: ProviderWithStatus;
  onClose: () => void;
}

// ── API-key form ──────────────────────────────────────────────────────────────

function ApiKeyForm({ clientId, provider, onClose }: ConnectModalProps) {
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
  );
}

// ── OAuth form ────────────────────────────────────────────────────────────────

type OAuthStep = "idle" | "waiting" | "success" | "error";

function OAuthForm({ clientId, provider, onClose }: ConnectModalProps) {
  const [step, setStep] = useState<OAuthStep>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isGoogle = provider.name.startsWith("Google");
  const isMeta = provider.name === "Meta Ads";

  const { open } = useOAuthPopup({
    clientId,
    providerId: provider.id,
    onSuccess: (providerName) => {
      setStep("success");
      toast.success(`${providerName || provider.name} connected successfully.`);
      setTimeout(onClose, 1800);
    },
    onError: (msg) => {
      setErrorMsg(msg);
      setStep("error");
      toast.error(msg);
    },
  });

  async function handleAuthorize() {
    setStep("waiting");
    setErrorMsg("");
    await open();
  }

  const scopeSummary = isGoogle
    ? getGoogleScopeSummary(provider.name)
    : isMeta
      ? [
          "Read your ad campaigns, ad sets, and ads",
          "Access campaign performance metrics",
          "View your business accounts",
        ]
      : ["Access your account data"];

  return (
    <div className="p-6 space-y-5">
      <p className="text-sm text-slate-500">{provider.description}</p>

      {/* Permissions preview */}
      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
          This integration will
        </p>
        {scopeSummary.map((line) => (
          <div
            key={line}
            className="flex items-start gap-2 text-xs text-slate-600"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            {line}
          </div>
        ))}
        <p className="text-[11px] text-slate-400 pt-1">
          Read-only access. We never post or modify data on your behalf.
        </p>
      </div>

      {step === "success" && (
        <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-50 border border-emerald-100 rounded-xl text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          Connected successfully!
        </div>
      )}

      {step === "error" && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {errorMsg || "Authorization failed. Please try again."}
        </p>
      )}

      {step !== "success" && (
        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => void handleAuthorize()}
            disabled={step === "waiting"}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {step === "waiting" ? (
              "Waiting for authorization…"
            ) : (
              <>
                <ExternalLink className="w-3.5 h-3.5" />
                Authorize with {isGoogle ? "Google" : isMeta ? "Meta" : "OAuth"}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function getGoogleScopeSummary(providerName: string): string[] {
  if (providerName === "Google Search Console") {
    return [
      "Read your verified sites in Search Console",
      "Access impressions, clicks, CTR, and average position",
      "View page-level search performance data",
    ];
  }
  if (providerName === "Google Analytics 4") {
    return [
      "Read your GA4 properties and accounts",
      "Access sessions, users, and bounce rate data",
      "View channel attribution and conversion reports",
    ];
  }
  if (providerName === "Google Ads") {
    return [
      "Read your Google Ads campaigns and ad groups",
      "Access spend, impressions, clicks, and Quality Score",
      "View keyword performance and Impression Share",
    ];
  }
  return ["Read account data from Google"];
}

// ── Modal shell ───────────────────────────────────────────────────────────────

export function ConnectModal({
  clientId,
  provider,
  onClose,
}: ConnectModalProps) {
  const isOAuth = provider.authType === "OAUTH2";

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

        {/* Body — branch on auth type */}
        {isOAuth ? (
          <OAuthForm
            clientId={clientId}
            provider={provider}
            onClose={onClose}
          />
        ) : (
          <ApiKeyForm
            clientId={clientId}
            provider={provider}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
