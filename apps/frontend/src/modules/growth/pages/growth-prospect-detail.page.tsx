import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { useProspect } from "../api/use-prospect";
import { useProspectActivities } from "../api/use-prospect-activities";
import { useProspectBrandAudit } from "../api/use-prospect-brand-audit";
import { useCreateBrandAudit } from "../api/use-create-brand-audit";
import { ProspectStageBadge } from "../components/prospect-stage-badge";
import { ProspectStageForm } from "../components/prospect-stage-form";
import { ProspectActivityTimeline } from "../components/prospect-activity-timeline";
import { AddActivityForm } from "../components/add-activity-form";
import { BrandAuditCard } from "../components/brand-audit-card";

export default function GrowthProspectDetailPage() {
  const { prospectId = "" } = useParams<{ prospectId: string }>();
  const [showStageForm, setShowStageForm] = useState(false);

  const prospect = useProspect(prospectId);
  const activities = useProspectActivities(prospectId);
  const brandAudit = useProspectBrandAudit(prospectId);
  const createAudit = useCreateBrandAudit();

  if (prospect.isLoading) return <LoadingState />;
  if (prospect.isError)
    return <ErrorState error={prospect.error} onRetry={prospect.refetch} />;
  if (!prospect.data) return <ErrorState error={new Error("Prospect not found")} />;

  const p = prospect.data;

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar
        title={p.name}
        subtitle={p.company}
        actions={
          <Link
            to="/growth/prospects"
            className="btn text-slate-600 hover:text-slate-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        }
      />

      <div className="p-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Prospect Info */}
          <div className="space-y-4">
            <div className="card card-pad">
              <h2 className="text-sm font-semibold text-slate-800 mb-4">Prospect Info</h2>
              <dl className="space-y-2 text-sm">
                {[
                  ["Designation", p.designation],
                  ["Company", p.company],
                  ["Phone", p.phone],
                  ["Email", p.email],
                  ["City", p.city],
                  ["Scale", p.scale],
                  ["Classification", p.classification],
                  ["Fit Score", p.fitScore !== null ? String(p.fitScore) : null],
                  [
                    "Est. Deal Size",
                    p.estimatedDealSize !== null
                      ? `₹${p.estimatedDealSize.toLocaleString()}`
                      : null,
                  ],
                  ["Owner PM", p.ownerPm],
                  ["Source", p.source],
                ].map(([label, value]) => (
                  <div key={label as string} className="flex gap-2">
                    <dt className="text-slate-500 w-32 shrink-0">{label}</dt>
                    <dd className="font-medium text-slate-800">{value ?? "-"}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Stage */}
            <div className="card card-pad">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-slate-800">Stage</h2>
                <button
                  onClick={() => setShowStageForm((s) => !s)}
                  className="btn text-xs text-brand-600 hover:text-brand-700"
                >
                  {showStageForm ? "Cancel" : "Change Stage"}
                </button>
              </div>
              <ProspectStageBadge stage={p.stage} />
              {showStageForm && (
                <div className="mt-4">
                  <ProspectStageForm
                    prospectId={prospectId}
                    currentStage={p.stage}
                    onSuccess={() => setShowStageForm(false)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Activities + Brand Audit */}
          <div className="space-y-4">
            {/* Activities */}
            <div className="card card-pad">
              <h2 className="text-sm font-semibold text-slate-800 mb-4">Activities</h2>
              <div className="mb-4">
                <AddActivityForm prospectId={prospectId} />
              </div>
              {activities.isLoading ? (
                <p className="text-xs text-slate-500">Loading activities...</p>
              ) : activities.isError ? (
                <p className="text-xs text-red-500">Failed to load activities.</p>
              ) : (
                <ProspectActivityTimeline activities={activities.data ?? []} />
              )}
            </div>

            {/* Brand Audit */}
            <div className="card card-pad">
              <h2 className="text-sm font-semibold text-slate-800 mb-4">Brand Audit</h2>
              {brandAudit.isLoading ? (
                <p className="text-xs text-slate-500">Loading audit...</p>
              ) : brandAudit.data ? (
                <BrandAuditCard audit={brandAudit.data} />
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-slate-500 mb-3">No audit yet.</p>
                  <button
                    onClick={() =>
                      createAudit.mutate({ prospectId, type: "Brand Positioning" })
                    }
                    disabled={createAudit.isPending}
                    className="btn btn-primary"
                  >
                    {createAudit.isPending ? "Creating..." : "Trigger Audit"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
