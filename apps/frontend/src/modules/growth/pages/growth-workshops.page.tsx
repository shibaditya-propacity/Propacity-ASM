import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";
import { useWorkshops } from "../api/use-workshops";
import { WorkshopTable } from "../components/workshop-table";
import { WorkshopForm } from "../components/workshop-form";
import type { WorkshopStatus } from "../types";

const STATUS_OPTIONS: WorkshopStatus[] = ["Upcoming", "Live", "Completed", "Cancelled"];

export default function GrowthWorkshopsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showForm, setShowForm] = useState(false);

  const search = searchParams.get("search") ?? undefined;
  const status = (searchParams.get("status") ?? undefined) as WorkshopStatus | undefined;

  const { data, isLoading, isError, error, refetch } = useWorkshops({ search, status });

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
      <Topbar
        title="Workshops"
        actions={
          <button
            onClick={() => setShowForm((s) => !s)}
            className="btn btn-primary"
          >
            {showForm ? "Cancel" : "New Workshop"}
          </button>
        }
      />

      <div className="p-6 space-y-4 flex-1">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search workshops..."
            value={search ?? ""}
            onChange={(e) => setFilter("search", e.target.value)}
            className="input w-56"
          />
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

        {/* New Workshop Form */}
        {showForm && (
          <WorkshopForm onSuccess={() => setShowForm(false)} />
        )}

        {/* Content */}
        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState error={error} onRetry={refetch} />
        ) : !data || data.length === 0 ? (
          <EmptyState
            title="No workshops yet"
            description="Create your first workshop to start tracking prospects."
            action={
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary"
              >
                New Workshop
              </button>
            }
          />
        ) : (
          <WorkshopTable workshops={data} />
        )}
      </div>
    </div>
  );
}
