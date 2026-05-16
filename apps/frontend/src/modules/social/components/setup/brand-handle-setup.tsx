import { useState } from "react";
import {
  Search,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useBrandHandleFetch } from "../../api/use-brand-handle-fetch";
import {
  useSaveProfile,
  useConnectProfile,
} from "../../api/use-social-profiles";
import { HandleConfirmCard } from "./handle-confirm-card";
import type { FetchedHandle, SocialPlatform } from "../../types";
import { PLATFORM_LABELS } from "../../types";

interface BrandHandleSetupProps {
  clientId: string;
  onComplete: () => void;
}

const PLATFORM_ICONS: Record<SocialPlatform, React.ReactNode> = {
  INSTAGRAM: <Instagram className="w-4 h-4" />,
  FACEBOOK: <Facebook className="w-4 h-4" />,
  LINKEDIN: <Linkedin className="w-4 h-4" />,
  YOUTUBE: <Youtube className="w-4 h-4" />,
};

export function BrandHandleSetup({
  clientId,
  onComplete,
}: BrandHandleSetupProps) {
  const [brandName, setBrandName] = useState("");
  const [handles, setHandles] = useState<FetchedHandle[]>([]);
  const [editedHandles, setEditedHandles] = useState<
    Record<SocialPlatform, string>
  >({} as Record<SocialPlatform, string>);
  const [step, setStep] = useState<"idle" | "searching" | "confirm" | "saving">(
    "idle",
  );

  const fetchHandles = useBrandHandleFetch(clientId);
  const saveProfile = useSaveProfile(clientId);
  const connectProfile = useConnectProfile(clientId);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!brandName.trim()) return;
    setStep("searching");
    try {
      const result = await fetchHandles.mutateAsync(brandName.trim());
      setHandles(result);
      const initial = {} as Record<SocialPlatform, string>;
      result.forEach((h) => {
        initial[h.platform] = h.handle;
      });
      setEditedHandles(initial);
      setStep("confirm");
    } catch {
      setStep("idle");
    }
  }

  async function handleConfirm() {
    setStep("saving");
    try {
      // Save all profiles, then mark each as connected so sync works immediately
      await Promise.all(
        handles.map((h) =>
          saveProfile.mutateAsync({
            platform: h.platform,
            handle: editedHandles[h.platform] ?? h.handle,
            profileUrl: h.profileUrl ?? undefined,
            autoFetched: true,
          }),
        ),
      );
      await Promise.all(
        handles.map((h) =>
          connectProfile.mutateAsync({ platform: h.platform }),
        ),
      );
      onComplete();
    } catch {
      setStep("confirm");
    }
  }

  if (step === "idle") {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Set up Social Media
            </h2>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              Enter the brand name and we'll automatically find their social
              media handles across all platforms.
            </p>
          </div>

          <form onSubmit={(e) => void handleSearch(e)} className="space-y-3">
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="e.g. Nike, Apple, Taj Hotels"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!brandName.trim()}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
            >
              <Search className="w-4 h-4" />
              Find Social Handles
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 text-slate-300">
            {(
              [
                "INSTAGRAM",
                "FACEBOOK",
                "LINKEDIN",
                "YOUTUBE",
              ] as SocialPlatform[]
            ).map((p) => (
              <span key={p} className="text-slate-300">
                {PLATFORM_ICONS[p]}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === "searching") {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-brand-500 mx-auto" />
          <p className="text-sm font-medium text-slate-700">
            Searching for <span className="text-brand-600">{brandName}</span>{" "}
            across social platforms…
          </p>
          <p className="text-xs text-slate-400">This may take a few seconds</p>
        </div>
      </div>
    );
  }

  if (step === "confirm" || step === "saving") {
    return (
      <div className="flex-1 overflow-auto bg-[#F4F6FB] p-6">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              Confirm Social Handles
            </h2>
            <p className="text-sm text-slate-500">
              Review the handles we found for <strong>{brandName}</strong>. Edit
              any that look wrong.
            </p>
          </div>

          <div className="space-y-3">
            {handles.map((h) => (
              <HandleConfirmCard
                key={h.platform}
                handle={h}
                editedHandle={editedHandles[h.platform] ?? h.handle}
                icon={PLATFORM_ICONS[h.platform]}
                label={PLATFORM_LABELS[h.platform]}
                onChange={(val) =>
                  setEditedHandles((prev) => ({ ...prev, [h.platform]: val }))
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStep("idle")}
              disabled={step === "saving"}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
            >
              Search Again
            </button>
            <button
              onClick={() => void handleConfirm()}
              disabled={step === "saving"}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
            >
              {step === "saving" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Saving…
                </>
              ) : (
                "Confirm & Save"
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
