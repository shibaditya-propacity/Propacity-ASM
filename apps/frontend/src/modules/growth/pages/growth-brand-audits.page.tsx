import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Topbar } from "@/core/layout/topbar";
import { useAuth } from "@/core/auth/use-auth";

// URL of the Brand Audit Next.js service.
// Development default: http://localhost:3001 (next dev -p 3001)
// Production: set VITE_BRAND_AUDIT_URL in your hosting environment.
const BRAND_AUDIT_URL =
  (import.meta.env.VITE_BRAND_AUDIT_URL as string | undefined) ?? "";

function LoadingSkeleton() {
  return (
    <div className="absolute inset-0 bg-[#F4F6FB] p-6 flex flex-col gap-5 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-7 bg-slate-200 rounded-lg w-48" />
        <div className="h-9 bg-slate-200 rounded-lg w-28" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-28 bg-slate-200 rounded-xl" />
        ))}
      </div>
      <div className="flex-1 bg-slate-200 rounded-xl" />
    </div>
  );
}

function NotConfigured() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
        <ExternalLink className="w-5 h-5 text-slate-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">
          Brand Audit service not configured
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Set{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            VITE_BRAND_AUDIT_URL
          </code>{" "}
          in your{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            .env.local
          </code>{" "}
          file.
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Then start the Brand Audit app:{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            cd Brand-audit && npm run dev
          </code>
        </p>
      </div>
    </div>
  );
}

function LoadError({ url }: { url: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
      <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
        <ExternalLink className="w-5 h-5 text-red-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">
          Could not load Brand Audit app
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Make sure the Brand Audit service is running at{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            {url}
          </code>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Start it with:{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            cd Brand-audit && npm run dev
          </code>
        </p>
      </div>
    </div>
  );
}

export default function GrowthBrandAuditsPage() {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { user } = useAuth();

  // Send ASM auth state to Brand Audit iframe whenever user or iframe changes.
  // postMessage is cross-origin safe — the Brand Audit's AuthProvider listens for this.
  function sendAuthToIframe() {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow || !BRAND_AUDIT_URL) return;
    if (user) {
      iframe.contentWindow.postMessage(
        { type: "ASM_AUTH", user: { name: user.name, email: user.email } },
        BRAND_AUDIT_URL,
      );
    } else {
      iframe.contentWindow.postMessage({ type: "ASM_LOGOUT" }, BRAND_AUDIT_URL);
    }
  }

  // Re-send auth whenever ASM user state changes (login/logout)
  useEffect(() => {
    if (!loading) sendAuthToIframe();
  }, [user, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!BRAND_AUDIT_URL) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Brand Audits" />
        <NotConfigured />
      </div>
    );
  }

  // Append ?embedded=1 so the Brand Audit app hides its own TopBar
  const iframeSrc = `${BRAND_AUDIT_URL}?embedded=1`;

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Topbar
        title="Brand Audits"
        actions={
          <a
            href={BRAND_AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Brand Audit in new tab"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in tab
          </a>
        }
      />

      {/* Fills all height below the topbar */}
      <div className="flex-1 relative overflow-hidden">
        {loading && !loadError && <LoadingSkeleton />}

        {loadError && <LoadError url={BRAND_AUDIT_URL} />}

        {!loadError && (
          <iframe
            ref={iframeRef}
            key={iframeSrc}
            src={iframeSrc}
            title="Brand Audits — powered by Propacity"
            className={`w-full h-full border-0 transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => {
              setLoading(false);
              // Send auth immediately after iframe loads
              sendAuthToIframe();
            }}
            onError={() => {
              setLoading(false);
              setLoadError(true);
            }}
            allow="same-origin"
          />
        )}
      </div>
    </div>
  );
}
