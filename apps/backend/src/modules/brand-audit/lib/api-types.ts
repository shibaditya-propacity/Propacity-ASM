/**
 * External API response shapes used across the brand-audit data collection lib.
 * These types describe third-party service payloads — they are not domain models.
 */

// ── People Data Labs (PDL) ────────────────────────────────────────────────────

export interface PDLCompanyResponse {
  id?: string;
  name?: string;
  domain?: string;
  website?: string;
  industry?: string;
  industries?: string[];
  description?: string;
  keywords?: string[];
  technologies?: string[];
  founded_year?: number;
  naics_codes?: string[];
  location?: {
    country?: {
      code?: string;
      name?: string;
      latitude?: number;
      longitude?: number;
    };
    state?: { id?: number; name?: string; code?: string };
    city?: { id?: number; name?: string };
    address?: string;
    postal_code?: string;
    phone?: string;
  };
  financial?: {
    stock_symbol?: string;
    total_funding?: number;
    funding_stage?: string;
  };
  socials?: {
    linkedin_url?: string;
    twitter_url?: string;
    facebook_url?: string;
    instagram_url?: string;
    youtube_url?: string;
  };
  workforce?: {
    observed_employee_count?: number;
    department_headcount?: Record<string, number>;
  };
  logo_url?: string;
  seo_description?: string;
  updated_at?: string;
}

// ── Serper / DataForSEO ───────────────────────────────────────────────────────

export interface SerperSearchResult {
  organic?: SerperOrganicItem[];
  searchParameters?: { q: string; gl: string; hl: string; num: number };
  knowledgeGraph?: Record<string, unknown>;
  answerBox?: Record<string, unknown>;
  topStories?: Record<string, unknown>[];
}

export interface SerperOrganicItem {
  title: string;
  link: string;
  snippet: string;
  position: number;
  date?: string;
}

export interface DataForSEOBacklinksResponse {
  target: string;
  total_count?: number;
  referring_domains?: number;
  rank?: number;
  backlinks_spam_score?: number;
  referring_ips?: number;
}

export interface DataForSEOOnPageResult {
  crawl_progress?: string;
  crawl_status?: {
    max_crawl_pages: number;
    pages_in_queue: number;
    pages_crawled: number;
  };
  domain_info?: {
    name: string;
    cms?: string;
    ip?: string;
    ssl_info?: { valid_certificate: boolean; certificate_issuer?: string };
  };
  page_metrics?: {
    broken_links?: number;
    broken_resources?: number;
    duplicate_title?: number;
    duplicate_description?: number;
    no_title?: number;
    no_description?: number;
    no_h1?: number;
    title_too_long?: number;
    title_too_short?: number;
  };
}

// ── Crawl4AI ──────────────────────────────────────────────────────────────────

export interface WebCrawlerResponse {
  job_id: string;
  status: "pending" | "processing" | "done" | "failed";
  pages?: WebCrawlerPage[];
  total_pages?: number;
}

export interface WebCrawlerPage {
  url: string;
  title?: string;
  meta_description?: string;
  content?: string;
  headings?: { h1?: string[]; h2?: string[] };
  status_code?: number;
}

// ── Apify Instagram ───────────────────────────────────────────────────────────

export interface ApifyInstagramProfile {
  pk?: string;
  username: string;
  fullName?: string;
  biography?: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isBusinessAccount?: boolean;
  isVerified?: boolean;
  profilePicUrl?: string;
  externalUrl?: string;
}

export interface ApifyInstagramPost {
  id: string;
  type: "Image" | "Video" | "Sidecar";
  likesCount: number;
  commentsCount: number;
  caption?: string;
  timestamp: string;
  displayUrl?: string;
  videoUrl?: string;
}

// ── Google Places ─────────────────────────────────────────────────────────────

export interface GooglePlaceResult {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export interface GooglePlaceDetails {
  name: string;
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleReview[];
  formatted_address?: string;
  website?: string;
  formatted_phone_number?: string;
  opening_hours?: { open_now: boolean };
}

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}
