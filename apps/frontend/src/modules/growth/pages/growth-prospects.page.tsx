import { useSearchParams } from "react-router-dom";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";
import { useProspects } from "../api/use-prospects";
import { ProspectTable } from "../components/prospect-table";
import type { ProspectStage, ProspectClassification } from "../types";

const STAGES: ProspectStage[] = [
  "Registered",
  "Attended",
  "Segmented · Agency",
  "Segmented · Transaction",
  "Session Scheduled",
  "Audited",
  "Proposal Sent",
  "In Discussion",
  "Won",
  "Lost",
];

const CLASSIFICATIONS: ProspectClassification[] = ["Agency", "Transaction", "Both", "Unclear"];

export default function GrowthProspectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? undefined;
  const stage = (searchParams.get("stage") ?? undefined) as ProspectStage | undefined;
  const classification = (searchParams.get("classification") ?? undefined) as
    | ProspectClassification
    | undefined;

  const { data, isLoading, isError, error, refetch } = useProspects({
    search,
    stage,
    classification,
  });

  function setFilter(key: string, value: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar title="Prospects" />

      <div className="p-6 space-y-4 flex-1">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search prospects..."
            value={search ?? ""}
            onChange={(e) => setFilter("search", e.target.value)}
            className="input w-56"
          />
          <select
            value={stage ?? ""}
            onChange={(e) => setFilter("stage", e.target.value)}
            className="input w-52"
          >
            <option value="">All stages</option>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            value={classification ?? ""}
            onChange={(e) => setFilter("classification", e.target.value)}
            className="input w-44"
          >
            <option value="">All classifications</option>
            {CLASSIFICATIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState error={error} onRetry={refetch} />
        ) : !data || data.length === 0 ? (
          <EmptyState
            title="No prospects found"
            description="Try adjusting your filters or add prospects from a workshop."
          />
        ) : (
          <ProspectTable prospects={data} />
        )}
      </div>
    </div>
  );
}
