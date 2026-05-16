import { useNavigate } from "react-router-dom";
import { Link2Off } from "lucide-react";

interface ConnectBannerProps {
  gscConnected: boolean;
  ga4Connected: boolean;
}

export function ConnectBanner({
  gscConnected,
  ga4Connected,
}: ConnectBannerProps) {
  const navigate = useNavigate();

  // GA4 is required. GSC is optional (keyword tracking only).
  // This banner only renders when GA4 is not connected.
  const missing = [
    !ga4Connected && "Google Analytics 4",
    !gscConnected && "Google Search Console",
  ]
    .filter(Boolean)
    .join(" and ");

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-10">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col items-center gap-5 text-center">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
          <Link2Off className="w-6 h-6 text-slate-400" />
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-bold text-slate-900">
            Connect your SEO tools
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Connect <strong>{missing}</strong> in Integrations to unlock
            real-time SEO insights for this client.
          </p>
          {!ga4Connected && gscConnected && (
            <p className="text-xs text-slate-400">
              Google Search Console is already connected — just GA4 is needed to
              proceed.
            </p>
          )}
        </div>
        <button
          onClick={() => navigate("/integrations")}
          className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
        >
          Go to Integrations
        </button>
      </div>
    </div>
  );
}
