/**
 * Idempotent seed script — run with: pnpm db:seed
 * Seeds all 34 integration providers. Safe to re-run.
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
}> = [
  // Ad Platforms
  {
    name: "Meta Ads",
    category: "AdPlatforms",
    description:
      "Facebook and Instagram advertising platform for campaign management and audience targeting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/meta/0866FF",
    moduleRelevance: ["Ads", "Social", "Reputation"],
  },
  {
    name: "Google Ads",
    category: "AdPlatforms",
    description:
      "Google's advertising platform for search, display, and YouTube campaigns.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googleads/4285F4",
    moduleRelevance: ["Ads"],
  },
  {
    name: "LinkedIn Ads",
    category: "AdPlatforms",
    description:
      "Professional audience advertising platform for B2B and real-estate developer targeting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/linkedin/0A66C2",
    moduleRelevance: ["Ads", "Social"],
  },
  {
    name: "YouTube Ads",
    category: "AdPlatforms",
    description:
      "Video advertising via Google Ads for YouTube pre-roll and discovery campaigns.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/youtube/FF0000",
    moduleRelevance: ["Ads", "Social"],
  },
  {
    name: "Programmatic Display",
    category: "AdPlatforms",
    description: "Automated programmatic display advertising via DSP partners.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/googletagmanager/246FDB",
    moduleRelevance: ["Ads"],
  },
  {
    name: "OTT/CTV Ads",
    category: "AdPlatforms",
    description:
      "Over-the-top and connected TV advertising for streaming platform campaigns.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/amazonaws/FF9900",
    moduleRelevance: ["Ads"],
  },

  // Analytics
  {
    name: "Google Analytics 4",
    category: "Analytics",
    description:
      "Next-generation web and app analytics with event-based tracking and AI-powered insights.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googleanalytics/E37400",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },
  {
    name: "Google Search Console",
    category: "Analytics",
    description:
      "Monitor and troubleshoot your site's presence in Google Search results.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googlesearchconsole/458CF5",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },
  {
    name: "Google Tag Manager",
    category: "Analytics",
    description:
      "Manage and deploy marketing tags without modifying the site code.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googletagmanager/246FDB",
    moduleRelevance: ["Ads", "Website"],
  },
  {
    name: "Hotjar",
    category: "Analytics",
    description:
      "Heatmaps, session recordings, and user feedback to understand behaviour on your site.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/hotjar/FD3A5C",
    moduleRelevance: ["Ads", "Website"],
  },
  {
    name: "Microsoft Clarity",
    category: "Analytics",
    description:
      "Free heatmap and session recording tool by Microsoft for UX analysis.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/microsoftazure/0078D4",
    moduleRelevance: ["Ads", "Website"],
  },

  // SEO Tools
  {
    name: "SEMrush",
    category: "SeoTools",
    description:
      "All-in-one SEO toolkit for keyword research, competitive analysis, and site audits.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/semrush/FF642D",
    moduleRelevance: ["Ads", "SEO"],
  },
  {
    name: "Ahrefs",
    category: "SeoTools",
    description:
      "Backlink checker, keyword explorer, and site audit platform for SEO professionals.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/ahrefs/FF7D00",
    moduleRelevance: ["Ads", "SEO"],
  },
  {
    name: "Moz",
    category: "SeoTools",
    description:
      "SEO software for link building, keyword research, and site crawl analysis.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/moz/1D62E0",
    moduleRelevance: ["SEO"],
  },
  {
    name: "Screaming Frog",
    category: "SeoTools",
    description:
      "Website crawler for technical SEO audits, broken link checking, and metadata review.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/screamingfrog/FFCC00",
    moduleRelevance: ["Ads", "SEO", "Website"],
  },

  // Reviews & Listings
  {
    name: "Google Business Profile",
    category: "ReviewsListings",
    description:
      "Manage your business listing, reviews, and photos on Google Search and Maps.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/googlemybusiness/4285F4",
    moduleRelevance: ["SEO", "Reputation", "Social"],
  },
  {
    name: "MagicBricks",
    category: "ReviewsListings",
    description:
      "India's leading property portal for listings, leads, and developer brand visibility.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/homeadvisor/FF6600",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "99acres",
    category: "ReviewsListings",
    description:
      "Real-estate listing platform for property visibility and lead generation in India.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/realtor/D92228",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "Housing.com",
    category: "ReviewsListings",
    description:
      "PropTech platform for property listings, virtual tours, and buyer insights.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/housedotcom/0070EF",
    moduleRelevance: ["Reputation"],
  },
  {
    name: "JLL/Anarock",
    category: "ReviewsListings",
    description:
      "Enterprise real-estate consultancy data feed for project listings and market analytics.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/zillow/1277E1",
    moduleRelevance: ["Reputation"],
  },

  // Social Media
  {
    name: "Instagram",
    category: "SocialMedia",
    description:
      "Connect Instagram Business to pull post performance, follower growth, and story metrics.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/instagram/E4405F",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "LinkedIn Page",
    category: "SocialMedia",
    description:
      "Sync LinkedIn Company Page analytics for follower demographics and post engagement.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/linkedin/0A66C2",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "YouTube Channel",
    category: "SocialMedia",
    description:
      "Pull YouTube channel analytics including views, watch time, and subscriber trends.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/youtube/FF0000",
    moduleRelevance: ["Social", "Reputation"],
  },
  {
    name: "Twitter/X",
    category: "SocialMedia",
    description:
      "Monitor brand mentions, follower counts, and tweet engagement on Twitter/X.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/x/000000",
    moduleRelevance: ["Social", "Reputation"],
  },

  // Communication
  {
    name: "Slack",
    category: "Communication",
    description:
      "Receive ASM alerts, report digests, and audit notifications in Slack channels.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/slack/4A154B",
    moduleRelevance: [],
  },
  {
    name: "WhatsApp Business",
    category: "Communication",
    description:
      "Send automated lead follow-ups and campaign updates via WhatsApp Business API.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/whatsapp/25D366",
    moduleRelevance: ["Social", "Promoter"],
  },

  // Finance & Billing
  {
    name: "Razorpay",
    category: "FinanceBilling",
    description:
      "India's leading payment gateway for booking payments, token collections, and refunds.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/razorpay/3395FF",
    moduleRelevance: ["Launch"],
  },
  {
    name: "Stripe",
    category: "FinanceBilling",
    description:
      "Global payments platform for subscriptions, one-time charges, and invoicing.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/stripe/635BFF",
    moduleRelevance: ["Launch"],
  },
  {
    name: "Zoho Books",
    category: "FinanceBilling",
    description:
      "Cloud accounting platform for invoices, expenses, and financial reporting.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/zoho/E42527",
    moduleRelevance: [],
  },
  {
    name: "Tally Prime",
    category: "FinanceBilling",
    description:
      "India's widely-used accounting software for real-estate developer bookkeeping.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/amazonaws/FF9900",
    moduleRelevance: [],
  },

  // CRM & Lead Routing
  {
    name: "Salesforce",
    category: "CrmLeadRouting",
    description:
      "Enterprise CRM for lead management, sales pipeline, and customer journey tracking.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/salesforce/00A1E0",
    moduleRelevance: [],
  },
  {
    name: "HubSpot",
    category: "CrmLeadRouting",
    description:
      "Marketing and CRM platform for lead capture, nurturing, and deal management.",
    authType: "OAUTH2",
    logoUrl: "https://cdn.simpleicons.org/hubspot/FF7A59",
    moduleRelevance: [],
  },

  // Domains & Hosting
  {
    name: "Cloudflare",
    category: "DomainsHosting",
    description:
      "DNS, CDN, and security platform for website performance and DDoS protection.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/cloudflare/F48120",
    moduleRelevance: ["Ads", "Website"],
  },

  // AI & Content
  {
    name: "Anthropic Claude",
    category: "AiContent",
    description:
      "Claude AI for content generation, copy review, and brand voice automation.",
    authType: "API_KEY",
    logoUrl: "https://cdn.simpleicons.org/anthropic/D97757",
    moduleRelevance: ["Reputation"],
  },
];

async function main() {
  console.log("Seeding integration providers...");
  let upserted = 0;

  for (const p of PROVIDERS) {
    await prisma.provider.upsert({
      where: { name: p.name },
      update: {
        category: p.category,
        description: p.description,
        authType: p.authType,
        logoUrl: p.logoUrl,
        moduleRelevance: p.moduleRelevance,
        isActive: true,
      },
      create: {
        name: p.name,
        category: p.category,
        description: p.description,
        authType: p.authType,
        logoUrl: p.logoUrl,
        moduleRelevance: p.moduleRelevance,
        isActive: true,
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
