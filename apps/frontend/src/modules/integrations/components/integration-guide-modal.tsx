import { X, ExternalLink, Info } from "lucide-react";
import type { ProviderWithStatus } from "../types";
import { INTEGRATION_GUIDES } from "./integration-guides";

interface IntegrationGuideModalProps {
  provider: ProviderWithStatus;
  onClose: () => void;
}

export function IntegrationGuideModal({
  provider,
  onClose,
}: IntegrationGuideModalProps) {
  const guide = INTEGRATION_GUIDES[provider.name];
  const brandColor = guide?.brandColor;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Brand color top bar */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: brandColor ?? "#e2e8f0" }}
        />
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <img
              src={provider.logoUrl}
              alt={provider.name}
              className="w-7 h-7 rounded-lg object-contain border border-slate-100 shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/28x28/f1f5f9/94a3b8?text=" +
                  provider.name[0];
              }}
            />
            <h2 className="font-heading text-sm font-bold text-slate-900">
              How to connect {provider.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {guide ? (
            <>
              <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" style={{ color: brandColor }} />
                {guide.keyLabel
                  ? `Get your ${guide.keyLabel}`
                  : "Get your API key"}
              </p>
              <ol className="space-y-2.5">
                {guide.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-xs text-slate-700">
                    <span
                      className="shrink-0 w-5 h-5 rounded-full font-bold flex items-center justify-center text-[10px] text-white"
                      style={{ backgroundColor: brandColor ?? "#6366f1" }}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              {guide.note && (
                <p className="text-[11px] text-slate-400 italic border-t border-slate-100 pt-3">
                  {guide.note}
                </p>
              )}
              {guide.docsUrl && (
                <a
                  href={guide.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium hover:opacity-80 transition"
                  style={{ color: brandColor ?? "#6366f1" }}
                >
                  Official documentation
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </>
          ) : (
            <p className="text-sm text-slate-400 text-center py-4">
              No setup guide available yet for {provider.name}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
