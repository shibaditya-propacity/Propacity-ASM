import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Save,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  AlertTriangle,
  Info,
  Minus,
  ExternalLink,
  Plus,
  X,
  Loader2,
  Upload,
  FileText,
} from "lucide-react";
import { Chip } from "@/core/ui";
import { useRerunDimension } from "../api/use-rerun-dimension";
import { useSaveManualOverride } from "../api/use-save-manual-override";
import { useUploadCollateral } from "../api/use-upload-collateral";
import type { FullAuditDimension, ItemStatus } from "../brand-audit.types";

// ── Types ──────────────────────────────────────────────────────────────────────

type Priority = "critical" | "high" | "medium" | "low";

interface ManualField {
  key: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "number"
    | "select"
    | "chips"
    | "checkboxgroup"
    | "pdfUpload";
  placeholder?: string;
  options?: string[];
  hint?: string;
}

// ── Manual form definitions per dimension ──────────────────────────────────────

const DIMENSION_FIELDS: Record<string, ManualField[]> = {
  D1: [
    {
      key: "positioning",
      label: "Brand Positioning / Value Proposition",
      type: "textarea",
      placeholder: "What makes this brand unique in the market?",
      hint: "Describe the core brand promise and differentiation",
    },
    {
      key: "productType",
      label: "Product Type",
      type: "select",
      options: [
        "Apartments",
        "Villas",
        "Plotted Development",
        "Commercial",
        "Mixed Use",
        "Township",
        "Luxury Residences",
      ],
    },
    {
      key: "yearEstablished",
      label: "Year Established",
      type: "number",
      placeholder: "e.g. 2005",
    },
    {
      key: "targetSegments",
      label: "Target Customer Segments",
      type: "chips",
      placeholder: "Add segment and press Enter",
      hint: "e.g. Luxury, HNI, NRI, First-time buyers",
    },
    {
      key: "microMarkets",
      label: "Key Micro Markets / Localities",
      type: "chips",
      placeholder: "Add locality and press Enter",
    },
    {
      key: "additionalContext",
      label: "Additional Brand Context",
      type: "textarea",
      placeholder: "Any additional context the AI should know...",
    },
  ],
  D2: [
    {
      key: "websiteUrl",
      label: "Website URL",
      type: "text",
      placeholder: "https://example.com",
    },
    {
      key: "targetKeywords",
      label: "Target SEO Keywords",
      type: "chips",
      placeholder: "Add keyword and press Enter",
      hint: "Keywords you want to rank for",
    },
    {
      key: "knownSeoIssues",
      label: "Known SEO Issues",
      type: "textarea",
      placeholder: "Slow page speed, missing sitemaps, thin content...",
    },
    {
      key: "primaryLocation",
      label: "Primary Location Target",
      type: "text",
      placeholder: "e.g. Bangalore, Pune",
    },
    {
      key: "additionalContext",
      label: "Website / SEO Notes",
      type: "textarea",
      placeholder: "Any additional context for website analysis...",
    },
  ],
  D3: [
    {
      key: "instagramHandle",
      label: "Instagram Handle",
      type: "text",
      placeholder: "@brandname",
    },
    {
      key: "facebookUrl",
      label: "Facebook Page URL",
      type: "text",
      placeholder: "https://facebook.com/...",
    },
    {
      key: "linkedinUrl",
      label: "LinkedIn Company URL",
      type: "text",
      placeholder: "https://linkedin.com/company/...",
    },
    {
      key: "youtubeUrl",
      label: "YouTube Channel URL",
      type: "text",
      placeholder: "https://youtube.com/@...",
    },
    {
      key: "postingFrequency",
      label: "Current Posting Frequency",
      type: "select",
      options: [
        "Daily",
        "3-5x per week",
        "Weekly",
        "Bi-weekly",
        "Monthly",
        "Rarely / Inactive",
      ],
    },
    {
      key: "contentThemes",
      label: "Content Themes / Pillars",
      type: "chips",
      placeholder: "Add theme and press Enter",
      hint: "e.g. Project updates, Lifestyle, Behind the scenes",
    },
    {
      key: "additionalContext",
      label: "Social Media Notes",
      type: "textarea",
      placeholder: "Engagement strategy, paid promotions, challenges...",
    },
  ],
  D4: [
    {
      key: "metaAdLibraryName",
      label: "Meta Ad Library Search Name",
      type: "text",
      placeholder: "Name to search in Meta Ad Library",
      hint: "May differ from brand name",
    },
    {
      key: "adSpendRange",
      label: "Monthly Ad Spend Range",
      type: "select",
      options: [
        "Under ₹1L",
        "₹1L–₹5L",
        "₹5L–₹20L",
        "₹20L–₹50L",
        "₹50L+",
        "Unknown",
      ],
    },
    {
      key: "adPlatforms",
      label: "Active Ad Platforms",
      type: "checkboxgroup",
      options: [
        "Meta (Facebook/Instagram)",
        "Google Ads",
        "YouTube Ads",
        "LinkedIn Ads",
        "Programmatic",
        "OTT / CTV",
      ],
    },
    {
      key: "campaignObjectives",
      label: "Campaign Objectives",
      type: "textarea",
      placeholder: "Lead generation, brand awareness, site visits...",
    },
    {
      key: "additionalContext",
      label: "Paid Media Notes",
      type: "textarea",
      placeholder: "Agency, creative quality, campaign history...",
    },
  ],
  D5: [
    {
      key: "brandColors",
      label: "Primary Brand Colors",
      type: "chips",
      placeholder: "Add color (e.g. #1A2B3C) and press Enter",
      hint: "HEX codes or color names",
    },
    {
      key: "fontFamily",
      label: "Brand Typography",
      type: "text",
      placeholder: "e.g. Playfair Display, Inter",
    },
    {
      key: "logoDescription",
      label: "Logo Description",
      type: "textarea",
      placeholder: "Describe the logo — icon, wordmark, style, quality...",
    },
    {
      key: "visualStyleNotes",
      label: "Visual Identity Notes",
      type: "textarea",
      placeholder:
        "Overall visual consistency, quality of imagery, brand feel...",
    },
  ],
  D6: [
    {
      key: "collateralPdf",
      label: "Upload Brochure / Collateral PDF",
      type: "pdfUpload",
      hint: "PDF only · max 5 MB — the AI will reference this document in its collateral analysis",
    },
    {
      key: "availableCollateral",
      label: "Available Marketing Collateral",
      type: "checkboxgroup",
      options: [
        "Digital Brochure",
        "Physical Brochure",
        "Floor Plans",
        "Site Master Plan",
        "Price List",
        "Virtual Tour",
        "Video Walkthrough",
        "Project Fact Sheet",
        "Company Profile",
      ],
    },
    {
      key: "brochureQuality",
      label: "Brochure / Collateral Quality",
      type: "select",
      options: [
        "Excellent — premium design",
        "Good — professional",
        "Average — basic",
        "Poor — needs redesign",
        "None available",
      ],
    },
    {
      key: "additionalContext",
      label: "Collateral Notes",
      type: "textarea",
      placeholder: "Gaps, outdated materials, missing assets...",
    },
  ],
  D7: [
    {
      key: "gmbPlaceId",
      label: "Google My Business Place ID",
      type: "text",
      placeholder: "ChIJ...",
      hint: "Find this in Google Maps URL",
    },
    {
      key: "approximateRating",
      label: "Known Google Rating",
      type: "text",
      placeholder: "e.g. 4.2",
    },
    {
      key: "knownReputationIssues",
      label: "Known Reputation Challenges",
      type: "textarea",
      placeholder:
        "Negative press, delayed projects, complaints, legal issues...",
    },
    {
      key: "responseStrategy",
      label: "Review Response Strategy",
      type: "select",
      options: [
        "Actively responds to all reviews",
        "Responds to some reviews",
        "Rarely responds",
        "Never responds",
        "Unknown",
      ],
    },
    {
      key: "additionalContext",
      label: "Reputation Notes",
      type: "textarea",
      placeholder: "Awards, certifications, PR coverage...",
    },
  ],
  D8: [
    {
      key: "crmTool",
      label: "CRM System",
      type: "text",
      placeholder: "e.g. Salesforce, HubSpot, Sell.do, LeadSquared",
    },
    {
      key: "whatsappNumber",
      label: "WhatsApp Business Number",
      type: "text",
      placeholder: "+91 XXXXX XXXXX",
    },
    {
      key: "analyticsTools",
      label: "Analytics / Tracking Tools",
      type: "chips",
      placeholder: "Add tool and press Enter",
      hint: "e.g. Google Analytics, Hotjar, Meta Pixel",
    },
    {
      key: "chatbotOrAutomation",
      label: "Chatbot / Automation",
      type: "select",
      options: [
        "Yes — full chatbot on website",
        "Yes — WhatsApp automation",
        "Basic — contact forms only",
        "None",
        "Unknown",
      ],
    },
    {
      key: "additionalContext",
      label: "Technology Notes",
      type: "textarea",
      placeholder:
        "Virtual tour tech, booking systems, AI tools in use, gaps...",
    },
  ],
  D9: [
    {
      key: "competitors",
      label: "Key Competitors",
      type: "chips",
      placeholder: "Add competitor name and press Enter",
      hint: "List direct competitors in same market/segment",
    },
    {
      key: "competitiveAdvantages",
      label: "Our Competitive Advantages",
      type: "textarea",
      placeholder: "Where does this brand clearly outperform competitors?",
    },
    {
      key: "competitorWeaknesses",
      label: "Competitor Weaknesses to Exploit",
      type: "textarea",
      placeholder: "Known gaps or weaknesses in competitor strategy...",
    },
    {
      key: "marketPositioning",
      label: "Positioning vs Competitors",
      type: "textarea",
      placeholder: "How does this brand differentiate vs the competition?",
    },
  ],
  D10: [
    {
      key: "promoterName",
      label: "Promoter / Founder Name",
      type: "text",
      placeholder: "Full name",
    },
    {
      key: "promoterLinkedIn",
      label: "Promoter LinkedIn URL",
      type: "text",
      placeholder: "https://linkedin.com/in/...",
    },
    {
      key: "promoterExperience",
      label: "Promoter Background / Experience",
      type: "textarea",
      placeholder: "Years in real estate, notable projects, qualifications...",
    },
    {
      key: "promoterVisibility",
      label: "Promoter Public Visibility",
      type: "select",
      options: [
        "Very visible — media, events, thought leadership",
        "Moderately visible — some press mentions",
        "Low — minimal public presence",
        "Unknown",
      ],
    },
    {
      key: "additionalContext",
      label: "Additional Promoter Context",
      type: "textarea",
      placeholder: "Awards, affiliations, controversies, achievements...",
    },
  ],
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function scoreColor(score: number) {
  if (score >= 70)
    return {
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    };
  if (score >= 40)
    return {
      text: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    };
  return { text: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
}

function itemTone(
  status: ItemStatus | null,
): "slate" | "emerald" | "amber" | "red" {
  switch (status) {
    case "PASS":
      return "emerald";
    case "FAIL":
      return "red";
    case "PARTIAL":
      return "amber";
    default:
      return "slate";
  }
}

const PRIORITY_META: Record<
  Priority,
  { label: string; icon: React.ReactNode; cls: string }
> = {
  critical: {
    label: "Critical",
    icon: <AlertCircle className="w-3 h-3" />,
    cls: "bg-red-100 text-red-700 border-red-200",
  },
  high: {
    label: "High",
    icon: <AlertTriangle className="w-3 h-3" />,
    cls: "bg-amber-100 text-amber-700 border-amber-200",
  },
  medium: {
    label: "Medium",
    icon: <Info className="w-3 h-3" />,
    cls: "bg-blue-100 text-blue-700 border-blue-200",
  },
  low: {
    label: "Low",
    icon: <Minus className="w-3 h-3" />,
    cls: "bg-slate-100 text-slate-600 border-slate-200",
  },
};

// ── Form field components ──────────────────────────────────────────────────────

function ChipsInput({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");

  function add() {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput("");
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          placeholder={placeholder}
          className="input flex-1 text-xs"
        />
        <button
          type="button"
          onClick={add}
          className="btn flex items-center gap-1 text-xs shrink-0"
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {value.map((v) => (
            <span
              key={v}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-xs text-brand-700"
            >
              {v}
              <button
                type="button"
                onClick={() => onChange(value.filter((x) => x !== v))}
                className="text-brand-400 hover:text-brand-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function CheckboxGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  function toggle(opt: string) {
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt],
    );
  }
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={value.includes(opt)}
            onChange={() => toggle(opt)}
            className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span className="text-xs text-slate-700 group-hover:text-slate-900">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

const MAX_PDF_BYTES = 5 * 1024 * 1024;

function PdfUploadField({
  auditId,
  value,
  onChange,
}: {
  auditId: string;
  value: { url: string; name: string } | null;
  onChange: (v: { url: string; name: string } | null) => void;
}) {
  const {
    upload,
    uploading,
    error: uploadError,
  } = useUploadCollateral(auditId);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setLocalError(null);
    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      setLocalError("Only PDF files are allowed");
      return;
    }
    if (file.size > MAX_PDF_BYTES) {
      setLocalError("File must be 5 MB or smaller");
      return;
    }
    const asset = await upload(file);
    if (asset) {
      onChange({ url: asset.url, name: asset.originalName });
    }
  }

  const err = localError ?? uploadError;

  return (
    <div className="space-y-2">
      {value ? (
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
          <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 text-xs text-emerald-700 hover:text-emerald-900 truncate font-medium"
          >
            {value.name}
          </a>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="shrink-0 text-emerald-400 hover:text-red-500 transition-colors"
            aria-label="Remove file"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <label
          className={`flex items-center gap-2.5 px-3 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
            uploading
              ? "border-brand-300 bg-brand-50/50 cursor-wait"
              : "border-slate-200 hover:border-brand-300 hover:bg-brand-50/30"
          }`}
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 text-brand-500 animate-spin shrink-0" />
          ) : (
            <Upload className="w-4 h-4 text-slate-400 shrink-0" />
          )}
          <span className="text-xs text-slate-500">
            {uploading ? "Uploading…" : "Click to upload PDF (max 5 MB)"}
          </span>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,application/pdf"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void handleFile(f);
            }}
          />
        </label>
      )}
      {err && (
        <p className="text-[11px] text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {err}
        </p>
      )}
    </div>
  );
}

function FieldWrapper({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {hint && <p className="text-[10px] text-slate-400">{hint}</p>}
    </div>
  );
}

// ── DimensionManualForm ────────────────────────────────────────────────────────

function DimensionManualForm({
  auditId,
  dimensionCode,
  savedData,
  onSave,
  saving,
}: {
  auditId: string;
  dimensionCode: string;
  savedData: Record<string, unknown>;
  onSave: (data: Record<string, unknown>) => void;
  saving: boolean;
}) {
  const fields = DIMENSION_FIELDS[dimensionCode] ?? [];
  const [form, setForm] = useState<Record<string, unknown>>(() => {
    const initial: Record<string, unknown> = {};
    for (const f of fields) {
      initial[f.key] =
        savedData[f.key] ??
        (f.type === "chips" || f.type === "checkboxgroup"
          ? []
          : f.type === "pdfUpload"
            ? null
            : "");
    }
    return initial;
  });

  // Sync when savedData changes (e.g. after invalidation)
  useEffect(() => {
    setForm((prev) => {
      const merged = { ...prev };
      for (const f of fields) {
        if (savedData[f.key] !== undefined) merged[f.key] = savedData[f.key];
      }
      return merged;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensionCode]);

  function set(key: string, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function renderField(field: ManualField) {
    const val = form[field.key];

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            value={(val as string) ?? ""}
            onChange={(e) => set(field.key, e.target.value)}
            placeholder={field.placeholder}
            rows={3}
            className="input w-full text-xs resize-none"
          />
        );
      case "select":
        return (
          <select
            value={(val as string) ?? ""}
            onChange={(e) => set(field.key, e.target.value)}
            className="input w-full text-xs"
          >
            <option value="">Select…</option>
            {field.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        );
      case "number":
        return (
          <input
            type="number"
            value={(val as string) ?? ""}
            onChange={(e) => set(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="input w-full text-xs"
          />
        );
      case "chips":
        return (
          <ChipsInput
            value={(val as string[]) ?? []}
            onChange={(v) => set(field.key, v)}
            placeholder={field.placeholder}
          />
        );
      case "checkboxgroup":
        return (
          <CheckboxGroup
            options={field.options ?? []}
            value={(val as string[]) ?? []}
            onChange={(v) => set(field.key, v)}
          />
        );
      case "pdfUpload":
        return (
          <PdfUploadField
            auditId={auditId}
            value={(val as { url: string; name: string } | null) ?? null}
            onChange={(v) => set(field.key, v)}
          />
        );
      default:
        return (
          <input
            type="text"
            value={(val as string) ?? ""}
            onChange={(e) => set(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="input w-full text-xs"
          />
        );
    }
  }

  if (fields.length === 0) return null;

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <FieldWrapper key={field.key} label={field.label} hint={field.hint}>
          {renderField(field)}
        </FieldWrapper>
      ))}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => onSave(form)}
          disabled={saving}
          className="btn-primary flex items-center gap-1.5 text-xs disabled:opacity-60"
        >
          {saving ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <Save className="w-3 h-3" />
          )}
          {saving ? "Saving…" : "Save Manual Input"}
        </button>
      </div>
    </div>
  );
}

// ── DimensionResults ───────────────────────────────────────────────────────────

function DimensionResults({ dimension }: { dimension: FullAuditDimension }) {
  const [showItems, setShowItems] = useState(false);
  const findings = dimension.aiFindings;
  const strengths = findings?.strengths ?? [];
  const flags = findings?.criticalFlags ?? [];
  const wins = findings?.quickWins ?? [];

  const items = dimension.items.map((stored) => {
    const aiItem = findings?.items?.find((ai) => ai.code === stored.itemCode);
    const rawPriority = (aiItem?.priority ?? "low") as string;
    const priority: Priority = (
      ["critical", "high", "medium", "low"] as const
    ).includes(rawPriority as Priority)
      ? (rawPriority as Priority)
      : "low";
    return {
      ...stored,
      priority,
      recommendation: aiItem?.recommendation ?? null,
    };
  });

  const sortedItems = [...items].sort((a, b) => {
    const order: Record<Priority, number> = {
      critical: 0,
      high: 1,
      medium: 2,
      low: 3,
    };
    return order[a.priority] - order[b.priority];
  });

  return (
    <div className="space-y-4">
      {/* AI Summary */}
      {dimension.aiSummary && (
        <div className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-xs text-slate-700 leading-relaxed">
            {dimension.aiSummary}
          </p>
        </div>
      )}

      {/* Tri-column findings */}
      {(strengths.length > 0 || flags.length > 0 || wins.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {strengths.length > 0 && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-2">
                Strengths
              </p>
              <ul className="space-y-1">
                {strengths.map((s, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-1.5"
                  >
                    <span className="text-emerald-500 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {flags.length > 0 && (
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-3">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-2">
                Critical Flags
              </p>
              <ul className="space-y-1">
                {flags.map((f, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-1.5"
                  >
                    <span className="text-red-500 shrink-0 font-bold">!</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {wins.length > 0 && (
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-2">
                Quick Wins
              </p>
              <ul className="space-y-1">
                {wins.map((w, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-700 flex gap-1.5"
                  >
                    <span className="text-blue-500 shrink-0">→</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Checklist items — collapsed by default */}
      {sortedItems.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setShowItems((o) => !o)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            {showItems ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
            {sortedItems.length} checklist items
          </button>

          {showItems && (
            <div className="mt-3 space-y-2">
              {sortedItems.map((item) => {
                const meta = PRIORITY_META[item.priority];
                return (
                  <div
                    key={item.itemCode}
                    className={`rounded-lg border border-l-4 overflow-hidden ${
                      item.priority === "critical"
                        ? "border-l-red-500 border-slate-100"
                        : item.priority === "high"
                          ? "border-l-amber-400 border-slate-100"
                          : item.priority === "medium"
                            ? "border-l-blue-400 border-slate-100"
                            : "border-l-slate-300 border-slate-100"
                    }`}
                  >
                    <div className="flex items-start gap-3 px-3 py-2.5">
                      <span
                        className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border shrink-0 mt-0.5 ${meta.cls}`}
                      >
                        {meta.icon}
                        {meta.label}
                      </span>
                      <div className="shrink-0 mt-0.5">
                        <Chip tone={itemTone(item.status)}>
                          {item.status ?? "NA"}
                        </Chip>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 mr-1">
                          {item.itemCode}
                        </span>
                        <span className="text-xs text-slate-700">
                          {item.aiNote ?? "—"}
                        </span>
                        {item.sourceUrl && (
                          <div className="mt-1">
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 text-[10px] text-brand-600 hover:text-brand-800"
                            >
                              Source <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── RerunEventLog ──────────────────────────────────────────────────────────────

function RerunEventLog({
  events,
  running,
}: {
  events: import("../brand-audit.types").ProgressEvent[];
  running: boolean;
}) {
  if (!running && events.length === 0) return null;
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-700/60 overflow-hidden">
      <div className="px-3 py-2 border-b border-slate-700/60 flex items-center gap-2">
        {running && (
          <Loader2 className="w-3 h-3 text-blue-400 animate-spin shrink-0" />
        )}
        <p className="text-[10px] font-mono text-slate-400">
          {running ? "Running analysis…" : "Last run log"}
        </p>
      </div>
      <div className="px-3 py-2 space-y-1 max-h-36 overflow-y-auto">
        {events.map((ev, i) => {
          const dot =
            ev.status === "failed"
              ? "bg-red-400"
              : ev.status === "done" || ev.stage === "complete"
                ? "bg-emerald-400"
                : "bg-blue-400 animate-pulse";
          let text = "";
          if (ev.stage === "collecting" && ev.source)
            text = `Collecting ${ev.source}${ev.status === "done" ? " ✓" : ev.status === "failed" ? " ✗" : "…"}`;
          else if (ev.stage === "analyzing")
            text = `Analysing${ev.score != null ? ` — score ${ev.score}` : ""}${ev.status === "done" ? " ✓" : "…"}`;
          else if (ev.stage === "complete") text = `Complete ✓`;
          else if (ev.stage === "error") text = `Error: ${ev.message}`;

          return (
            <div
              key={i}
              className="flex items-center gap-2 text-[11px] font-mono text-slate-400"
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
              {text}
            </div>
          );
        })}
        {running && (
          <div className="text-[11px] font-mono text-slate-500 animate-pulse pl-3.5">
            Processing…
          </div>
        )}
      </div>
    </div>
  );
}

// ── StatusIcon ─────────────────────────────────────────────────────────────────

function StatusIcon({ dimension }: { dimension: FullAuditDimension }) {
  if (
    dimension.status === "complete" ||
    (dimension.score !== null && dimension.status !== "no_data")
  )
    return <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />;
  if (dimension.status === "failed")
    return <XCircle className="w-4 h-4 text-red-500 shrink-0" />;
  if (
    dimension.status === "no_data" ||
    dimension.status === "insufficient_data"
  )
    return <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />;
  return <Clock className="w-4 h-4 text-slate-300 shrink-0" />;
}

// ── DimensionAccordion ─────────────────────────────────────────────────────────

export interface DimensionAccordionProps {
  auditId: string;
  dimension: FullAuditDimension;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  savedManualData: Record<string, unknown>;
  onRerunComplete: () => void;
}

export function DimensionAccordion({
  auditId,
  dimension,
  label,
  isOpen,
  onToggle,
  savedManualData,
  onRerunComplete,
}: DimensionAccordionProps) {
  const { running, events, error, run } = useRerunDimension(
    auditId,
    dimension.code,
    onRerunComplete,
  );
  const saveMutation = useSaveManualOverride(auditId);
  const [formOpen, setFormOpen] = useState(false);
  const [recollect, setRecollect] = useState(false);

  const score = dimension.score;
  const isComplete = dimension.status === "complete" || score !== null;
  const isFailed = dimension.status === "failed";

  const sc = score !== null ? scoreColor(score) : null;

  async function handleRerun() {
    await run(!recollect);
  }

  async function handleSave(data: Record<string, unknown>) {
    await saveMutation.mutateAsync({ dimensionCode: dimension.code, data });
  }

  return (
    <div
      id={`dim-${dimension.code}`}
      className={`card overflow-hidden transition-shadow duration-200 ${
        isOpen ? "shadow-md ring-1 ring-brand-100" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer select-none transition-colors ${
          isOpen ? "bg-slate-50/80" : "hover:bg-slate-50/60"
        }`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        {/* Chevron */}
        <span className="text-slate-400 shrink-0">
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </span>

        {/* Status icon */}
        <StatusIcon dimension={dimension} />

        {/* Code */}
        <span className="text-xs font-bold text-slate-400 w-8 shrink-0">
          {dimension.code}
        </span>

        {/* Label */}
        <span className="flex-1 text-sm font-semibold text-slate-800 min-w-0">
          {label}
        </span>

        {/* Score badge */}
        {score !== null && sc ? (
          <span
            className={`text-sm font-bold tabular-nums shrink-0 ${sc.text}`}
            onClick={(e) => e.stopPropagation()}
          >
            {score}
          </span>
        ) : (
          <span className="text-xs text-slate-400 shrink-0">
            {isFailed ? "failed" : "pending"}
          </span>
        )}

        {/* Rerun button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            void handleRerun();
          }}
          disabled={running}
          className={`btn flex items-center gap-1 text-xs shrink-0 disabled:opacity-50 transition-colors ${
            isFailed
              ? "border-red-200 text-red-700 hover:bg-red-50"
              : "text-brand-700 hover:bg-brand-50 border-brand-200"
          }`}
        >
          {running ? (
            <RefreshCw className="w-3 h-3 animate-spin" />
          ) : (
            <RefreshCw className="w-3 h-3" />
          )}
          {running ? "Running…" : isComplete ? "Rerun" : "Run"}
        </button>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="border-t border-slate-100">
          {/* Error state */}
          {error && (
            <div className="mx-4 mt-4 px-3 py-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <XCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Run log */}
          {(running || events.length > 0) && (
            <div className="px-4 pt-4">
              <RerunEventLog events={events} running={running} />
            </div>
          )}

          {/* Manual Input section */}
          <div className="border-b border-slate-100 last:border-0">
            <button
              type="button"
              onClick={() => setFormOpen((o) => !o)}
              className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-slate-50/60 transition-colors"
            >
              {formOpen ? (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span className="text-xs font-semibold text-slate-600">
                Manual Input
              </span>
              <span className="ml-auto text-[10px] text-slate-400 font-normal">
                Context improves AI accuracy
              </span>
            </button>

            {formOpen && (
              <div className="px-4 pb-4">
                <DimensionManualForm
                  auditId={auditId}
                  dimensionCode={dimension.code}
                  savedData={savedManualData}
                  onSave={handleSave}
                  saving={saveMutation.isPending}
                />
                {/* Recollect option */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={recollect}
                      onChange={(e) => setRecollect(e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-xs text-slate-600">
                      Also re-collect live data when running
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => void handleRerun()}
                    disabled={running}
                    className="btn-primary flex items-center gap-1.5 text-xs disabled:opacity-60"
                  >
                    {running ? (
                      <RefreshCw className="w-3 h-3 animate-spin" />
                    ) : (
                      <RefreshCw className="w-3 h-3" />
                    )}
                    {running
                      ? "Running…"
                      : isComplete
                        ? "Rerun Analysis"
                        : "Run Analysis"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results section */}
          {(isComplete || dimension.aiSummary) && (
            <div className="px-4 py-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                Analysis Results
              </p>
              <DimensionResults dimension={dimension} />
            </div>
          )}

          {/* Pending / no data placeholder */}
          {!isComplete && !dimension.aiSummary && !running && (
            <div className="px-4 py-8 flex flex-col items-center gap-2 text-center">
              <Clock className="w-8 h-8 text-slate-200" />
              <p className="text-xs text-slate-400">
                No analysis yet. Fill the manual input above and click{" "}
                <strong>Run Analysis</strong>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
