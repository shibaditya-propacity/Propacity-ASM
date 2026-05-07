import { useState } from "react";
import {
  Loader2,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Search,
  Shield,
  ShieldCheck,
  Code2,
  Palette,
  Type,
  ExternalLink,
} from "lucide-react";
import { useBrandLookup } from "../api/use-brand-lookup";
import type { BrandLookupResult } from "../api/use-brand-lookup";
import type {
  CreateFullAuditInput,
  DeveloperInput,
} from "../brand-audit.types";

interface Props {
  onSubmit: (input: CreateFullAuditInput) => void;
  onCancel: () => void;
  submitting?: boolean;
  prospectId?: string;
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const EMPTY_DEV: Partial<DeveloperInput> = {
  microMarkets: [],
  targetSegments: [],
  competitors: [],
  adPlatforms: [],
  reraNumbers: [],
};

// ── Stage 1: Brand Name Input ─────────────────────────────────────────────────

function StageOneBrandSearch({
  onProceed,
}: {
  onProceed: (
    brandName: string,
    city: string,
    result: BrandLookupResult | null,
  ) => void;
}) {
  const [brandName, setBrandName] = useState("");
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);

  const lookup = useBrandLookup(
    searched ? brandName : "",
    searched ? city : undefined,
  );

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!brandName.trim()) return;
    setSearched(true);
  }

  const isLoading = searched && lookup.isFetching;
  const result = searched && lookup.isSuccess ? lookup.data : null;

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Brand Name" required>
            <input
              className="input"
              required
              placeholder="e.g. Godrej Properties"
              value={brandName}
              onChange={(e) => {
                setBrandName(e.target.value);
                setSearched(false);
              }}
            />
          </Field>
          <Field label="City (optional)">
            <input
              className="input"
              placeholder="e.g. Pune"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setSearched(false);
              }}
            />
          </Field>
        </div>
        <button
          type="submit"
          disabled={!brandName.trim() || isLoading}
          className="btn-primary flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Looking up brand…
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Find Brand
            </>
          )}
        </button>
      </form>

      {/* Preview card */}
      {searched && !isLoading && lookup.isSuccess && (
        <BrandPreviewCard result={lookup.data} brandName={brandName} />
      )}

      {searched && !isLoading && lookup.isError && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-800">
          Could not auto-fetch brand details. You can fill in the details
          manually on the next step.
        </div>
      )}

      <div className="flex justify-between items-center pt-2 border-t border-slate-100">
        <button
          type="button"
          className="text-xs text-slate-500 hover:text-slate-700"
          onClick={() => onProceed(brandName, city, null)}
          disabled={!brandName.trim()}
        >
          Skip auto-fetch, enter manually →
        </button>
        {searched && !isLoading && (
          <button
            type="button"
            className="btn-primary flex items-center gap-1.5"
            onClick={() => onProceed(brandName, city, result)}
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

function SocialRow({
  icon,
  url,
  label,
  metric,
}: {
  icon: React.ReactNode;
  url: string | null;
  label: string;
  metric?: string | null;
}) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors group"
    >
      {icon}
      <span className="text-xs font-medium text-slate-700">{label}</span>
      {metric && (
        <span className="ml-auto text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
          {metric}
        </span>
      )}
      <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-slate-500 ml-1" />
    </a>
  );
}

function BrandPreviewCard({
  result,
  brandName,
}: {
  result: BrandLookupResult;
  brandName: string;
}) {
  const [logoError, setLogoError] = useState(false);
  const tech = result.techStack;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-4">
      {/* Identity row */}
      <div className="flex items-start gap-3">
        {result.logo && !logoError ? (
          <img
            src={result.logo}
            alt={brandName}
            className="w-14 h-14 rounded-xl object-contain bg-white border border-slate-200 p-1.5 shrink-0"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
            <span className="text-xl font-bold text-slate-500">
              {brandName[0]?.toUpperCase()}
            </span>
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-slate-900">{brandName}</p>
            {result.seo.hasSSL ? (
              <span className="flex items-center gap-0.5 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                <ShieldCheck className="w-3 h-3" /> SSL
              </span>
            ) : (
              <span className="flex items-center gap-0.5 text-[10px] text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                <Shield className="w-3 h-3" /> No SSL
              </span>
            )}
          </div>
          {result.industry && (
            <p className="text-xs text-slate-500 mt-0.5">{result.industry}</p>
          )}
          <div className="flex items-center gap-3 mt-0.5">
            {result.founded && (
              <p className="text-xs text-slate-400">Est. {result.founded}</p>
            )}
            {result.websiteUrl && (
              <a
                href={result.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-brand-600 hover:text-brand-800"
              >
                <Globe className="w-3 h-3" />
                {result.domain}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {result.description && (
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {result.description}
        </p>
      )}

      {/* SEO signals */}
      {(result.seo.metaTitle || result.seo.metaDescription) && (
        <div className="rounded-lg bg-white border border-slate-200 p-3 space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            SEO Signals
          </p>
          {result.seo.metaTitle && (
            <p className="text-xs font-medium text-slate-700 truncate">
              {result.seo.metaTitle}
            </p>
          )}
          {result.seo.metaDescription && (
            <p className="text-xs text-slate-500 line-clamp-2">
              {result.seo.metaDescription}
            </p>
          )}
          <div className="flex items-center gap-3 pt-1">
            {result.seo.hasRobotsTxt !== null && (
              <span
                className={`text-[10px] font-medium ${result.seo.hasRobotsTxt ? "text-emerald-600" : "text-slate-400"}`}
              >
                {result.seo.hasRobotsTxt ? "✓ robots.txt" : "✗ robots.txt"}
              </span>
            )}
            {result.seo.hasSitemap !== null && (
              <span
                className={`text-[10px] font-medium ${result.seo.hasSitemap ? "text-emerald-600" : "text-slate-400"}`}
              >
                {result.seo.hasSitemap ? "✓ sitemap" : "✗ sitemap"}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Social platforms */}
      <div className="grid grid-cols-2 gap-2">
        <SocialRow
          icon={<Instagram className="w-3.5 h-3.5 text-pink-500 shrink-0" />}
          url={result.social.instagram.url}
          label="Instagram"
          metric={
            result.social.instagram.followers
              ? formatCount(result.social.instagram.followers)
              : null
          }
        />
        <SocialRow
          icon={<Linkedin className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
          url={result.social.linkedin.url}
          label="LinkedIn"
          metric={
            result.social.linkedin.followers
              ? formatCount(result.social.linkedin.followers)
              : null
          }
        />
        <SocialRow
          icon={<Facebook className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
          url={result.social.facebook.url}
          label="Facebook"
          metric={
            result.social.facebook.likes
              ? formatCount(result.social.facebook.likes)
              : null
          }
        />
        <SocialRow
          icon={<Youtube className="w-3.5 h-3.5 text-red-500 shrink-0" />}
          url={result.social.youtube.url}
          label="YouTube"
          metric={
            result.social.youtube.subscribers
              ? formatCount(result.social.youtube.subscribers)
              : null
          }
        />
        <SocialRow
          icon={<Twitter className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
          url={result.social.twitter.url}
          label="Twitter / X"
        />
      </div>

      {/* YouTube videos */}
      {result.social.youtube.videos.length > 0 && (
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Recent YouTube Videos
          </p>
          <div className="grid grid-cols-3 gap-2">
            {result.social.youtube.videos.map((v) => (
              <a
                key={v.videoId}
                href={v.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg overflow-hidden border border-slate-200 hover:border-red-300 transition-colors"
              >
                <img
                  src={v.thumbnailUrl}
                  alt={v.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-1.5">
                  <p className="text-[10px] text-slate-700 font-medium line-clamp-2 leading-tight">
                    {v.title}
                  </p>
                  {v.viewCount !== null && (
                    <p className="text-[9px] text-slate-400 mt-0.5">
                      {formatCount(v.viewCount)} views
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tech stack */}
      {tech && (
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tech.cms && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                <Code2 className="w-3 h-3" />
                {tech.cms}
              </span>
            )}
            {tech.framework && (
              <span className="text-[10px] font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                {tech.framework}
              </span>
            )}
            {tech.analytics.map((a) => (
              <span
                key={a}
                className="text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"
              >
                {a}
              </span>
            ))}
            {tech.adPixels.map((p) => (
              <span
                key={p}
                className="text-[10px] font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full"
              >
                {p}
              </span>
            ))}
            {tech.otherTech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Fonts */}
      {result.fonts.length > 0 && (
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Type className="w-3 h-3" /> Fonts Detected
          </p>
          <div className="flex flex-wrap gap-1.5">
            {result.fonts.map((f) => (
              <span
                key={f}
                className="text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full"
              >
                {f}
              </span>
            ))}
            {result.fonts.length >= 3 && (
              <span className="text-[10px] text-amber-600 font-medium">
                ⚠ {result.fonts.length} fonts detected
              </span>
            )}
          </div>
        </div>
      )}

      {/* Color palette */}
      {result.colors.length > 0 && (
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Palette className="w-3 h-3" /> Brand Colors
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {result.colors.map((c) => (
              <div
                key={c}
                title={c}
                className="w-6 h-6 rounded border border-slate-200 shadow-sm"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Developer credit */}
      {result.developerCredit?.name && (
        <div className="rounded-lg bg-slate-100 border border-slate-200 px-3 py-2">
          <p className="text-[10px] text-slate-500">
            <span className="font-semibold">Built by:</span>{" "}
            {result.developerCredit.url ? (
              <a
                href={result.developerCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                {result.developerCredit.name}
              </a>
            ) : (
              result.developerCredit.name
            )}{" "}
            <span className="text-slate-400">
              ({result.developerCredit.confidence})
            </span>
          </p>
        </div>
      )}

      {!result.websiteUrl && !result.industry && (
        <p className="text-xs text-slate-400 italic">
          Limited data found — you can fill in more details manually.
        </p>
      )}
    </div>
  );
}

// ── Stage 2: Full Details Form ────────────────────────────────────────────────

function StageTwoDetails({
  dev,
  setDev,
  auditorName,
  setAuditorName,
  objective,
  setObjective,
  onBack,
  onContinue,
}: {
  dev: Partial<DeveloperInput>;
  setDev: React.Dispatch<React.SetStateAction<Partial<DeveloperInput>>>;
  auditorName: string;
  setAuditorName: (v: string) => void;
  objective: string;
  setObjective: (v: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  function set<K extends keyof DeveloperInput>(
    key: K,
    value: DeveloperInput[K],
  ) {
    setDev((prev) => ({ ...prev, [key]: value }));
  }

  function setArr(key: keyof DeveloperInput, raw: string) {
    const arr = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    set(key as "microMarkets", arr as string[]);
  }

  return (
    <div className="space-y-8">
      {/* Brand */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Brand Info
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Brand Name" required>
            <input
              className="input"
              required
              value={dev.brandName ?? ""}
              onChange={(e) => set("brandName", e.target.value)}
            />
          </Field>
          <Field label="Legal Name">
            <input
              className="input"
              value={dev.legalName ?? ""}
              onChange={(e) => set("legalName", e.target.value)}
            />
          </Field>
          <Field label="Domain">
            <input
              className="input"
              placeholder="example.com"
              value={dev.domain ?? ""}
              onChange={(e) => set("domain", e.target.value)}
            />
          </Field>
          <Field label="City">
            <input
              className="input"
              value={dev.city ?? ""}
              onChange={(e) => set("city", e.target.value)}
            />
          </Field>
          <Field label="Product Type">
            <input
              className="input"
              placeholder="Residential, Commercial…"
              value={dev.productType ?? ""}
              onChange={(e) => set("productType", e.target.value)}
            />
          </Field>
          <Field label="Year Established">
            <input
              className="input"
              type="number"
              min={1900}
              max={2030}
              value={dev.yearEstablished ?? ""}
              onChange={(e) =>
                set(
                  "yearEstablished",
                  e.target.value ? Number(e.target.value) : undefined,
                )
              }
            />
          </Field>
        </div>
        <Field label="Positioning">
          <textarea
            className="input resize-none"
            rows={2}
            value={dev.positioning ?? ""}
            onChange={(e) => set("positioning", e.target.value)}
          />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Micro Markets (comma-separated)">
            <input
              className="input"
              placeholder="Baner, Wakad, Kharadi"
              value={(dev.microMarkets ?? []).join(", ")}
              onChange={(e) => setArr("microMarkets", e.target.value)}
            />
          </Field>
          <Field label="Target Segments (comma-separated)">
            <input
              className="input"
              placeholder="First-home buyers, Investors"
              value={(dev.targetSegments ?? []).join(", ")}
              onChange={(e) => setArr("targetSegments", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Online presence */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Online Presence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Website URL">
            <input
              className="input"
              type="url"
              placeholder="https://"
              value={dev.websiteUrl ?? ""}
              onChange={(e) => set("websiteUrl", e.target.value)}
            />
          </Field>
          <Field label="Instagram Handle">
            <input
              className="input"
              placeholder="@handle or profile URL"
              value={dev.instagramHandle ?? ""}
              onChange={(e) => set("instagramHandle", e.target.value)}
            />
          </Field>
          <Field label="Facebook URL">
            <input
              className="input"
              type="url"
              placeholder="https://"
              value={dev.facebookUrl ?? ""}
              onChange={(e) => set("facebookUrl", e.target.value)}
            />
          </Field>
          <Field label="LinkedIn URL">
            <input
              className="input"
              type="url"
              placeholder="https://"
              value={dev.linkedinUrl ?? ""}
              onChange={(e) => set("linkedinUrl", e.target.value)}
            />
          </Field>
          <Field label="GMB Place ID">
            <input
              className="input"
              value={dev.gmbPlaceId ?? ""}
              onChange={(e) => set("gmbPlaceId", e.target.value)}
            />
          </Field>
          <Field label="Meta Ad Library Name">
            <input
              className="input"
              value={dev.metaAdLibraryName ?? ""}
              onChange={(e) => set("metaAdLibraryName", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Promoter */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Promoter
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Promoter Name">
            <input
              className="input"
              value={dev.promoterName ?? ""}
              onChange={(e) => set("promoterName", e.target.value)}
            />
          </Field>
          <Field label="Promoter LinkedIn">
            <input
              className="input"
              type="url"
              placeholder="https://linkedin.com/in/…"
              value={dev.promoterLinkedIn ?? ""}
              onChange={(e) => set("promoterLinkedIn", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Competition & audit */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Competition & Audit
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Competitors (comma-separated)">
            <input
              className="input"
              value={(dev.competitors ?? []).join(", ")}
              onChange={(e) => setArr("competitors", e.target.value)}
            />
          </Field>
          <Field label="Ad Spend Range">
            <input
              className="input"
              placeholder="e.g. ₹1L–5L/month"
              value={dev.adSpendRange ?? ""}
              onChange={(e) => set("adSpendRange", e.target.value)}
            />
          </Field>
          <Field label="Auditor Name">
            <input
              className="input"
              value={auditorName}
              onChange={(e) => setAuditorName(e.target.value)}
            />
          </Field>
        </div>
        <Field label="Audit Objective">
          <textarea
            className="input resize-none"
            rows={2}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </Field>
      </section>

      <div className="flex justify-between pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="btn flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          disabled={!dev.brandName?.trim()}
          className="btn-primary flex items-center gap-1.5"
        >
          Review & Launch
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ── Stage 3: Review ───────────────────────────────────────────────────────────

function StageThreeReview({
  dev,
  auditorName,
  objective,
  onBack,
  onSubmit,
  submitting,
}: {
  dev: Partial<DeveloperInput>;
  auditorName: string;
  objective: string;
  onBack: () => void;
  onSubmit: () => void;
  submitting?: boolean;
}) {
  const rows: Array<[string, string | null | undefined]> = [
    ["Brand Name", dev.brandName],
    ["Legal Name", dev.legalName],
    ["Domain", dev.domain],
    ["Website", dev.websiteUrl],
    ["City", dev.city],
    ["Product Type", dev.productType],
    ["Year Est.", dev.yearEstablished?.toString()],
    ["Micro Markets", (dev.microMarkets ?? []).join(", ") || null],
    ["Target Segments", (dev.targetSegments ?? []).join(", ") || null],
    ["Instagram", dev.instagramHandle],
    ["Facebook", dev.facebookUrl],
    ["LinkedIn", dev.linkedinUrl],
    ["GMB Place ID", dev.gmbPlaceId],
    ["Meta Ad Library", dev.metaAdLibraryName],
    ["Promoter", dev.promoterName],
    ["Promoter LinkedIn", dev.promoterLinkedIn],
    ["Competitors", (dev.competitors ?? []).join(", ") || null],
    ["Ad Spend Range", dev.adSpendRange],
    ["Auditor", auditorName || null],
    ["Objective", objective || null],
  ].filter(([, v]) => v) as Array<[string, string]>;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-slate-800 mb-4">
          Review before launching
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-0.5">
              <dt className="text-xs text-slate-400">{label}</dt>
              <dd className="text-xs font-medium text-slate-700 break-all">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        {rows.length === 0 && (
          <p className="text-xs text-slate-400">
            No details provided beyond brand name.
          </p>
        )}
      </div>

      <div className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-xs text-blue-800 leading-relaxed">
        The audit will be created in <strong>DRAFT</strong> status. Open the
        audit to run it — the AI will then collect data from all sources and
        analyse all 10 dimensions.
      </div>

      <div className="flex justify-between pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="btn flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          Edit details
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="btn-primary flex items-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating…
            </>
          ) : (
            "Create Audit"
          )}
        </button>
      </div>
    </div>
  );
}

// ── Wizard shell ──────────────────────────────────────────────────────────────

export function CreateFullAuditForm({
  onSubmit,
  onCancel,
  submitting,
  prospectId,
}: Props) {
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [dev, setDev] = useState<Partial<DeveloperInput>>(EMPTY_DEV);
  const [auditorName, setAuditorName] = useState("");
  const [objective, setObjective] = useState("");

  function applyLookupResult(
    brandName: string,
    city: string,
    result: BrandLookupResult | null,
  ) {
    setDev((prev) => ({
      ...prev,
      brandName,
      city: city || prev.city,
      ...(result
        ? {
            domain: result.domain ?? prev.domain,
            websiteUrl: result.websiteUrl ?? prev.websiteUrl,
            instagramHandle:
              result.social.instagram.handle ??
              result.social.instagram.url ??
              prev.instagramHandle,
            facebookUrl: result.social.facebook.url ?? prev.facebookUrl,
            linkedinUrl: result.social.linkedin.url ?? prev.linkedinUrl,
          }
        : {}),
    }));
    setStage(2);
  }

  function handleSubmit() {
    if (!dev.brandName?.trim()) return;
    onSubmit({
      developer: {
        brandName: dev.brandName!,
        legalName: dev.legalName || undefined,
        domain: dev.domain || undefined,
        city: dev.city || undefined,
        yearEstablished: dev.yearEstablished || undefined,
        positioning: dev.positioning || undefined,
        productType: dev.productType || undefined,
        microMarkets: dev.microMarkets ?? [],
        targetSegments: dev.targetSegments ?? [],
        promoterName: dev.promoterName || undefined,
        promoterLinkedIn: dev.promoterLinkedIn || undefined,
        websiteUrl: dev.websiteUrl || undefined,
        instagramHandle: dev.instagramHandle || undefined,
        facebookUrl: dev.facebookUrl || undefined,
        linkedinUrl: dev.linkedinUrl || undefined,
        gmbPlaceId: dev.gmbPlaceId || undefined,
        competitors: dev.competitors ?? [],
        metaAdLibraryName: dev.metaAdLibraryName || undefined,
        adSpendRange: dev.adSpendRange || undefined,
        adPlatforms: dev.adPlatforms ?? [],
        reraNumbers: dev.reraNumbers ?? [],
      },
      auditorName: auditorName || undefined,
      objective: objective || undefined,
      prospectId: prospectId || undefined,
    });
  }

  const STEPS = ["Find Brand", "Details", "Review"];

  return (
    <div className="space-y-6">
      {/* Step indicator */}
      <div className="flex items-center gap-0">
        {STEPS.map((label, i) => {
          const step = (i + 1) as 1 | 2 | 3;
          const active = stage === step;
          const done = stage > step;
          return (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                    ${active ? "bg-brand-600 text-white" : done ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-500"}`}
                >
                  {done ? "✓" : step}
                </span>
                <span
                  className={`text-xs font-medium ${active ? "text-slate-900" : "text-slate-400"}`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-8 h-px bg-slate-200 mx-3" />
              )}
            </div>
          );
        })}
        <div className="flex-1" />
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-slate-400 hover:text-slate-600"
        >
          Cancel
        </button>
      </div>

      {/* Stage content */}
      {stage === 1 && <StageOneBrandSearch onProceed={applyLookupResult} />}
      {stage === 2 && (
        <StageTwoDetails
          dev={dev}
          setDev={setDev}
          auditorName={auditorName}
          setAuditorName={setAuditorName}
          objective={objective}
          setObjective={setObjective}
          onBack={() => setStage(1)}
          onContinue={() => setStage(3)}
        />
      )}
      {stage === 3 && (
        <StageThreeReview
          dev={dev}
          auditorName={auditorName}
          objective={objective}
          onBack={() => setStage(2)}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      )}
    </div>
  );
}
