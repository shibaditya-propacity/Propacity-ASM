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

    // 3. Listen for the postMessage sent by the backend callback HTML
    const handler = (event: MessageEvent<OAuthMessage>) => {
      if (!event.data?.type) return;

      if (event.data.type === "oauth-success") {
        cleanup();
        queryClient.invalidateQueries({
          queryKey: integrationKeys.providers(clientId),
        });
        queryClient.invalidateQueries({
          queryKey: integrationKeys.readiness(clientId),
        });
        queryClient.invalidateQueries({ queryKey: integrationKeys.matrix() });
        onSuccess?.(event.data.provider ?? "");
      } else if (event.data.type === "oauth-error") {
        cleanup();
        onError?.(event.data.description ?? event.data.error ?? "OAuth failed");
      }
    };

    listenerRef.current = handler;
    window.addEventListener("message", handler);

    // 4. Detect if popup was closed manually without completing auth
    const pollClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(pollClosed);
        cleanup();
      }
    }, 500);

    function cleanup() {
      clearInterval(pollClosed);
      if (listenerRef.current) {
        window.removeEventListener("message", listenerRef.current);
        listenerRef.current = null;
      }
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }
      popupRef.current = null;
    }
  }, [clientId, providerId, queryClient, onSuccess, onError]);

  return { open };
}
