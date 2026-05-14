/**
 * Idempotent seed script — run with: pnpm db:seed
 * Seeds all 34 integration providers. Safe to re-run.
 *
 * Logo URL rules:
 *  - Use https://cdn.simpleicons.org/{slug} (no color param) for icons that
 *    exist in SimpleIcons — the CDN color-path feature is inconsistently cached.
 *  - Use https://placehold.co/40x40/{bg}/{fg}?text={XX} for tools that have
 *    no SimpleIcons entry (niche SEO tools, Indian real-estate portals, etc.).
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PROVIDERS: Array<{
  name: string;
  category: string;
  description: string;
  authType: string;
  logoUrl: string;
  moduleRelevance: string[];
  isActive?: boolean;
}> = [
  // Ad Platforms
  {
    name: "Meta Ads",
    category: "AdPlatforms",
    description:
      "Facebook and Instagram advertising platform for campaign management and audience targeting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/meta",
    moduleRelevance: ["Ads", "Social", "Reputation"],
    isActive: false, // disabled — Meta developer account pending approval
  },
  {
    name: "Google Ads",
    category: "AdPlatforms",
    description:
      "Google's advertising platform for search, display, and YouTube campaigns.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googleads",
    moduleRelevance: ["Ads"],
  },
  {
    name: "LinkedIn Ads",
    category: "AdPlatforms",
    description:
      "Professional audience advertising platform for B2B and real-estate developer targeting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/linkedin",
    moduleRelevance: ["Ads", "Social"],
  },
  {
    name: "YouTube Ads",
    category: "AdPlatforms",
    description:
      "Video advertising via Google Ads for YouTube pre-roll and discovery campaigns.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/youtube",
    moduleRelevance: ["Ads", "Social"],
  },
  {
    name: "Programmatic Display",
    category: "AdPlatforms",
    description: "Automated programmatic display advertising via DSP partners.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/googletagmanager",
    moduleRelevance: ["Ads"],
  },
  {
    name: "OTT/CTV Ads",
    category: "AdPlatforms",
    description:
      "Over-the-top and connected TV advertising for streaming platform campaigns.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/FF9900/ffffff?text=OT",
    moduleRelevance: ["Ads"],
  },

  // Analytics
  {
    name: "Google Analytics 4",
    category: "Analytics",
    description:
      "Next-generation web and app analytics with event-based tracking and AI-powered insights.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googleanalytics",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },
  {
    name: "Google Search Console",
    category: "Analytics",
    description:
      "Monitor and troubleshoot your site's presence in Google Search results.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googlesearchconsole",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },
  {
    name: "Google Tag Manager",
    category: "Analytics",
    description:
      "Manage and deploy marketing tags without modifying the site code.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googletagmanager",
    moduleRelevance: ["Ads", "Website"],
  },
  {
    name: "Hotjar",
    category: "Analytics",
    description:
      "Heatmaps, session recordings, and user feedback to understand behaviour on your site.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/hotjar",
    moduleRelevance: ["Ads", "Website"],
  },
  {
    name: "Microsoft Clarity",
    category: "Analytics",
    description:
      "Free heatmap and session recording tool by Microsoft for UX analysis.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/microsoftclarity",
    moduleRelevance: ["Ads", "Website"],
  },

  // SEO Tools
  {
    name: "SEMrush",
    category: "SeoTools",
    description:
      "All-in-one SEO toolkit for keyword research, competitive analysis, and site audits.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/semrush",
    moduleRelevance: ["Ads", "SEO"],
  },
  {
    name: "Ahrefs",
    category: "SeoTools",
    description:
      "Backlink checker, keyword explorer, and site audit platform for SEO professionals.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/FF7D00/ffffff?text=AH",
    moduleRelevance: ["Ads", "SEO"],
  },
  {
    name: "Moz",
    category: "SeoTools",
    description:
      "SEO software for link building, keyword research, and site crawl analysis.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/1D62E0/ffffff?text=MZ",
    moduleRelevance: ["SEO"],
  },
  {
    name: "Screaming Frog",
    category: "SeoTools",
    description:
      "Website crawler for technical SEO audits, broken link checking, and metadata review.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/FFCC00/000000?text=SF",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },

  // Reviews & Listings
  {
    name: "Google Business Profile",
    category: "ReviewsListings",
    description:
      "Manage your business listing, reviews, and photos on Google Search and Maps.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googlemybusiness",
    moduleRelevance: ["SEO", "Reputation", "Social"],
  },
  {
    name: "MagicBricks",
    category: "ReviewsListings",
    description:
      "India's leading property portal for listings, leads, and developer brand visibility.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/FF6600/ffffff?text=MB",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "99acres",
    category: "ReviewsListings",
    description:
      "Real-estate listing platform for property visibility and lead generation in India.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/D92228/ffffff?text=9A",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "Housing.com",
    category: "ReviewsListings",
    description:
      "PropTech platform for property listings, virtual tours, and buyer insights.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/0070EF/ffffff?text=HG",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "JLL/Anarock",
    category: "ReviewsListings",
    description:
      "Enterprise real-estate consultancy data feed for project listings and market analytics.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/1277E1/ffffff?text=JL",
    moduleRelevance: ["Reputation"],
  },

  // Social Media
  {
    name: "Instagram",
    category: "SocialMedia",
    description:
      "Connect Instagram Business to pull post performance, follower growth, and story metrics.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/instagram",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "LinkedIn Page",
    category: "SocialMedia",
    description:
      "Sync LinkedIn Company Page analytics for follower demographics and post engagement.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/linkedin",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "YouTube Channel",
    category: "SocialMedia",
    description:
      "Pull YouTube channel analytics including views, watch time, and subscriber trends.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/youtube",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "Twitter/X",
    category: "SocialMedia",
    description:
      "Monitor brand mentions, follower counts, and tweet engagement on Twitter/X.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/x",
    moduleRelevance: ["Social", "Reputation"],
  },

  // Communication
  {
    name: "Slack",
    category: "Communication",
    description:
      "Receive ASM alerts, report digests, and audit notifications in Slack channels.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/slack",
    moduleRelevance: [],
  },
  {
    name: "WhatsApp Business",
    category: "Communication",
    description:
      "Send automated lead follow-ups and campaign updates via WhatsApp Business API.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/whatsapp",
    moduleRelevance: ["Social", "Promoter"],
  },

  // Finance & Billing
  {
    name: "Razorpay",
    category: "FinanceBilling",
    description:
      "India's leading payment gateway for booking payments, token collections, and refunds.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/razorpay",
    moduleRelevance: ["Launch"],
  },
  {
    name: "Stripe",
    category: "FinanceBilling",
    description:
      "Global payments platform for subscriptions, one-time charges, and invoicing.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/stripe",
    moduleRelevance: ["Launch"],
  },
  {
    name: "Zoho Books",
    category: "FinanceBilling",
    description:
      "Cloud accounting platform for invoices, expenses, and financial reporting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/zoho",
    moduleRelevance: [],
  },
  {
    name: "Tally Prime",
    category: "FinanceBilling",
    description:
      "India's widely-used accounting software for real-estate developer bookkeeping.",
    authType: "API_KEY",
    logoUrl: "https://placehold.co/40x40/0057A8/ffffff?text=TP",
    moduleRelevance: [],
  },

  // CRM & Lead Routing
  {
    name: "Salesforce",
    category: "CrmLeadRouting",
    description:
      "Enterprise CRM for lead management, sales pipeline, and customer journey tracking.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/salesforce",
    moduleRelevance: [],
  },
  {
    name: "HubSpot",
    category: "CrmLeadRouting",
    description:
      "Marketing and CRM platform for lead capture, nurturing, and deal management.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/hubspot",
    moduleRelevance: [],
  },

  // Domains & Hosting
  {
    name: "Cloudflare",
    category: "DomainsHosting",
    description:
      "DNS, CDN, and security platform for website performance and DDoS protection.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/cloudflare",
    moduleRelevance: ["Ads", "Website"],
  },

  // AI & Content
  {
    name: "Anthropic Claude",
    category: "AiContent",
    description:
      "Claude AI for content generation, copy review, and brand voice automation.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/anthropic",
    moduleRelevance: ["Reputation"],
  },
];

async function main() {
  console.log("Seeding integration providers...");
  let upserted = 0;

  for (const p of PROVIDERS) {
    const active = p.isActive ?? true;
    await prisma.provider.upsert({
      where: { name: p.name },
      update: {
        category: p.category,
        description: p.description,
        authType: p.authType,
        logoUrl: p.logoUrl,
        moduleRelevance: p.moduleRelevance,
        isActive: active,
      },
      create: {
        name: p.name,
        category: p.category,
        description: p.description,
        authType: p.authType,
        logoUrl: p.logoUrl,
        moduleRelevance: p.moduleRelevance,
        isActive: active,
      },
    });
    upserted++;
  }

  console.log(`Seeded ${upserted} providers.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
