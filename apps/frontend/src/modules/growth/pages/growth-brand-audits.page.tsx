import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";
import { useAuditStatusStore } from "@/core/store/audit-status.store";
import { useFullAudits } from "../api/use-full-audits";
import { useCreateFullAudit } from "../api/use-create-full-audit";
import { AuditStatusBadge } from "../components/audit-status-badge";
import { CreateFullAuditForm } from "../components/create-full-audit-form";
import type { CreateFullAuditInput, FullAudit } from "../brand-audit.types";

function AuditBrandCell({ audit }: { audit: FullAudit }) {
  const [imgError, setImgError] = useState(false);
  const dev = audit.developer;
  const cd = audit.collectedData;
  const logoUrl =
    cd?.logoUrl ??
    (dev?.domain ? `https://logo.clearbit.com/${dev.domain}` : null);
  const name = dev?.brandName ?? "—";

  return (
    <div className="flex items-center gap-2.5">
      {!imgError && logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          className="w-7 h-7 rounded-md object-contain bg-slate-50 border border-slate-100 p-0.5 shrink-0"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-md bg-brand-500/10 border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600 shrink-0">
          {name[0]?.toUpperCase() ?? "?"}
        </div>
      )}
      <span className="font-medium text-slate-900 truncate">{name}</span>
    </div>
  );
}

export default function GrowthBrandAuditsPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading, isError, error, refetch } = useFullAudits();
  const create = useCreateFullAudit();
  const runningAuditId = useAuditStatusStore((s) => s.runningAuditId);

  // Block new audits if one is running (current session or DB state)
  const hasActiveAudit =
    runningAuditId !== null ||
    (data ?? []).some(
      (a) => a.status === "COLLECTING" || a.status === "ANALYZING",
    );

  async function handleCreate(input: CreateFullAuditInput) {
    const audit = await create.mutateAsync(input);
    navigate(`/growth/brand-audits/${audit.id}`);
  }

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar
        title="Brand Audits"
        actions={
          !showForm ? (
            <div className="relative group/new-audit">
              <button
                onClick={() => {
                  if (!hasActiveAudit) setShowForm(true);
                }}
                disabled={hasActiveAudit}
                className="btn-primary flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
                New Audit
              </button>
              {hasActiveAudit && (
                <div
                  className="absolute right-0 top-full mt-2 z-50
                    px-3 py-2 bg-slate-800 border border-white/10 text-white text-xs rounded-lg
                    whitespace-nowrap pointer-events-none shadow-xl
                    opacity-0 group-hover/new-audit:opacity-100 transition-opacity duration-150"
                >
                  An audit is already in progress
                  <span className="absolute bottom-full right-4 border-4 border-transparent border-b-slate-800" />
                </div>
              )}
            </div>
          ) : undefined
        }
      />

      <div className="p-6 flex-1">
        {showForm ? (
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-slate-800 mb-6">
              New Brand Audit
            </p>
            <CreateFullAuditForm
              onSubmit={handleCreate}
              onCancel={() => setShowForm(false)}
              submitting={create.isPending}
            />
          </div>
        ) : isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState error={error} onRetry={refetch} />
        ) : !data || data.length === 0 ? (
          <EmptyState
            title="No brand audits yet"
            description="Run a full AI-powered audit of a developer's digital presence."
          />
        ) : (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 bg-slate-50/60">
                <tr>
                  <th className="th">Brand</th>
                  <th className="th">City</th>
                  <th className="th">Status</th>
                  <th className="th text-right">Score</th>
                  <th className="th">Date</th>
                  <th className="th" />
                </tr>
              </thead>
              <tbody>
                {data.map((audit) => (
                  <tr
                    key={audit.id}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="td">
                      <AuditBrandCell audit={audit} />
                    </td>
                    <td className="td text-slate-500">
                      {audit.developer?.city ?? "—"}
                    </td>
                    <td className="td">
                      <AuditStatusBadge status={audit.status} />
                    </td>
                    <td className="td text-right font-semibold tabular-nums">
                      {audit.overallScore !== null ? audit.overallScore : "—"}
                    </td>
                    <td className="td text-slate-500 text-xs">
                      {new Date(audit.auditDate).toLocaleDateString("en-IN")}
                    </td>
                    <td className="td text-right">
                      <Link
                        to={`/growth/brand-audits/${audit.id}`}
                        className="text-xs font-semibold text-brand-600 hover:text-brand-800"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
