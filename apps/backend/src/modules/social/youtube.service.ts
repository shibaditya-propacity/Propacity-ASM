/**
 * YouTube channel metrics via YouTube Data API v3.
 * Uses YOUTUBE_DATA_API_KEY from .env — already present and active.
 * No per-client OAuth needed; the API key provides access to public channel data.
 */

export interface YouTubeMetrics {
  followers: number; // subscribers
  posts: number | null; // total video count
  avgLikes: number | null;
  avgComments: number | null;
  reach: number | null; // total views (lifetime)
  topPosts: Array<{
    url: string;
    title: string;
    thumbnail: string;
    likes: number | null;
    comments: number | null;
    shares: number | null;
    publishedAt: string | null;
    views: number | null;
  }>;
  channelName: string | null;
  channelId: string | null;
}

function extractHandleOrId(handle: string): {
  type: "handle" | "channelId" | "username";
  value: string;
} {
  if (handle.startsWith("UC") && handle.length > 20)
    return { type: "channelId", value: handle };
  if (handle.startsWith("@")) return { type: "handle", value: handle.slice(1) };
  return { type: "handle", value: handle };
}

export async function getYouTubeMetrics(
  handle: string,
  _brandName: string,
): Promise<YouTubeMetrics> {
  const apiKey = process.env["YOUTUBE_DATA_API_KEY"];
  const result: YouTubeMetrics = {
    followers: 0,
    posts: null,
    avgLikes: null,
    avgComments: null,
    reach: null,
    topPosts: [],
    channelName: null,
    channelId: null,
  };

  if (!apiKey) {
    console.warn("[YouTube] YOUTUBE_DATA_API_KEY not set");
    return result;
  }

  try {
    const { type, value } = extractHandleOrId(handle);
    const channelParam =
      type === "channelId"
        ? `id=${value}`
        : `forHandle=${encodeURIComponent(value)}`;

    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&${channelParam}&key=${apiKey}`,
      { signal: AbortSignal.timeout(12_000) },
    );
    const channelJson = (await channelRes.json()) as {
      items?: Array<{
        id: string;
        snippet: { title: string; description: string };
        statistics: {
          subscriberCount: string;
          videoCount: string;
          viewCount: string;
        };
      }>;
    };

    const channel = channelJson.items?.[0];
    if (!channel) return result;

    const channelId = channel.id;
    result.channelId = channelId;
    result.channelName = channel.snippet?.title ?? null;
    result.followers =
      parseInt(channel.statistics?.subscriberCount ?? "0", 10) || 0;
    result.posts = parseInt(channel.statistics?.videoCount ?? "0", 10) || null;
    result.reach = parseInt(channel.statistics?.viewCount ?? "0", 10) || null;

    // Fetch top 10 recent videos
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=10&type=video&key=${apiKey}`,
      { signal: AbortSignal.timeout(12_000) },
    );
    const searchJson = (await searchRes.json()) as {
      items?: Array<{
        id: { videoId: string };
        snippet: { title: string; publishedAt: string };
      }>;
    };
    const videos = searchJson.items ?? [];

    // Fetch video stats
    const videoIds = videos
      .map((v) => v.id.videoId)
      .filter(Boolean)
      .join(",");
    let videoStats: Record<
      string,
      { viewCount: number; likeCount: number; commentCount: number }
    > = {};

    if (videoIds) {
      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`,
        { signal: AbortSignal.timeout(12_000) },
      );
      const statsJson = (await statsRes.json()) as {
        items?: Array<{
          id: string;
          statistics: {
            viewCount: string;
            likeCount: string;
            commentCount: string;
          };
        }>;
      };
      for (const v of statsJson.items ?? []) {
        videoStats[v.id] = {
          viewCount: parseInt(v.statistics?.viewCount ?? "0", 10),
          likeCount: parseInt(v.statistics?.likeCount ?? "0", 10),
          commentCount: parseInt(v.statistics?.commentCount ?? "0", 10),
        };
      }
    }

    result.topPosts = videos.slice(0, 6).map((v) => {
      const stats = videoStats[v.id.videoId];
      return {
        url: `https://www.youtube.com/watch?v=${v.id.videoId}`,
        title: v.snippet?.title ?? "",
        thumbnail: `https://i.ytimg.com/vi/${v.id.videoId}/mqdefault.jpg`,
        likes: stats?.likeCount ?? null,
        comments: stats?.commentCount ?? null,
        shares: null,
        publishedAt: v.snippet?.publishedAt ?? null,
        views: stats?.viewCount ?? null,
      };
    });

    // Compute averages from top posts
    const likeCounts = result.topPosts
      .map((p) => p.likes)
      .filter((x): x is number => x !== null);
    const commentCounts = result.topPosts
      .map((p) => p.comments)
      .filter((x): x is number => x !== null);
    if (likeCounts.length > 0)
      result.avgLikes = Math.round(
        likeCounts.reduce((a, b) => a + b, 0) / likeCounts.length,
      );
    if (commentCounts.length > 0)
      result.avgComments = Math.round(
        commentCounts.reduce((a, b) => a + b, 0) / commentCounts.length,
      );
  } catch (err) {
    console.error("[YouTube] error:", err instanceof Error ? err.message : err);
  }

  return result;
}
