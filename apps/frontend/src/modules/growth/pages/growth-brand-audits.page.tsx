import { useSearchParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";
import { Chip } from "@/core/ui";
import { useBrandAudits } from "../api/use-brand-audits";
import type { AuditStatus } from "../types";

const STATUS_OPTIONS: AuditStatus[] = [
  "Pending",
  "In Progress",
  "Reviewed",
  "Shared",
  "Converted",
];

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

function auditStatusTone(status: AuditStatus): ChipTone {
  switch (status) {
    case "Pending":
      return "amber";
    case "In Progress":
      return "blue";
    case "Reviewed":
      return "violet";
    case "Shared":
    case "Converted":
      return "emerald";
    default:
      return "slate";
  }
}

export default function GrowthBrandAuditsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = (searchParams.get("status") ?? undefined) as AuditStatus | undefined;

  const { data, isLoading, isError, error, refetch } = useBrandAudits({ status });

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
      <Topbar title="Brand Audits" />

      <div className="p-6 space-y-4 flex-1">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <select
            value={status ?? ""}
            onChange={(e) => setFilter("status", e.target.value)}
            className="input w-44"
          >
            <option value="">All statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
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
            title="No brand audits found"
            description="Audits are created from prospect detail pages."
          />
        ) : (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="th">Prospect</th>
                  <th className="th">Type</th>
                  <th className="th">Status</th>
                  <th className="th">Score</th>
                  <th className="th">Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((audit) => (
                  <tr
                    key={audit.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="td">
                      <Link
                        to={`/growth/prospects/${audit.prospectId}`}
                        className="text-brand-600 hover:text-brand-700 font-medium"
                      >
                        {audit.prospectId}
                      </Link>
                    </td>
                    <td className="td text-slate-600">{audit.type}</td>
                    <td className="td">
                      <Chip tone={auditStatusTone(audit.status)}>{audit.status}</Chip>
                    </td>
                    <td className="td text-slate-700 font-medium">
                      {audit.overallScore !== null ? audit.overallScore : "-"}
                    </td>
                    <td className="td text-slate-500 text-xs">
                      {format(new Date(audit.createdAt), "dd MMM yyyy")}
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
