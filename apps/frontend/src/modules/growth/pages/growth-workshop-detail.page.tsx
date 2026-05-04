import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";
import { useWorkshop } from "../api/use-workshop";
import { useProspects } from "../api/use-prospects";
import { ProspectTable } from "../components/prospect-table";
import { ProspectForm } from "../components/prospect-form";
import { WorkshopStatusBadge } from "../components/workshop-status-badge";

export default function GrowthWorkshopDetailPage() {
  const { workshopId = "" } = useParams<{ workshopId: string }>();
  const [showProspectForm, setShowProspectForm] = useState(false);

  const workshop = useWorkshop(workshopId);
  const prospects = useProspects({ workshopId });

  if (workshop.isLoading || prospects.isLoading) return <LoadingState />;
  if (workshop.isError)
    return <ErrorState error={workshop.error} onRetry={workshop.refetch} />;
  if (!workshop.data) return <ErrorState error={new Error("Workshop not found")} />;

  const w = workshop.data;

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar
        title={w.title}
        subtitle={w.city ?? undefined}
        actions={
          <Link
            to="/growth/workshops"
            className="btn text-slate-600 hover:text-slate-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        }
      />

      <div className="p-6 space-y-6 flex-1">
        {/* Workshop Info Card */}
        <div className="card card-pad">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-800">Workshop Info</h2>
            <WorkshopStatusBadge status={w.status} />
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <dt className="text-xs text-slate-500">Date</dt>
              <dd className="font-medium text-slate-800">
                {format(new Date(w.date), "dd MMM yyyy")}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Format</dt>
              <dd className="font-medium text-slate-800">{w.format}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">City</dt>
              <dd className="font-medium text-slate-800">{w.city ?? "-"}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Capacity</dt>
              <dd className="font-medium text-slate-800">{w.capacity}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Registered</dt>
              <dd className="font-medium text-slate-800">{w.registered}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Attended</dt>
              <dd className="font-medium text-slate-800">{w.attended}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Ad Spend</dt>
              <dd className="font-medium text-slate-800">₹{w.adSpend.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Ticket Price</dt>
              <dd className="font-medium text-slate-800">₹{w.ticketPrice.toLocaleString()}</dd>
            </div>
          </dl>
        </div>

        {/* Prospects Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-800">
              Prospects ({prospects.data?.length ?? 0})
            </h2>
            <button
              onClick={() => setShowProspectForm((s) => !s)}
              className="btn btn-primary"
            >
              {showProspectForm ? "Cancel" : "Add Prospect"}
            </button>
          </div>

          {showProspectForm && (
            <div className="mb-4">
              <ProspectForm
                workshopId={workshopId}
                onSuccess={() => setShowProspectForm(false)}
              />
            </div>
          )}

          {prospects.isError ? (
            <ErrorState error={prospects.error} onRetry={prospects.refetch} />
          ) : !prospects.data || prospects.data.length === 0 ? (
            <EmptyState
              title="No prospects yet"
              description="Add prospects who attended this workshop."
            />
          ) : (
            <ProspectTable prospects={prospects.data} />
          )}
        </section>
      </div>
    </div>
  );
}
