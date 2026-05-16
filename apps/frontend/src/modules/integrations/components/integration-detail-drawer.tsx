import { useState } from "react";
import {
  X,
  RefreshCw,
  Unplug,
  CheckCircle2,
  AlertCircle,
  Clock,
  Pencil,
  Check,
} from "lucide-react";
import type { ProviderWithStatus, SyncLog } from "../types";
import { useDisconnect } from "../api/use-disconnect";
import { useSync } from "../api/use-sync";
import { useSyncLogs } from "../api/use-sync-logs";
import { useUpdateAccountLabel } from "../api/use-update-account-label";

// ── Typed metadata shapes (mirrors backend sync result interfaces) ─────────────

interface GscMeta {
  impressions: number;
  clicks: number;
  ctr: number;
  avgPosition: number;
  pages: Array<{
    page: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

interface Ga4Meta {
  sessions: number;
  users: number;
  bounceRate: number;
  conversions: number;
  channels: Array<{ channel: string; sessions: number; users: number }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

interface GoogleAdsMeta {
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  avgCpc: number;
  campaigns: Array<{
    name: string;
    status: string;
    spend: number;
    impressions: number;
    clicks: number;
  }>;
  keywords: Array<{
    keyword: string;
    matchType: string;
    qualityScore: number | null;
    impressionShare: number | null;
    impressions: number;
    clicks: number;
  }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

interface MetaAdsMeta {
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  roas: number;
  campaigns: Array<{
    name: string;
    status: string;
    spend: number;
    impressions: number;
    clicks: number;
    conversions: number;
  }>;
  dateRange: { startDate: string; endDate: string };
  recordsSynced: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function pct(n: number) {
  return (n * 100).toFixed(2) + "%";
}
function fmt(n: number) {
  return n.toLocaleString();
}
function currency(n: number) {
  return "₹" + n.toLocaleString();
}

// ── Mini KPI card ─────────────────────────────────────────────────────────────

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-lg font-bold text-slate-900">{value}</p>
    </div>
  );
}

// ── Provider-specific data panels ─────────────────────────────────────────────

function GscPanel({ meta }: { meta: GscMeta }) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        Last 28 days · {meta.dateRange.startDate} → {meta.dateRange.endDate}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Impressions" value={fmt(meta.impressions)} />
        <StatCard label="Clicks" value={fmt(meta.clicks)} />
        <StatCard label="CTR" value={pct(meta.ctr)} />
        <StatCard label="Avg. Position" value={meta.avgPosition.toFixed(1)} />
      </div>

      {meta.pages.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-600 mt-2">Top Pages</p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Page
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Imp.
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Clicks
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    CTR
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Pos.
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.pages.slice(0, 10).map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-2 text-slate-700 max-w-[180px] truncate font-mono text-[11px]">
                      {p.page.replace(/^https?:\/\/[^/]+/, "")}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(p.impressions)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(p.clicks)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {pct(p.ctr)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {p.position.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function Ga4Panel({ meta }: { meta: Ga4Meta }) {
  const allZero =
    meta.sessions === 0 && meta.users === 0 && meta.conversions === 0;

  return (
    <div className="space-y-4">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        Last 28 days
      </p>

      {allZero && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3 flex gap-2 items-start">
          <AlertCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
          <p className="text-[11px] text-amber-700">
            All metrics are zero. This usually means the{" "}
            <strong>Property ID is wrong</strong> — make sure you entered the{" "}
            <strong>numeric</strong> Property ID (e.g. 123456789) from{" "}
            <strong>GA4 Admin → Property Settings</strong>, not the G-...
            Measurement ID. Update it above and run Sync again.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Sessions" value={fmt(meta.sessions)} />
        <StatCard label="Users" value={fmt(meta.users)} />
        <StatCard label="Bounce Rate" value={pct(meta.bounceRate)} />
        <StatCard label="Conversions" value={fmt(meta.conversions)} />
      </div>

      {meta.channels.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-600 mt-2">
            Channel Breakdown
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Channel
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Sessions
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Users
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.channels.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-2 text-slate-700 font-medium">
                      {c.channel}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.sessions)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.users)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function GoogleAdsPanel({ meta }: { meta: GoogleAdsMeta }) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        Last 28 days
      </p>
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Total Spend" value={currency(meta.spend)} />
        <StatCard label="Impressions" value={fmt(meta.impressions)} />
        <StatCard label="Clicks" value={fmt(meta.clicks)} />
        <StatCard label="Avg. CPC" value={currency(Math.round(meta.avgCpc))} />
      </div>

      {meta.campaigns.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-600 mt-2">Campaigns</p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Campaign
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Spend
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Imp.
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Clicks
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.campaigns.slice(0, 10).map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-2 text-slate-700 max-w-[160px] truncate">
                      {c.name}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {currency(c.spend)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.impressions)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.clicks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {meta.keywords.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-600 mt-2">
            Top Keywords
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Keyword
                  </th>
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Match
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    QS
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Imp.
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.keywords.slice(0, 10).map((k, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-2 text-slate-700 font-mono text-[11px] max-w-[140px] truncate">
                      {k.keyword}
                    </td>
                    <td className="px-3 py-2 text-slate-500">{k.matchType}</td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {k.qualityScore ?? "—"}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(k.impressions)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function MetaAdsPanel({ meta }: { meta: MetaAdsMeta }) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        Last 28 days
      </p>
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Total Spend" value={currency(meta.spend)} />
        <StatCard label="Impressions" value={fmt(meta.impressions)} />
        <StatCard label="Clicks" value={fmt(meta.clicks)} />
        <StatCard label="ROAS" value={meta.roas?.toFixed(2) + "x"} />
      </div>

      {meta.campaigns.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-600 mt-2">Campaigns</p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-3 py-2 text-slate-500 font-semibold">
                    Campaign
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Spend
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Imp.
                  </th>
                  <th className="text-right px-3 py-2 text-slate-500 font-semibold">
                    Conv.
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.campaigns.slice(0, 10).map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-2 text-slate-700 max-w-[160px] truncate">
                      {c.name}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {currency(c.spend)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.impressions)}
                    </td>
                    <td className="text-right px-3 py-2 text-slate-600">
                      {fmt(c.conversions)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

// ── Account label hints per provider ─────────────────────────────────────────

const LABEL_HINTS: Record<
  string,
  { label: string; placeholder: string; help: string }
> = {
  "Google Search Console": {
    label: "Verified Site URL",
    placeholder: "https://example.com/ or sc-domain:example.com",
    help: "Find this in Search Console → Property selector. Must match exactly.",
  },
  "Google Analytics 4": {
    label: "GA4 Property ID (numeric only)",
    placeholder: "e.g. 123456789",
    help: "GA4 Admin → Property Settings → Property ID. Must be the numeric ID — NOT the G-... Measurement ID.",
  },
  "Google Ads": {
    label: "Customer ID",
    placeholder: "123-456-7890",
    help: "Find this in Google Ads top-right corner (format: XXX-XXX-XXXX).",
  },
  "Meta Ads": {
    label: "Ad Account ID",
    placeholder: "act_XXXXXXXXXX",
    help: "Find this in Meta Business Manager → Ad Accounts.",
  },
};

// ── Editable account label ────────────────────────────────────────────────────

interface EditableLabelProps {
  clientId: string;
  providerId: string;
  providerName: string;
  current: string | null;
}

function EditableAccountLabel({
  clientId,
  providerId,
  providerName,
  current,
}: EditableLabelProps) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(current ?? "");
  const update = useUpdateAccountLabel(clientId, providerId);
  const hint = LABEL_HINTS[providerName];

  // Keep local draft in sync when the saved value changes (after mutation + refetch)
  // but only when not actively editing
  if (!editing && value !== (current ?? "")) {
    setValue(current ?? "");
  }

  if (!hint) return null;

  function save() {
    update.mutate(value, {
      onSuccess: () => setEditing(false),
    });
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="text-xs font-semibold text-amber-800">{hint.label}</p>
          <p className="text-[10px] text-amber-600 mt-0.5">{hint.help}</p>
        </div>
        {!editing && (
          <button
            onClick={() => {
              setValue(current ?? "");
              setEditing(true);
            }}
            className="shrink-0 flex items-center gap-1 text-[11px] font-semibold text-amber-700 hover:text-amber-900 transition-colors"
          >
            <Pencil className="w-3 h-3" />
            {current ? "Edit" : "Set"}
          </button>
        )}
      </div>

      {editing ? (
        <div className="flex gap-2 mt-2">
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={hint.placeholder}
            className="flex-1 px-2.5 py-1.5 text-xs border border-amber-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") setEditing(false);
            }}
          />
          <button
            onClick={save}
            disabled={update.isPending || !value.trim()}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg disabled:opacity-50 transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="px-2.5 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      ) : (
        <p
          className={`text-xs mt-1 font-mono ${current ? "text-slate-700" : "text-amber-500 italic"}`}
        >
          {current ?? "Not set — sync will fail without this"}
        </p>
      )}
    </div>
  );
}

// ── No-data placeholder ───────────────────────────────────────────────────────

function NoDataYet({
  onSync,
  isPending,
}: {
  onSync: () => void;
  isPending: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <Clock className="w-5 h-5 text-slate-400" />
      </div>
      <p className="text-sm font-semibold text-slate-700">No data synced yet</p>
      <p className="text-xs text-slate-400 max-w-[240px]">
        Run a sync to pull the latest analytics from this platform.
      </p>
      <button
        onClick={onSync}
        disabled={isPending}
        className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50"
      >
        <RefreshCw
          className={`w-3.5 h-3.5 ${isPending ? "animate-spin" : ""}`}
        />
        Sync now
      </button>
    </div>
  );
}

// ── Sync log row ──────────────────────────────────────────────────────────────

function SyncLogRow({ log }: { log: SyncLog }) {
  const isSuccess = log.status === "SUCCESS";
  const isFailed = log.status === "FAILED";
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isSuccess ? "bg-emerald-50" : isFailed ? "bg-red-50" : "bg-slate-100"}`}
      >
        {isSuccess ? (
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
        ) : isFailed ? (
          <AlertCircle className="w-3 h-3 text-red-500" />
        ) : (
          <RefreshCw className="w-3 h-3 text-slate-400 animate-spin" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-700">
          {isSuccess ? "Success" : isFailed ? "Failed" : "In progress"}
          {log.recordsSynced != null && isSuccess && (
            <span className="text-slate-400 font-normal ml-1">
              · {log.recordsSynced} records
            </span>
          )}
        </p>
        {log.errorMessage && (
          <p className="text-[10px] text-red-500 truncate">
            {log.errorMessage}
          </p>
        )}
      </div>
      <p className="text-[10px] text-slate-400 shrink-0">
        {new Date(log.triggeredAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}

// ── Main drawer component ─────────────────────────────────────────────────────

interface IntegrationDetailDrawerProps {
  clientId: string;
  provider: ProviderWithStatus;
  onClose: () => void;
}

export function IntegrationDetailDrawer({
  clientId,
  provider,
  onClose,
}: IntegrationDetailDrawerProps) {
  const integration = provider.integration!;
  const status = integration.status;

  const disconnect = useDisconnect(clientId, provider.id);
  const sync = useSync(clientId, provider.id);
  const { data: logs } = useSyncLogs(clientId, provider.id, { limit: 10 });

  const metadata = integration.metadata as Record<string, unknown> | null;

  function renderDataPanel() {
    if (!metadata) {
      return (
        <NoDataYet
          onSync={() => void sync.mutate()}
          isPending={sync.isPending}
        />
      );
    }

    if (provider.name === "Google Search Console") {
      return <GscPanel meta={metadata as unknown as GscMeta} />;
    }
    if (provider.name === "Google Analytics 4") {
      return <Ga4Panel meta={metadata as unknown as Ga4Meta} />;
    }
    if (provider.name === "Google Ads") {
      return <GoogleAdsPanel meta={metadata as unknown as GoogleAdsMeta} />;
    }
    if (provider.name === "Meta Ads") {
      return <MetaAdsPanel meta={metadata as unknown as MetaAdsMeta} />;
    }

    // Generic provider — show raw record count
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        <p className="text-sm font-semibold text-slate-700">
          Integration connected
        </p>
        <p className="text-xs text-slate-400">
          Detailed analytics panel coming soon for this provider.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-[520px] bg-white z-50 shadow-2xl flex flex-col overflow-hidden animate-slide-in-right">
        {/* Header */}
        <div className="flex items-start gap-3 px-6 py-5 border-b border-slate-100 shrink-0">
          <img
            src={provider.logoUrl}
            alt={provider.name}
            className="w-10 h-10 rounded-xl object-contain border border-slate-100 shrink-0 mt-0.5"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://placehold.co/40x40/f1f5f9/94a3b8?text=" +
                provider.name[0];
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900">{provider.name}</p>
            {integration.accountLabel && (
              <p className="text-xs text-slate-500 mt-0.5">
                {integration.accountLabel}
              </p>
            )}
            <div className="flex items-center gap-3 mt-1.5">
              <span
                className={`flex items-center gap-1 text-[11px] font-semibold ${status === "CONNECTED" ? "text-emerald-600" : status === "EXPIRED" ? "text-amber-600" : "text-red-500"}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${status === "CONNECTED" ? "bg-emerald-500" : status === "EXPIRED" ? "bg-amber-500" : "bg-red-500"}`}
                />
                {status === "CONNECTED"
                  ? "Connected"
                  : status === "EXPIRED"
                    ? "Token expired"
                    : status}
              </span>
              {integration.lastSyncAt && (
                <span className="text-[11px] text-slate-400">
                  Synced{" "}
                  {new Date(integration.lastSyncAt).toLocaleDateString(
                    "en-IN",
                    { day: "numeric", month: "short" },
                  )}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action bar */}
        <div className="flex gap-2 px-6 py-3 bg-slate-50/60 border-b border-slate-100 shrink-0">
          <button
            onClick={() => void sync.mutate()}
            disabled={sync.isPending}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-600 border border-brand-200 bg-white rounded-lg hover:bg-brand-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${sync.isPending ? "animate-spin" : ""}`}
            />
            {sync.isPending ? "Syncing…" : "Sync Now"}
          </button>
          <button
            onClick={() => {
              void disconnect.mutate();
              onClose();
            }}
            disabled={disconnect.isPending}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 bg-white rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            <Unplug className="w-3.5 h-3.5" />
            Disconnect
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Account label — editable for Google/Meta providers that require it */}
          {LABEL_HINTS[provider.name] && (
            <EditableAccountLabel
              clientId={clientId}
              providerId={provider.id}
              providerName={provider.name}
              current={integration.accountLabel}
            />
          )}

          {/* Analytics data */}
          <section>
            <p className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Analytics Data
            </p>
            {renderDataPanel()}
          </section>

          {/* Sync history */}
          {logs && logs.length > 0 && (
            <section>
              <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Sync History
              </p>
              <div className="divide-y divide-slate-50">
                {logs.map((log) => (
                  <SyncLogRow key={log.id} log={log} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
