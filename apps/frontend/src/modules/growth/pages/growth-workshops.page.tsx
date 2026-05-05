import { useSearchParams } from "react-router-dom";
import { Search, CalendarX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Topbar } from "@/core/layout/topbar";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { useWorkshops } from "../api/use-workshops";
import { WorkshopTable } from "../components/workshop-table";
import type { WorkshopStatus } from "../types";

// ── Filter tabs ───────────────────────────────────────────────────────────────
type Tab = { label: string; value: WorkshopStatus | "" };

const TABS: Tab[] = [
  { label: "All", value: "" },
  { label: "Upcoming", value: "Upcoming" },
  { label: "Live", value: "Live" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
];

const TAB_ACCENT: Record<string, string> = {
  "": "bg-brand-500 text-white shadow-[0_0_14px_rgba(45,63,231,0.3)]",
  Upcoming: "bg-brand-500 text-white shadow-[0_0_14px_rgba(45,63,231,0.3)]",
  Live: "bg-emerald-500 text-white shadow-[0_0_14px_rgba(16,185,129,0.3)]",
  Completed: "bg-slate-600  text-white",
  Cancelled: "bg-red-500    text-white shadow-[0_0_14px_rgba(239,68,68,0.25)]",
};

const TAB_INACTIVE =
  "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GrowthWorkshopsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const status = (searchParams.get("status") ?? "") as WorkshopStatus | "";

  const { data, isLoading, isError, error, refetch } = useWorkshops({
    search: search || undefined,
    status: (status as WorkshopStatus) || undefined,
  });

  function setFilter(key: string, value: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      value ? next.set(key, value) : next.delete(key);
      return next;
    });
  }

  const workshops = data ?? [];

  return (
    <div className="flex flex-col flex-1 overflow-auto bg-[#F4F6FB]">
      <Topbar title="Workshops" />

      <div className="p-6 space-y-5 flex-1">
        {/* ── Filter bar ── */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Status tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {TABS.map((tab) => {
              const active = status === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setFilter("status", tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active ? TAB_ACCENT[tab.value] : TAB_INACTIVE
                  }`}
                >
                  {tab.label}
                  {/* Show count badge when data loaded */}
                  {!isLoading &&
                    tab.value === status &&
                    workshops.length > 0 && (
                      <span className="ml-1.5 opacity-75">
                        ({workshops.length})
                      </span>
                    )}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search workshops…"
              value={search}
              onChange={(e) => setFilter("search", e.target.value)}
              className="pl-8 pr-3 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 w-52 transition-all"
            />
          </div>
        </div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingState />
            </motion.div>
          ) : isError ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ErrorState error={error} onRetry={refetch} />
            </motion.div>
          ) : workshops.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center text-center gap-3 bg-white/60"
            >
              <CalendarX className="w-9 h-9 text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">
                {status
                  ? `No ${status.toLowerCase()} workshops`
                  : "No workshops yet"}
              </p>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                {status
                  ? `Try a different filter or schedule a new workshop from the sidebar.`
                  : "Schedule your first workshop using the button in the sidebar."}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={status + search}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkshopTable workshops={workshops} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
