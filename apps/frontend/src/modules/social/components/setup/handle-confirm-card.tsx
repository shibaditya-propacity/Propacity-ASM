import type { FetchedHandle } from "../../types";

interface HandleConfirmCardProps {
  handle: FetchedHandle;
  editedHandle: string;
  icon: React.ReactNode;
  label: string;
  onChange: (value: string) => void;
}

const CONFIDENCE_STYLES = {
  high: "bg-green-50 text-green-700 border-green-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  low: "bg-red-50 text-red-700 border-red-200",
};

export function HandleConfirmCard({
  handle,
  editedHandle,
  icon,
  label,
  onChange,
}: HandleConfirmCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-4">
      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
        {icon}
      </div>

      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-900">{label}</span>
          <span
            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${CONFIDENCE_STYLES[handle.confidence]}`}
          >
            {handle.confidence} confidence
          </span>
        </div>

        <input
          type="text"
          value={editedHandle}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`@handle or channel name`}
          className="w-full text-sm px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-slate-400"
        />

        {handle.profileUrl && (
          <a
            href={handle.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-500 hover:underline truncate block"
          >
            {handle.profileUrl}
          </a>
        )}
      </div>
    </div>
  );
}
