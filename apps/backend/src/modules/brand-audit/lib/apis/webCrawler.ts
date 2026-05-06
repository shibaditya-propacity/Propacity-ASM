import axios from "axios";
import type { WebCrawlerPage } from "@/types/apiResponses";

// ── Crawl4AI self-hosted server ────────────────────────────────────────────────
// Run locally with: docker run -d -p 11235:11235 --shm-size=1g unclecode/crawl4ai:latest
// Set CRAWL4AI_BASE_URL in .env to point to your server (default: http://localhost:11235)

const CRAWL4AI_BASE = process.env.CRAWL4AI_BASE_URL || "http://localhost:11235";

const c4aiClient = axios.create({
  baseURL: CRAWL4AI_BASE,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

// ── Crawl4AI primary crawler ───────────────────────────────────────────────────

async function crawlWithCrawl4AI(
  websiteUrl: string,
): Promise<WebCrawlerPage | null> {
  try {
    const response = await c4aiClient.post("/md", { url: websiteUrl });
    const data = response.data;

    // Handle multiple possible response shapes from Crawl4AI
    let markdown: string = "";
    if (typeof data === "string") {
      markdown = data;
    } else if (typeof data?.markdown === "string") {
      markdown = data.markdown;
    } else if (typeof data?.result?.markdown === "string") {
      markdown = data.result.markdown;
    } else if (typeof data?.content === "string") {
      markdown = data.content;
    }

    if (!markdown || markdown.length < 100) {
      console.warn(
        "[webCrawler] Crawl4AI returned empty/short markdown for",
        websiteUrl,
      );
      return null;
    }

    console.log(
      "[webCrawler] Crawl4AI succeeded, markdown length:",
      markdown.length,
    );
    return markdownToPage(markdown, websiteUrl);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn("[webCrawler] Crawl4AI unavailable:", msg);
    return null;
  }
}

// ── Markdown parser ────────────────────────────────────────────────────────────

function markdownToPage(markdown: string, url: string = ""): WebCrawlerPage {
  const lines = markdown.split("\n");
  const h1 = lines
    .filter((l) => /^# /.test(l))
    .map((l) => l.replace(/^# /, "").trim());
  const h2 = lines
    .filter((l) => /^## /.test(l))
    .map((l) => l.replace(/^## /, "").trim());
  const title = h1[0] || "";
  const metaLine = lines.find((l) => l.toLowerCase().includes("description:"));
  return {
    url,
    title,
    meta_description: metaLine?.replace(/.*description:/i, "").trim(),
    content: markdown,
    headings: { h1, h2 },
    status_code: 200,
  };
}

// ── Direct website fetch fallback ──────────────────────────────────────────────
// Used when Crawl4AI is unavailable (not running, connection refused, etc.)
// Fetches the homepage directly and extracts key SEO/content signals.

async function fetchWebsiteDirect(
  websiteUrl: string,
): Promise<WebCrawlerPage | null> {
  try {
    const response = await axios.get<string>(websiteUrl, {
      timeout: 20000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      maxRedirects: 5,
    });

    const html = response.data as string;

    // Title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title =
      titleMatch?.[1]
        ?.replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .trim() || "";

    // Meta description
    const metaMatch =
      html.match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{5,300})["']/i,
      ) ||
      html.match(
        /<meta[^>]+content=["']([^"']{5,300})["'][^>]+name=["']description["']/i,
      );
    const metaDesc = metaMatch?.[1]?.trim() || "";

    // H1 tags (strip inner HTML tags)
    const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    const h1 = h1Matches
      .map((m) =>
        m[1]
          .replace(/<[^>]*>/g, "")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean)
      .slice(0, 5);

    // H2 tags
    const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
    const h2 = h2Matches
      .map((m) =>
        m[1]
          .replace(/<[^>]*>/g, "")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean)
      .slice(0, 10);

    // Strip scripts/styles then convert to readable text
    const cleanHtml = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
    const textContent = cleanHtml
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/\s+/g, " ")
      .trim()
      .substring(0, 5000);

    return {
      url: websiteUrl,
      title,
      meta_description: metaDesc,
      content: textContent,
      headings: { h1, h2 },
      status_code: response.status,
    };
  } catch (err) {
    console.error(
      "[webCrawler] Direct fetch failed:",
      err instanceof Error ? err.message : err,
    );
    return null;
  }
}

// ── Insights extractor ─────────────────────────────────────────────────────────

export function extractWebsiteInsights(pages: WebCrawlerPage[]) {
  const ctaPatterns =
    /\b(book|enquire|enquiry|contact|call|whatsapp|download|get quote|schedule|visit|register|apply)\b/gi;
  const formPatterns = /<form|contact form|enquiry form|\bform\b/gi;
  const analyticsPatterns =
    /gtag|GA4|google-analytics|googletagmanager|fbq|pixel/gi;
  const pixelPatterns = /fbq|facebook pixel|meta pixel/gi;
  const whatsappPatterns = /whatsapp|wa\.me|click.to.call|\+91\s*\d{10}/gi;

  const allContent = pages.map((p) => p.content || "").join("\n");
  const allTitles = pages.map((p) => p.title).filter(Boolean);
  const allH1 = pages.flatMap((p) => p.headings?.h1 || []);
  const allH2 = pages.flatMap((p) => p.headings?.h2 || []);
  const allMetaDesc = pages.map((p) => p.meta_description).filter(Boolean);

  const ctaMatches = Array.from(new Set(allContent.match(ctaPatterns) || []));
  const hasForm = formPatterns.test(allContent);
  const hasAnalytics = analyticsPatterns.test(allContent);
  const hasPixel = pixelPatterns.test(allContent);
  const hasWhatsapp = whatsappPatterns.test(allContent);

  return {
    pages: pages.length,
    titles: allTitles,
    metaDescriptions: allMetaDesc,
    h1Tags: allH1,
    h2Tags: allH2,
    ctasFound: ctaMatches,
    hasLeadForm: hasForm,
    hasWhatsapp,
    hasAnalytics,
    hasFacebookPixel: hasPixel,
    contentSummary: allContent.substring(0, 5000),
  };
}

// ── Public entry point ─────────────────────────────────────────────────────────
// 1. Try Crawl4AI server (self-hosted Docker)
// 2. Fall back to direct homepage fetch via axios

export async function crawlWebsite(
  websiteUrl: string,
): Promise<ReturnType<typeof extractWebsiteInsights> | null> {
  // 1. Try Crawl4AI
  const c4aiPage = await crawlWithCrawl4AI(websiteUrl);
  if (
    c4aiPage &&
    ((c4aiPage.content?.length ?? 0) > 100 ||
      (c4aiPage.headings?.h1?.length ?? 0) > 0)
  ) {
    console.log("[webCrawler] Crawl4AI succeeded for", websiteUrl);
    return extractWebsiteInsights([c4aiPage]);
  }

  // 2. Direct homepage fetch fallback
  console.warn("[webCrawler] Falling back to direct fetch for", websiteUrl);
  const directPage = await fetchWebsiteDirect(websiteUrl);
  if (directPage) {
    console.log("[webCrawler] Direct fetch succeeded for", websiteUrl);
    return extractWebsiteInsights([directPage]);
  }

  return null;
}
