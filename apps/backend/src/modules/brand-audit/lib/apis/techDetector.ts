/**
 * HTML-based tech stack detector.
 * Scrapes a homepage and extracts: tech stack, fonts, color palette,
 * developer credit, and SEO signals — no third-party API key required.
 * BuiltWith API is used when BUILTWITH_API_KEY is set.
 */

import { fetchWithRetry } from "../fetchWithRetry";

// ── Interfaces ─────────────────────────────────────────────────────────────────

export interface TechStackResult {
  cms: string | null;
  framework: string | null;
  analytics: string[];
  adPixels: string[];
  otherTech: string[];
}

export interface FontResult {
  families: string[];
  googleFontsUrl: string | null;
}

export interface ColorResult {
  palette: string[]; // deduplicated hex values ordered by frequency
}

export interface DeveloperCredit {
  name: string | null;
  url: string | null;
  confidence: "Confirmed" | "Likely" | "Unknown";
}

export interface SeoSignals {
  metaTitle: string | null;
  metaDescription: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  hasSSL: boolean;
  hasRobotsTxt: boolean | null;
  hasSitemap: boolean | null;
  canonical: string | null;
}

export interface TechDetectionResult {
  techStack: TechStackResult;
  fonts: FontResult;
  colors: ColorResult;
  developerCredit: DeveloperCredit;
  seo: SeoSignals;
}

// ── Tech pattern registry ──────────────────────────────────────────────────────

type TechCategory = "cms" | "framework" | "analytics" | "adPixels" | "other";

const TECH_PATTERNS: Array<{
  name: string;
  pattern: RegExp;
  category: TechCategory;
}> = [
  // CMS
  {
    name: "WordPress",
    pattern: /\/wp-content\/|\/wp-includes\/|wp-json|wordpress/i,
    category: "cms",
  },
  {
    name: "Wix",
    pattern: /wix\.com|wixstatic\.com|\.wixsite\.com/i,
    category: "cms",
  },
  {
    name: "Squarespace",
    pattern: /squarespace\.com|sqsp\.net/i,
    category: "cms",
  },
  {
    name: "Webflow",
    pattern: /webflow\.com|\.webflow\.io/i,
    category: "cms",
  },
  {
    name: "Shopify",
    pattern: /shopify\.com|shopify_analytics|cdn\.shopify/i,
    category: "cms",
  },
  { name: "Joomla", pattern: /\/components\/com_|joomla/i, category: "cms" },
  {
    name: "Drupal",
    pattern: /drupal|\/sites\/default\/files/i,
    category: "cms",
  },
  // Frameworks
  {
    name: "Next.js",
    pattern: /_next\/static|__NEXT_DATA__|nextjs/i,
    category: "framework",
  },
  {
    name: "React",
    pattern:
      /react\.development|react-dom|__reactInternalInstance|data-reactroot/i,
    category: "framework",
  },
  {
    name: "Vue.js",
    pattern: /vue\.js|vue\.min\.js|vuejs/i,
    category: "framework",
  },
  {
    name: "Angular",
    pattern: /angular\.min\.js|ng-version|angular\.js/i,
    category: "framework",
  },
  {
    name: "Nuxt.js",
    pattern: /__NUXT__|nuxt-link/i,
    category: "framework",
  },
  // Analytics
  {
    name: "Google Analytics 4",
    pattern: /gtag\(|G-[A-Z0-9]{6,}/i,
    category: "analytics",
  },
  {
    name: "Google Tag Manager",
    pattern: /googletagmanager\.com\/gtm\.js|GTM-/i,
    category: "analytics",
  },
  { name: "Hotjar", pattern: /hotjar\.com|hotjar/i, category: "analytics" },
  { name: "Mixpanel", pattern: /mixpanel/i, category: "analytics" },
  { name: "Microsoft Clarity", pattern: /clarity\.ms/i, category: "analytics" },
  // Ad Pixels
  {
    name: "Meta Pixel",
    pattern: /connect\.facebook\.net|fbq\(|fbevents\.js/i,
    category: "adPixels",
  },
  {
    name: "Google Ads",
    pattern: /googleadservices\.com|AW-[0-9]+|google_conversion/i,
    category: "adPixels",
  },
  {
    name: "LinkedIn Insight Tag",
    pattern: /snap\.licdn\.com/i,
    category: "adPixels",
  },
  // Other
  { name: "HubSpot", pattern: /hubspot\.com|hs-analytics/i, category: "other" },
  {
    name: "Intercom",
    pattern: /intercom\.com|intercomSettings/i,
    category: "other",
  },
  { name: "Tawk.to", pattern: /tawk\.to/i, category: "other" },
  {
    name: "WhatsApp Widget",
    pattern: /wa\.me|api\.whatsapp\.com/i,
    category: "other",
  },
  { name: "Cloudflare", pattern: /cloudflare|__cf_bm/i, category: "other" },
];

// Colors that are UI boilerplate — not brand colours
const SKIP_COLORS = new Set([
  "#ffffff",
  "#000000",
  "#fff",
  "#000",
  "#333333",
  "#666666",
  "#999999",
  "#cccccc",
  "#eeeeee",
  "#f5f5f5",
  "#f8f8f8",
  "#f0f0f0",
  "#e5e5e5",
  "#d4d4d4",
  "#333",
  "#666",
  "#999",
  "#ccc",
  "#eee",
  "#e0e0e0",
  "#1a1a1a",
  "#2d2d2d",
  "#4a4a4a",
  "#transparent",
]);

// Generic font family names (skip)
const GENERIC_FONTS = new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "inherit",
  "initial",
  "unset",
  "revert",
  "-apple-system",
  "blinkmacsystemfont",
  "segoe ui",
  "roboto",
  "oxygen",
  "ubuntu",
  "cantarell",
  "helvetica neue",
  "arial",
  "helvetica",
  "times new roman",
  "georgia",
  "verdana",
  "tahoma",
  "trebuchet ms",
  "courier new",
]);

// ── Main detector ──────────────────────────────────────────────────────────────

export async function detectTechAndAssets(
  websiteUrl: string,
): Promise<TechDetectionResult> {
  const normalised = websiteUrl.startsWith("http")
    ? websiteUrl
    : `https://${websiteUrl}`;

  const empty: TechDetectionResult = {
    techStack: {
      cms: null,
      framework: null,
      analytics: [],
      adPixels: [],
      otherTech: [],
    },
    fonts: { families: [], googleFontsUrl: null },
    colors: { palette: [] },
    developerCredit: { name: null, url: null, confidence: "Unknown" },
    seo: {
      metaTitle: null,
      metaDescription: null,
      ogTitle: null,
      ogDescription: null,
      ogImage: null,
      hasSSL: normalised.startsWith("https://"),
      hasRobotsTxt: null,
      hasSitemap: null,
      canonical: null,
    },
  };

  try {
    const res = await fetchWithRetry(
      normalised,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
      },
      1,
      20000,
    );

    if (!res.ok) return empty;
    const html = await res.text();

    detectTech(html, empty.techStack);
    detectFonts(html, empty.fonts);
    detectColors(html, empty.colors);
    detectDeveloperCredit(html, empty.developerCredit);
    extractSeoSignals(html, empty.seo);

    // robots.txt and sitemap checks (fire-and-forget, short timeout)
    const origin = new URL(normalised).origin;
    void Promise.allSettled([
      fetchWithRetry(`${origin}/robots.txt`, {}, 0, 5000).then((r) => {
        empty.seo.hasRobotsTxt = r.ok;
      }),
      fetchWithRetry(`${origin}/sitemap.xml`, {}, 0, 5000).then((r) => {
        empty.seo.hasSitemap = r.ok;
      }),
    ]);
  } catch (err) {
    console.warn(
      "[techDetector] error:",
      err instanceof Error ? err.message : err,
    );
  }

  return empty;
}

// ── Tech stack ─────────────────────────────────────────────────────────────────

function detectTech(html: string, out: TechStackResult): void {
  for (const { name, pattern, category } of TECH_PATTERNS) {
    if (!pattern.test(html)) continue;
    if (category === "cms" && !out.cms) out.cms = name;
    else if (category === "framework" && !out.framework) out.framework = name;
    else if (category === "analytics" && !out.analytics.includes(name))
      out.analytics.push(name);
    else if (category === "adPixels" && !out.adPixels.includes(name))
      out.adPixels.push(name);
    else if (category === "other" && !out.otherTech.includes(name))
      out.otherTech.push(name);
  }
}

// ── Fonts ──────────────────────────────────────────────────────────────────────

function detectFonts(html: string, out: FontResult): void {
  // Google Fonts link tags
  const googleFontsUrls =
    html.match(/https?:\/\/fonts\.googleapis\.com\/css[^"'\s)]*/gi) ?? [];
  if (googleFontsUrls.length > 0) {
    out.googleFontsUrl = googleFontsUrls[0] ?? null;
    for (const fUrl of googleFontsUrls) {
      const familyMatch = fUrl.match(/family=([^&]+)/);
      if (!familyMatch) continue;
      const families = (familyMatch[1] ?? "")
        .split("|")
        .map(
          (f) =>
            f.split(":")[0]?.replace(/\+/g, " ").replace(/%20/g, " ").trim() ??
            "",
        )
        .filter(Boolean);
      for (const f of families) {
        if (!out.families.includes(f)) out.families.push(f);
      }
    }
  }

  // CSS font-family declarations in <style> blocks
  const styleBlocks = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) ?? [];
  const cssText = styleBlocks.join("\n");
  const familyPattern = /font-family\s*:\s*([^;{}]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = familyPattern.exec(cssText)) !== null) {
    const raw = m[1] ?? "";
    // Split on commas and take first (most specific) font
    const first = raw.split(",")[0]?.replace(/['"]/g, "").trim().toLowerCase();
    if (!first) continue;
    if (GENERIC_FONTS.has(first)) continue;
    if (first.startsWith("var(") || first.length < 2 || first.length > 60)
      continue;
    const display = first
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    if (!out.families.includes(display)) out.families.push(display);
  }

  out.families = [...new Set(out.families)].slice(0, 6);
}

// ── Color palette ──────────────────────────────────────────────────────────────

function detectColors(html: string, out: ColorResult): void {
  // Only look in CSS blocks and inline styles
  const styleBlocks = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) ?? [];
  const inlineStyles =
    html.match(/style=["']([^"']{0,500})["']/gi)?.map((s) => s) ?? [];
  const source = [...styleBlocks, ...inlineStyles].join(" ");

  const hexPattern = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/g;
  const counts: Record<string, number> = {};
  let hm: RegExpExecArray | null;
  while ((hm = hexPattern.exec(source)) !== null) {
    const raw = (hm[0] ?? "").toLowerCase();
    // Expand 3-char to 6-char
    const hex =
      raw.length === 4
        ? `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`
        : raw;
    if (SKIP_COLORS.has(hex)) continue;
    counts[hex] = (counts[hex] ?? 0) + 1;
  }

  out.palette = Object.entries(counts)
    .filter(([, c]) => c >= 2)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([color]) => color);
}

// ── Developer credit ───────────────────────────────────────────────────────────

function detectDeveloperCredit(html: string, out: DeveloperCredit): void {
  // Look in footer first, then last 5000 chars
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  const searchArea = footerMatch?.[0] ?? html.slice(-5000);

  // Pattern: "built by <a href="...">Agency Name</a>"
  const linkedPattern =
    /(?:built|developed|designed|created|powered)\s+by\s+<a[^>]+href=["']([^"']+)["'][^>]*>([^<]{2,80})<\/a>/gi;
  let m: RegExpExecArray | null;
  if ((m = linkedPattern.exec(searchArea)) !== null) {
    out.name = m[2]?.trim() ?? null;
    out.url = m[1]?.trim() ?? null;
    out.confidence = "Confirmed";
    return;
  }

  // Plain text: "built by Agency Name"
  const plainPattern =
    /(?:built|developed|designed|created|powered)\s+by\s+([A-Z][^\n<·•|]{3,60})/gi;
  if ((m = plainPattern.exec(searchArea)) !== null) {
    const credit = (m[1] ?? "").trim().slice(0, 80);
    if (!/copyright|©|rights\s+reserved|privacy|terms/i.test(credit)) {
      out.name = credit;
      out.confidence = "Likely";
    }
  }
}

// ── SEO signals ────────────────────────────────────────────────────────────────

function extractSeoSignals(html: string, out: SeoSignals): void {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  out.metaTitle =
    titleMatch?.[1]
      ?.replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .trim() ?? null;

  const metaDesc =
    html.match(
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{5,500})["']/i,
    ) ??
    html.match(
      /<meta[^>]+content=["']([^"']{5,500})["'][^>]+name=["']description["']/i,
    );
  out.metaDescription = metaDesc?.[1]?.trim() ?? null;

  const ogTitle = html.match(
    /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i,
  );
  out.ogTitle = ogTitle?.[1]?.trim() ?? null;

  const ogDesc = html.match(
    /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i,
  );
  out.ogDescription = ogDesc?.[1]?.trim() ?? null;

  const ogImg =
    html.match(
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    ) ??
    html.match(
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    );
  out.ogImage = ogImg?.[1]?.trim() ?? null;

  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
  );
  out.canonical = canonical?.[1]?.trim() ?? null;
}
