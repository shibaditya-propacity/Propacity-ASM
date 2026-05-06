import { useState } from "react";
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

export function CreateFullAuditForm({
  onSubmit,
  onCancel,
  submitting,
  prospectId,
}: Props) {
  const [dev, setDev] = useState<Partial<DeveloperInput>>(EMPTY_DEV);
  const [auditorName, setAuditorName] = useState("");
  const [objective, setObjective] = useState("");

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
              placeholder="@handle"
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

      <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
        <button type="button" onClick={onCancel} className="btn">
          Cancel
        </button>
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Creating…" : "Create Audit"}
        </button>
      </div>
    </form>
  );
}
