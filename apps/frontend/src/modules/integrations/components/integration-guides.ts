export interface FieldConfig {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  /** "secret" renders as password input */
  type?: "text" | "secret";
  /** If true this field maps to accountLabel, otherwise to apiKey */
  mapsTo?: "apiKey" | "accountLabel";
}

export interface IntegrationGuide {
  brandColor: string;
  steps: string[];
  docsUrl?: string;
  /** Override the single "API Key" label when using default single-field form */
  keyLabel?: string;
  keyPlaceholder?: string;
  note?: string;
  /** When set, replaces the single API key input with these fields */
  fields?: FieldConfig[];
}

export const INTEGRATION_GUIDES: Record<string, IntegrationGuide> = {
  // ── Analytics ──────────────────────────────────────────────────────────────
  "Google Analytics 4": {
    brandColor: "#4285F4",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and create or select a project",
      "Enable the Google Analytics Data API under APIs & Services → Library",
      "Go to APIs & Services → OAuth consent screen → configure (External, add your email as test user)",
      "Create an OAuth 2.0 Client ID under APIs & Services → Credentials (type: Web application)",
      "Open developers.google.com/oauthplayground in your browser",
      'Gear icon (top right) → check "Use your own OAuth credentials" → paste your Client ID and Secret',
      'In Step 1, find "Google Analytics Data API v1", select all scopes, click "Authorize APIs"',
      'Sign in, then click "Exchange authorization code for tokens" in Step 2',
      'Copy the "Access token" (starts with ya29.) and paste it here',
    ],
    docsUrl:
      "https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries",
    note: "Access tokens expire in ~1 hour. For long-term use, generate a Service Account JSON key and paste it as a single line.",
  },
  "Google Search Console": {
    brandColor: "#4285F4",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and create or select a project",
      "Enable the Google Search Console API under APIs & Services → Library",
      "Go to APIs & Services → Credentials → Create Credentials → API Key",
      "Under API restrictions, select 'Restrict key' → choose Google Search Console API",
      "For full OAuth access: create an OAuth 2.0 Client ID, then open developers.google.com/oauthplayground",
      'In Step 1, find "Search Console API v3", select all scopes, click "Authorize APIs"',
      'Sign in, then click "Exchange authorization code for tokens"',
      'Copy the "Access token" (ya29.…) or the API Key (AIzaSy…) and paste it here',
    ],
    docsUrl:
      "https://developers.google.com/webmaster-tools/v1/how-tos/authorizing",
    note: "For simpler read-only access, paste a Google API Key (AIzaSy…) restricted to the Search Console API.",
  },
  "Google Tag Manager": {
    brandColor: "#4285F4",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and select your project",
      "Enable the Tag Manager API under APIs & Services → Library",
      "Create an OAuth 2.0 Client ID under APIs & Services → Credentials",
      "Open developers.google.com/oauthplayground",
      'Select "Tag Manager API v2" scopes, authorize, then exchange for tokens',
      'Copy the "Access token" (ya29.…) and paste it here',
    ],
    docsUrl:
      "https://developers.google.com/tag-platform/tag-manager/api/v2/authorization",
    note: "Access tokens expire in ~1 hour. Use a Service Account for persistent access.",
  },
  Hotjar: {
    brandColor: "#FD3A5C",
    keyLabel: "Personal API Key",
    keyPlaceholder: "hjp_…",
    steps: [
      "Log in to your Hotjar account at app.hotjar.com",
      "Go to Settings → Account → Personal API Keys",
      'Click "Generate Personal API Key"',
      "Give it a name, then copy the key",
    ],
    docsUrl: "https://help.hotjar.com/hc/en-us/articles/19660048174623",
    note: "The key is shown only once — copy it immediately.",
  },
  "Microsoft Clarity": {
    brandColor: "#00BCF2",
    keyLabel: "API Key",
    keyPlaceholder: "clarity-api-…",
    steps: [
      "Log in to clarity.microsoft.com",
      "Open your project and go to Settings",
      'Click "API access" in the left sidebar',
      'Click "Generate token" and copy the key',
    ],
    docsUrl:
      "https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api",
  },

  // ── Ad Platforms ──────────────────────────────────────────────────────────
  "Meta Ads": {
    brandColor: "#1877F2",
    keyLabel: "Access Token",
    keyPlaceholder: "EAAGm…",
    steps: [
      "Go to developers.facebook.com and open (or create) your app",
      "Under your app's dashboard, navigate to Tools → Graph API Explorer",
      "Select your app, then click 'Generate Access Token'",
      "Grant the required ads permissions (ads_read, ads_management)",
      "Copy the token and paste it here",
    ],
    docsUrl: "https://developers.facebook.com/docs/marketing-api/get-started",
    note: "Use a System User token from Business Manager for a non-expiring token.",
  },
  "Google Ads": {
    brandColor: "#4285F4",
    keyLabel: "Developer Token",
    keyPlaceholder: "dv-…",
    steps: [
      "Sign in to ads.google.com with a manager account",
      "Go to Tools & Settings → API Center",
      "Apply for a developer token (basic access is free)",
      "Once approved, copy the developer token",
    ],
    docsUrl:
      "https://developers.google.com/google-ads/api/docs/get-started/dev-token",
    note: "Basic access allows up to 15,000 operations/day. Standard access requires an application.",
  },
  "LinkedIn Ads": {
    brandColor: "#0A66C2",
    keyLabel: "Access Token",
    keyPlaceholder: "AQX…",
    steps: [
      "Go to linkedin.com/developers and create an app",
      "Under Products, request access to 'Marketing Developer Platform'",
      "Navigate to Auth → OAuth 2.0 tools",
      "Generate a token with r_ads and rw_ads permissions",
      "Copy the access token and paste it here",
    ],
    docsUrl:
      "https://learn.microsoft.com/en-us/linkedin/marketing/getting-started",
    note: "Access tokens expire in 60 days. Save your refresh token to regenerate them.",
  },
  "YouTube Ads": {
    brandColor: "#FF0000",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and enable the YouTube Data API v3",
      "Create an OAuth 2.0 Client ID under APIs & Services → Credentials",
      "Open developers.google.com/oauthplayground",
      'Select "YouTube Data API v3" scopes and authorize',
      "Exchange the code for tokens and copy the access token",
    ],
    docsUrl: "https://developers.google.com/youtube/v3/getting-started",
  },
  "Programmatic Display": {
    brandColor: "#6366F1",
    keyLabel: "DSP API Key",
    keyPlaceholder: "dsp-…",
    steps: [
      "Log in to your DSP (DV360, The Trade Desk, etc.) account",
      "Navigate to Settings → API Access or Integrations",
      "Generate or copy your API key",
    ],
    note: "The exact steps depend on your DSP provider.",
  },
  "OTT/CTV Ads": {
    brandColor: "#8B5CF6",
    keyLabel: "Platform API Key",
    keyPlaceholder: "ottctv-…",
    steps: [
      "Log in to your OTT/CTV ad platform (e.g. Roku Ads, Fire TV Ads)",
      "Navigate to Settings → Developer or API Access",
      "Copy your API key or generate a new one",
    ],
    note: "Contact your OTT/CTV platform's support team if API access is not visible.",
  },

  // ── SEO Tools ─────────────────────────────────────────────────────────────
  SEMrush: {
    brandColor: "#FF642D",
    keyLabel: "API Key",
    keyPlaceholder: "semrush-…",
    steps: [
      "Log in to semrush.com",
      "Click your avatar → Profile → Subscription info",
      'Find the "API Key" section and copy your key',
    ],
    docsUrl: "https://developer.semrush.com/api/basics/get-started/",
    note: "API access requires a Guru or Business plan.",
  },
  Ahrefs: {
    brandColor: "#1D6BF3",
    keyLabel: "API Key",
    keyPlaceholder: "ahrefs-…",
    steps: [
      "Log in to ahrefs.com",
      "Go to Settings → API",
      'Click "Generate API key" and copy it',
    ],
    docsUrl: "https://docs.ahrefs.com/docs/api-v3-reference",
    note: "API access is available on Advanced and Enterprise plans.",
  },
  Moz: {
    brandColor: "#00A4CA",
    fields: [
      {
        id: "accessId",
        label: "Access ID",
        placeholder: "mozscape-xxxxxxxx",
        required: true,
        type: "text",
        mapsTo: "accountLabel",
      },
      {
        id: "secretKey",
        label: "Secret Key",
        placeholder: "xxxxxxxxxxxxxxxxxxxx",
        required: true,
        type: "secret",
        mapsTo: "apiKey",
      },
    ],
    steps: [
      "Log in to moz.com/account",
      'Navigate to "API Access" under your account settings',
      "Copy both your Access ID and Secret Key",
      "Enter the Access ID in the first field and Secret Key in the second",
    ],
    docsUrl: "https://moz.com/help/links-api/authentication",
    note: "Both Access ID and Secret Key are required to authenticate Moz API requests.",
  },
  "Screaming Frog": {
    brandColor: "#67B728",
    keyLabel: "License Key",
    keyPlaceholder: "XXXX-XXXX-XXXX-XXXX",
    steps: [
      "Purchase a Screaming Frog SEO Spider license at screamingfrog.co.uk",
      "Check your email for the license key",
      "Paste it here to unlock full crawl limits",
    ],
    docsUrl: "https://www.screamingfrog.co.uk/seo-spider/",
    note: "Free version crawls up to 500 URLs. A paid license removes this limit.",
  },

  // ── Reviews & Listings ────────────────────────────────────────────────────
  "Google Business Profile": {
    brandColor: "#4285F4",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and enable the My Business API",
      "Create an OAuth 2.0 Client ID under APIs & Services → Credentials",
      "Open developers.google.com/oauthplayground",
      'Select "Business Profile API" scopes and authorize',
      "Exchange the code for tokens and copy the access token",
    ],
    docsUrl: "https://developers.google.com/my-business/content/prereqs",
    note: "You must be a verified owner of the Business Profile to access its data.",
  },
  MagicBricks: {
    brandColor: "#E5002B",
    keyLabel: "API Key",
    keyPlaceholder: "mb-…",
    steps: [
      "Contact MagicBricks at developer.magicbricks.com",
      "Apply for API access with your business details",
      "Once approved, retrieve your API key from the developer portal",
    ],
    docsUrl: "https://developer.magicbricks.com",
    note: "API access requires a verified business account.",
  },
  "99acres": {
    brandColor: "#E47911",
    keyLabel: "API Key",
    keyPlaceholder: "99a-…",
    steps: [
      "Visit the 99acres developer portal or contact your account manager",
      "Request API credentials for listing data access",
      "Copy the API key from your developer dashboard",
    ],
    note: "API access is available to verified real estate partners.",
  },
  "Housing.com": {
    brandColor: "#BE2BBB",
    keyLabel: "API Key",
    keyPlaceholder: "housing-…",
    steps: [
      "Log in to your Housing.com partner account",
      "Navigate to Settings → API Access",
      "Generate a new API key and copy it",
    ],
    note: "Contact your Housing.com account manager if API access is not available.",
  },
  "JLL/Anarock": {
    brandColor: "#E31837",
    keyLabel: "API Key",
    keyPlaceholder: "jll-…",
    steps: [
      "Reach out to your JLL/Anarock account representative",
      "Request data API credentials for your account",
      "Enter the provided API key here",
    ],
    note: "API access is available to enterprise partners only.",
  },

  // ── Social Media ──────────────────────────────────────────────────────────
  Instagram: {
    brandColor: "#E1306C",
    keyLabel: "Access Token",
    keyPlaceholder: "IGQVJx…",
    steps: [
      "Go to developers.facebook.com and open your app",
      "Add the Instagram Basic Display or Instagram Graph API product",
      "Under Instagram → API Setup, generate a User Access Token",
      "Grant instagram_basic and instagram_manage_insights permissions",
      "Copy the long-lived access token",
    ],
    docsUrl:
      "https://developers.facebook.com/docs/instagram-api/getting-started",
    note: "Short-lived tokens expire in 1 hour. Exchange them for a long-lived token (60 days).",
  },
  "LinkedIn Page": {
    brandColor: "#0A66C2",
    keyLabel: "Access Token",
    keyPlaceholder: "AQX…",
    steps: [
      "Go to linkedin.com/developers and create an app linked to your Company Page",
      "Under Products, request 'Share on LinkedIn' and 'Marketing Developer Platform'",
      "Navigate to Auth → OAuth 2.0 tools and generate a token",
      "Grant r_organization_social and w_organization_social permissions",
      "Copy the access token and paste it here",
    ],
    docsUrl:
      "https://learn.microsoft.com/en-us/linkedin/marketing/getting-started",
  },
  "YouTube Channel": {
    brandColor: "#FF0000",
    keyLabel: "OAuth Access Token",
    keyPlaceholder: "ya29.…",
    steps: [
      "Go to console.cloud.google.com and enable YouTube Data API v3",
      "Create OAuth 2.0 credentials under APIs & Services → Credentials",
      "Open developers.google.com/oauthplayground",
      "Select YouTube Data API v3 scopes (youtube.readonly, yt-analytics.readonly)",
      "Authorize, exchange the code, and copy the access token",
    ],
    docsUrl:
      "https://developers.google.com/youtube/v3/guides/auth/server-side-web-apps",
  },
  "Twitter/X": {
    brandColor: "#000000",
    keyLabel: "Bearer Token",
    keyPlaceholder: "AAAA…",
    steps: [
      "Go to developer.twitter.com and create a project + app",
      "Under your app's 'Keys and tokens' tab, find Bearer Token",
      'Click "Generate" (or "Regenerate") and copy it',
    ],
    docsUrl:
      "https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens",
    note: "Bearer Token gives read-only access. For write access, use OAuth 1.0a keys.",
  },
  "WhatsApp Business": {
    brandColor: "#25D366",
    keyLabel: "WhatsApp Business API Token",
    keyPlaceholder: "EAAGm…",
    steps: [
      "Go to developers.facebook.com and open your app",
      "Navigate to WhatsApp → API Setup",
      'Click "Generate access token" under the phone number to use',
      "Copy the temporary or permanent token",
    ],
    docsUrl:
      "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    note: "Use a System User token from Business Manager for a permanent, non-expiring token.",
  },
  Slack: {
    brandColor: "#4A154B",
    keyLabel: "Bot Token",
    keyPlaceholder: "xoxb-…",
    steps: [
      "Go to api.slack.com/apps and create a new app (From Scratch)",
      "Under OAuth & Permissions, add the required bot scopes (channels:read, chat:write, etc.)",
      'Click "Install to Workspace" and authorize',
      "Copy the Bot User OAuth Token (starts with xoxb-)",
    ],
    docsUrl: "https://api.slack.com/authentication/token-types",
    note: "Bot tokens start with xoxb-. User tokens start with xoxp-. Use bot tokens for automated workflows.",
  },

  // ── Finance & Billing ─────────────────────────────────────────────────────
  Razorpay: {
    brandColor: "#2E6BE6",
    fields: [
      {
        id: "keyId",
        label: "Key ID",
        placeholder: "rzp_live_…",
        required: true,
        type: "text",
        mapsTo: "accountLabel",
      },
      {
        id: "keySecret",
        label: "Key Secret",
        placeholder: "••••••••••••••••",
        required: true,
        type: "secret",
        mapsTo: "apiKey",
      },
    ],
    steps: [
      "Log in to your Razorpay Dashboard at dashboard.razorpay.com",
      "Go to Settings → API Keys",
      'Click "Generate Key" (or "Regenerate Key")',
      "Copy both the Key ID and Key Secret — the Secret is shown only once",
      "Enter Key ID in the first field and Key Secret in the second",
    ],
    docsUrl:
      "https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/",
    note: "Both Key ID and Key Secret are required to authenticate Razorpay API calls.",
  },
  Stripe: {
    brandColor: "#635BFF",
    fields: [
      {
        id: "publishableKey",
        label: "Publishable Key",
        placeholder: "pk_live_…",
        required: false,
        type: "text",
        mapsTo: "accountLabel",
      },
      {
        id: "secretKey",
        label: "Secret Key",
        placeholder: "sk_live_…",
        required: true,
        type: "secret",
        mapsTo: "apiKey",
      },
    ],
    steps: [
      "Log in to dashboard.stripe.com",
      "Go to Developers → API keys",
      'Click "Reveal live key" next to the Secret key',
      "Optionally copy the Publishable key too (for client-side use)",
      "Paste both keys in the respective fields below",
    ],
    docsUrl: "https://stripe.com/docs/keys",
    note: "Use a Restricted Key with minimal permissions for better security.",
  },
  "Zoho Books": {
    brandColor: "#E42527",
    keyLabel: "Access Token",
    keyPlaceholder: "1000.…",
    steps: [
      "Go to accounts.zoho.com/developerconsole and create a Self Client",
      "Under Generate Code, select the ZohoBooks.fullaccess.all scope",
      "Use the generated code to call accounts.zoho.com/oauth/v2/token to get tokens",
      "Copy the access token and paste it here",
    ],
    docsUrl: "https://www.zoho.com/books/api/v3/oauth/",
    note: "Zoho access tokens expire in 1 hour. Save the refresh token to renew them.",
  },
  "Tally Prime": {
    brandColor: "#314CA3",
    keyLabel: "API Key",
    keyPlaceholder: "tally-…",
    steps: [
      "Open Tally Prime and go to Help → TDL & Add-on → Tally Developer",
      "Enable the Tally REST API under Configuration",
      "Note the host and port, then generate or find the API token in your Tally account settings",
    ],
    docsUrl:
      "https://help.tallysolutions.com/docs/te9rel66/Tally_Main/Tally_Developer_9/",
    note: "Tally Prime's REST API may require TallyPrime Developer mode to be enabled.",
  },

  // ── CRM & Lead Routing ────────────────────────────────────────────────────
  Salesforce: {
    brandColor: "#00A1E0",
    keyLabel: "Access Token",
    keyPlaceholder: "00D…",
    steps: [
      "Log in to your Salesforce org and go to Setup",
      "Search for 'App Manager' and create a new Connected App",
      "Enable OAuth settings, add callback URL, and select required scopes",
      "After saving, go to Manage → View Consumer Details to copy the Consumer Key and Secret",
      "Use the OAuth flow (or Postman) to generate an access token",
    ],
    docsUrl:
      "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm",
  },
  HubSpot: {
    brandColor: "#FF7A59",
    keyLabel: "Private App Token",
    keyPlaceholder: "pat-na1-…",
    steps: [
      "Log in to app.hubspot.com and go to Settings → Integrations → Private Apps",
      'Click "Create a private app"',
      "Give it a name and select the required scopes (crm.objects.contacts.read, etc.)",
      'Click "Create app", then copy the access token shown',
    ],
    docsUrl: "https://developers.hubspot.com/docs/api/private-apps",
    note: "Private app tokens don't expire. Keep them secret — anyone with the token can access your HubSpot data.",
  },

  // ── Domains & Hosting ─────────────────────────────────────────────────────
  Cloudflare: {
    brandColor: "#F48120",
    fields: [
      {
        id: "apiToken",
        label: "API Token",
        placeholder: "cloudflare-api-token…",
        required: true,
        type: "secret",
        mapsTo: "apiKey",
      },
      {
        id: "zoneId",
        label: "Zone ID (optional)",
        placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        required: false,
        type: "text",
        mapsTo: "accountLabel",
      },
    ],
    steps: [
      "Log in to dash.cloudflare.com",
      "Go to My Profile → API Tokens",
      'Click "Create Token"',
      'Use the "Read all resources" template or create a custom token',
      "Copy the token value (shown once)",
      "Optionally, copy your Zone ID from your domain's Overview page",
    ],
    docsUrl:
      "https://developers.cloudflare.com/fundamentals/api/get-started/create-token/",
    note: "Use API Tokens (not the Global API Key) for scoped, revocable access.",
  },

  // ── AI & Content ──────────────────────────────────────────────────────────
  "Anthropic Claude": {
    brandColor: "#CC785C",
    keyLabel: "Anthropic API Key",
    keyPlaceholder: "sk-ant-…",
    steps: [
      "Log in to console.anthropic.com",
      "Go to Settings → API Keys",
      'Click "Create Key", give it a name, and copy it',
    ],
    docsUrl: "https://docs.anthropic.com/en/api/getting-started",
    note: "Keys start with sk-ant-. Store them securely — they cannot be retrieved after creation.",
  },
};
