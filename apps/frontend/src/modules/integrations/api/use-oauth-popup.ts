import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { apiClient } from "@/core/api/client";
import { integrationKeys } from "./keys";

interface OAuthMessage {
  type: "oauth-success" | "oauth-error";
  provider?: string;
  clientId?: string;
  providerId?: string;
  error?: string;
  description?: string;
}

interface UseOAuthPopupOptions {
  clientId: string;
  providerId: string;
  onSuccess?: (providerName: string) => void;
  onError?: (message: string) => void;
}

export function useOAuthPopup({
  clientId,
  providerId,
  onSuccess,
  onError,
}: UseOAuthPopupOptions) {
  const queryClient = useQueryClient();
  const popupRef = useRef<Window | null>(null);
  const listenerRef = useRef<((e: MessageEvent) => void) | null>(null);

  const open = useCallback(async () => {
    // 1. Ask the backend for the OAuth URL
    let authUrl: string;
    try {
      const resp = await apiClient.post<{ authUrl: string }>(
        `/integrations/${clientId}/${providerId}/connect`,
      );
      authUrl = resp.authUrl;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to get auth URL";
      onError?.(msg);
      return;
    }

    // 2. Open the OAuth consent screen in a centred popup
    const w = 600;
    const h = 700;
    const left = Math.round(window.screenX + (window.outerWidth - w) / 2);
    const top = Math.round(window.screenY + (window.outerHeight - h) / 2);
    const popup = window.open(
      authUrl,
      `oauth_${providerId}`,
      `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`,
    );

    if (!popup) {
      onError?.(
        "Popup was blocked. Please allow popups for this site and try again.",
      );
      return;
    }

    popupRef.current = popup;

    function handleMessage(msg: OAuthMessage) {
      if (!msg?.type) return;
      if (msg.type === "oauth-success") {
        cleanup();
        queryClient.invalidateQueries({
          queryKey: integrationKeys.providers(clientId),
        });
        queryClient.invalidateQueries({
          queryKey: integrationKeys.readiness(clientId),
        });
        queryClient.invalidateQueries({ queryKey: integrationKeys.matrix() });
        onSuccess?.(msg.provider ?? "");
      } else if (msg.type === "oauth-error") {
        cleanup();
        onError?.(msg.description ?? msg.error ?? "OAuth failed");
      }
    }

    // 3a. BroadcastChannel — primary channel, COOP-safe (Google sets COOP:
    //     same-origin which severs window.opener in the callback page).
    let bc: BroadcastChannel | null = null;
    try {
      bc = new BroadcastChannel("oauth_result");
      bc.onmessage = (e: MessageEvent<OAuthMessage>) => handleMessage(e.data);
    } catch {
      // BroadcastChannel not supported — fall through to postMessage only
    }

    // 3b. window.postMessage — fallback for browsers without BroadcastChannel
    const handler = (event: MessageEvent<OAuthMessage>) => {
      if (!event.data?.type) return;
      handleMessage(event.data);
    };
    listenerRef.current = handler;
    window.addEventListener("message", handler);

    // 4. Detect if popup was closed manually without completing auth.
    //    Wrap in try/catch — COOP may throw when reading popup.closed after
    //    the opener relationship is severed by Google's OAuth pages.
    const pollClosed = setInterval(() => {
      try {
        if (popup.closed) {
          clearInterval(pollClosed);
          cleanup();
        }
      } catch {
        // COOP blocked the read — stop polling, leave cleanup to the message handler
        clearInterval(pollClosed);
      }
    }, 500);

    function cleanup() {
      clearInterval(pollClosed);
      if (bc) {
        bc.onmessage = null;
        bc.close();
        bc = null;
      }
      if (listenerRef.current) {
        window.removeEventListener("message", listenerRef.current);
        listenerRef.current = null;
      }
      try {
        if (popupRef.current && !popupRef.current.closed) {
          popupRef.current.close();
        }
      } catch {
        // COOP may block this too — ignore
      }
      popupRef.current = null;
    }
  }, [clientId, providerId, queryClient, onSuccess, onError]);

  return { open };
}
