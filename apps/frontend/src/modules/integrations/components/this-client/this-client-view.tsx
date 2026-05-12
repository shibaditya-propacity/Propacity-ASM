import { useIntegrations } from "../../api/use-integrations";
import { StatsBar } from "../stats-bar";
import { ModuleReadiness } from "../module-readiness";
import { IntegrationGrid } from "../integration-grid";
import { ErrorState } from "@/core/components/error-state";
import { Skeleton } from "@/core/ui";

interface ThisClientViewProps {
  clientId: string;
}

export function ThisClientView({ clientId }: ThisClientViewProps) {
  const { data, isLoading, isError, error, refetch } =
    useIntegrations(clientId);

  if (isError) {
    return (
      <div className="p-6">
        <ErrorState error={error} onRetry={() => void refetch()} />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Stats bar */}
      {isLoading ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      ) : data ? (
        <StatsBar providers={data} />
      ) : null}

      {/* Module readiness */}
      <section>
        <h2 className="font-heading text-[13px] font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0" />
          Module Readiness
        </h2>
        <ModuleReadiness clientId={clientId} />
      </section>

      {/* Provider grid */}
      <section>
        <h2 className="font-heading text-[13px] font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0" />
          All Integrations
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 animate-pulse"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-xl" />
                  <div className="flex-1 space-y-1.5">
                    <Skeleton className="h-3.5 w-3/4 rounded" />
                    <Skeleton className="h-2.5 w-1/2 rounded" />
                  </div>
                </div>
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-2/3 rounded" />
                <Skeleton className="h-8 w-full rounded-lg" />
              </div>
            ))}
          </div>
        ) : data ? (
          <IntegrationGrid clientId={clientId} providers={data} />
        ) : null}
      </section>
    </div>
  );
}
