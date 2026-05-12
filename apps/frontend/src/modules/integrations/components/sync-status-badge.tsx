import type { SyncStatus } from "../types";

const SYNC_CONFIG: Record<SyncStatus, { label: string; classes: string }> = {
  SUCCESS: { label: "Synced", classes: "bg-emerald-100 text-emerald-700" },
  FAILED: { label: "Failed", classes: "bg-red-100 text-red-700" },
  IN_PROGRESS: { label: "Syncing…", classes: "bg-blue-100 text-blue-700" },
};

export function SyncStatusBadge({ status }: { status: SyncStatus }) {
  const { label, classes } = SYNC_CONFIG[status] ?? {
    label: status,
    classes: "bg-slate-100 text-slate-600",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${classes}`}
    >
      {label}
    </span>
  );
}
