import { fetchWithRetry, withRetry } from "../fetchWithRetry";

export async function captureScreenshot(
  websiteUrl: string,
): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      url: websiteUrl,
      screenshot: "true",
      meta: "false",
    });
    const res = await withRetry(() =>
      fetchWithRetry(
        `https://api.microlink.io/?${params.toString()}`,
        {},
        2,
        30000,
      ),
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      data?: { screenshot?: { url?: string } };
    };
    return data?.data?.screenshot?.url ?? null;
  } catch {
    return null;
  }
}

export function getClearbitLogoUrl(domain: string): string {
  const clean = domain
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];
  return `https://logo.clearbit.com/${clean}`;
}

export async function checkClearbitLogo(
  domain: string,
): Promise<string | null> {
  const clean = domain
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];
  // Try Clearbit first, fall back to Google favicon
  try {
    const logoUrl = `https://logo.clearbit.com/${clean}`;
    const res = await fetchWithRetry(logoUrl, {}, 1, 8000);
    const contentType = res.headers.get("content-type") ?? "";
    if (res.ok && contentType.startsWith("image/")) return logoUrl;
  } catch {
    /* fall through */
  }
  // Google high-res favicon as fallback (always works)
  return `https://www.google.com/s2/favicons?sz=128&domain=${clean}`;
}
