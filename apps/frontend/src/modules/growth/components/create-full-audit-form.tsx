import { useState, useEffect } from "react";
import {
  Loader2,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  ChevronRight,
  ChevronLeft,
  Search,
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

function BrandPreviewCard({
  result,
  brandName,
}: {
  result: BrandLookupResult;
  brandName: string;
}) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
      <div className="flex items-start gap-3">
        {result.logo && !logoError ? (
          <img
            src={result.logo}
            alt={brandName}
            className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1 shrink-0"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center shrink-0">
            <span className="text-lg font-bold text-slate-500">
              {brandName[0]?.toUpperCase()}
            </span>
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">{brandName}</p>
          {result.industry && (
            <p className="text-xs text-slate-500 mt-0.5">{result.industry}</p>
          )}
          {result.founded && (
            <p className="text-xs text-slate-400">Est. {result.founded}</p>
          )}
        </div>
      </div>

      {result.description && (
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {result.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
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
        {result.social.instagram && (
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Instagram className="w-3 h-3 text-pink-500" />
            Instagram found
          </span>
        )}
        {result.social.linkedin && (
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Linkedin className="w-3 h-3 text-blue-600" />
            LinkedIn found
          </span>
        )}
        {result.social.facebook && (
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Facebook className="w-3 h-3 text-blue-500" />
            Facebook found
          </span>
        )}
      </div>

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
            instagramHandle: result.social.instagram ?? prev.instagramHandle,
            facebookUrl: result.social.facebook ?? prev.facebookUrl,
            linkedinUrl: result.social.linkedin ?? prev.linkedinUrl,
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
