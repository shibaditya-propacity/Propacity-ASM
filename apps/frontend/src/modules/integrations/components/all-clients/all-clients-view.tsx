import { useMatrix } from "../../api/use-matrix";
import { ConnectionMatrix } from "./connection-matrix";
import { Skeleton } from "@/core/ui";

export function AllClientsView() {
  const { data, isLoading, isError } = useMatrix();

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="font-heading text-[13px] font-bold text-slate-700 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0" />
          Connection Matrix
        </h2>
        <p className="text-xs text-slate-400 mt-0.5 ml-3">
          Integration status across all clients and providers
        </p>
      </div>

      {isLoading && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 animate-pulse">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full rounded-lg" />
          ))}
        </div>
      )}

      {isError && (
        <div className="border-2 border-dashed border-red-200 rounded-2xl p-12 text-center bg-white/60">
          <p className="text-sm font-semibold text-red-600">
            Failed to load connection matrix
          </p>
        </div>
      )}

      {data && <ConnectionMatrix matrix={data} />}
    </div>
  );
}
