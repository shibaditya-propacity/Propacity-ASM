import { ExternalLink, Heart, MessageCircle, Eye } from "lucide-react";
import type { SocialDashboard, TopPost, SocialPlatform } from "../../types";
import { PLATFORM_LABELS, PLATFORM_COLORS } from "../../types";

function formatNum(n: number | undefined): string {
  if (n == null) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

interface TopPostCardProps {
  post: TopPost;
  platform: SocialPlatform;
}

function TopPostCard({ post, platform }: TopPostCardProps) {
  const color = PLATFORM_COLORS[platform];
  const label = PLATFORM_LABELS[platform];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col gap-2.5">
      {post.thumbnail ? (
        <img
          src={post.thumbnail}
          alt={post.title ?? "Post"}
          className="w-full aspect-video object-cover rounded-lg"
        />
      ) : (
        <div
          className="w-full aspect-video rounded-lg flex items-center justify-center text-xs font-semibold text-white"
          style={{ backgroundColor: `${color}28` }}
        >
          <span style={{ color }}>{label}</span>
        </div>
      )}

      {post.title && (
        <p className="text-xs font-medium text-slate-700 line-clamp-2">
          {post.title}
        </p>
      )}

      <div className="flex items-center gap-3 text-xs text-slate-500">
        {post.likes != null && (
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            {formatNum(post.likes)}
          </span>
        )}
        {post.comments != null && (
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            {formatNum(post.comments)}
          </span>
        )}
        {post.views != null && (
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatNum(post.views)}
          </span>
        )}
        {post.url && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-brand-500 hover:text-brand-700"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      <div
        className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full self-start"
        style={{ color, backgroundColor: `${color}15` }}
      >
        {label}
      </div>
    </div>
  );
}

interface TopPostsGridProps {
  dashboard: SocialDashboard;
}

export function TopPostsGrid({ dashboard }: TopPostsGridProps) {
  const { profiles, latestSnapshots } = dashboard;

  const allPosts: { post: TopPost; platform: SocialPlatform }[] = [];
  profiles.forEach((p) => {
    const snap = latestSnapshots[p.platform];
    if (!snap?.topPosts?.length) return;
    snap.topPosts.slice(0, 2).forEach((post) => {
      allPosts.push({ post, platform: p.platform as SocialPlatform });
    });
  });

  if (allPosts.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="text-sm font-semibold text-slate-900">Top Posts</h3>
        <p className="text-xs text-slate-400 mt-0.5">Best performing content</p>
        <div className="h-36 flex items-center justify-center text-sm text-slate-400 mt-4">
          No posts yet — sync to load top content
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Top Posts</h3>
        <p className="text-xs text-slate-400 mt-0.5">Best performing content</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {allPosts.map(({ post, platform }, i) => (
          <TopPostCard key={i} post={post} platform={platform} />
        ))}
      </div>
    </div>
  );
}
