import { Kpi, Chip } from "@/core/ui";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { Topbar } from "@/core/layout/topbar";
import { useWorkshops } from "../api/use-workshops";
import { useProspects } from "../api/use-prospects";
import { WorkshopTable } from "../components/workshop-table";

export default function GrowthDashboardPage() {
  const workshops = useWorkshops();
  const prospects = useProspects();

  const isLoading = workshops.isLoading || prospects.isLoading;
  const isError = workshops.isError || prospects.isError;

  if (isLoading) return <LoadingState />;
  if (isError)
    return (
      <ErrorState
        error={workshops.error ?? prospects.error}
        onRetry={() => {
          workshops.refetch();
          prospects.refetch();
        }}
      />
    );

  const workshopsData = workshops.data ?? [];
  const prospectsData = prospects.data ?? [];

  const wonCount = prospectsData.filter((p) => p.stage === "Won").length;
  const inDiscussionCount = prospectsData.filter((p) => p.stage === "In Discussion").length;

  const stageCounts = prospectsData.reduce<Record<string, number>>((acc, p) => {
    acc[p.stage] = (acc[p.stage] ?? 0) + 1;
    return acc;
  }, {});

  const recentWorkshops = workshopsData.slice(-5).reverse();

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar title="Growth Dashboard" />
      <div className="p-6 space-y-6 flex-1">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Kpi label="Total Workshops" value={workshopsData.length} />
          <Kpi label="Total Prospects" value={prospectsData.length} />
          <Kpi label="Won" value={wonCount} />
          <Kpi label="In Discussion" value={inDiscussionCount} />
        </div>

        {/* Recent Workshops */}
        <section>
          <h2 className="text-sm font-semibold text-slate-800 mb-3">Recent Workshops</h2>
          {recentWorkshops.length === 0 ? (
            <p className="text-sm text-slate-500">No workshops yet.</p>
          ) : (
            <WorkshopTable workshops={recentWorkshops} />
          )}
        </section>

        {/* Pipeline */}
        <section>
          <h2 className="text-sm font-semibold text-slate-800 mb-3">Pipeline by Stage</h2>
          {Object.keys(stageCounts).length === 0 ? (
            <p className="text-sm text-slate-500">No prospects yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {Object.entries(stageCounts).map(([stage, count]) => (
                <Chip key={stage} tone="slate">
                  {stage}: {count}
                </Chip>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
