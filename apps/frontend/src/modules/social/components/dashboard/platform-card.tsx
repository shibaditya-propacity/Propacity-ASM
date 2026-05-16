import { RefreshCw, ExternalLink, CheckCircle2, Circle } from "lucide-react";
import type {
  SocialProfile,
  SocialSnapshot,
  SocialPlatform,
} from "../../types";
import { PLATFORM_LABELS, PLATFORM_COLORS } from "../../types";

interface PlatformCardProps {
  platform: SocialPlatform;
  profile: SocialProfile | null;
  snapshot: SocialSnapshot | null;
  onSync?: () => void;
  isSyncing?: boolean;
}

function formatNum(n: number | null | undefined): string {
  if (n == null) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function PlatformCard({
  platform,
  profile,
  snapshot,
  onSync,
  isSyncing,
}: PlatformCardProps) {
  const color = PLATFORM_COLORS[platform];
  const label = PLATFORM_LABELS[platform];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: color }}
          >
            {label[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{label}</p>
            {profile ? (
              <p className="text-xs text-slate-400">@{profile.handle}</p>
            ) : (
              <p className="text-xs text-slate-400">Not configured</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {profile?.isConnected ? (
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          ) : (
            <Circle className="w-4 h-4 text-slate-300" />
          )}
          {profile && onSync && (
            <button
              onClick={onSync}
              disabled={isSyncing}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-50 transition-colors"
              title="Sync this platform"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`}
              />
            </button>
          )}
          {profile?.profileUrl && (
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Open profile"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {snapshot ? (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-slate-400">Followers</p>
            <p className="text-lg font-bold text-slate-900">
              {formatNum(snapshot.followers)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Engagement</p>
            <p className="text-lg font-bold text-slate-900">
              {snapshot.engagementRate != null
                ? `${snapshot.engagementRate}%`
                : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Avg Likes</p>
            <p className="text-base font-semibold text-slate-700">
              {formatNum(snapshot.avgLikes)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Posts</p>
            <p className="text-base font-semibold text-slate-700">
              {formatNum(snapshot.posts)}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-xs text-slate-400 py-2">
          {profile
            ? "No data yet — run a sync to fetch metrics"
            : "Add this platform to track performance"}
        </div>
      )}

      {snapshot && (
        <p className="text-[10px] text-slate-300">
          Synced{" "}
          {new Date(snapshot.snapshotDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </p>
      )}
    </div>
  );
}
