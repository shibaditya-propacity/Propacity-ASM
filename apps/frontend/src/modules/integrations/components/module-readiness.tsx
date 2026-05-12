import { useReadiness } from "../api/use-readiness";

const MODULE_COLORS: Record<string, string> = {
  Ads: "from-blue-500 to-indigo-500",
  Social: "from-pink-500 to-rose-500",
  SEO: "from-green-500 to-emerald-500",
  Website: "from-cyan-500 to-sky-500",
  Reputation: "from-amber-500 to-orange-500",
  Promoter: "from-violet-500 to-purple-500",
  Launch: "from-red-500 to-rose-600",
};

export function ModuleReadiness({ clientId }: { clientId: string }) {
  const { data, isLoading } = useReadiness(clientId);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 p-4 space-y-2 animate-pulse"
          >
            <div className="h-3 bg-slate-100 rounded w-3/4" />
            <div className="h-5 bg-slate-100 rounded w-1/2" />
            <div className="h-1.5 bg-slate-100 rounded-full" />
          </div>
        ))}
      </div>
    );
  }

  if (!data?.length) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
      {data.map((item) => {
        const gradient =
          MODULE_COLORS[item.module] ?? "from-slate-400 to-slate-500";
        return (
          <div
            key={item.module}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-4"
          >
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              {item.module}
            </p>
            <p className="text-xl font-bold text-slate-900 mb-2">{item.pct}%</p>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-700`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5">
              {item.connected}/{item.total} providers
            </p>
          </div>
        );
      })}
    </div>
  );
}
