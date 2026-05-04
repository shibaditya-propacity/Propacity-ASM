const BASE_URL = import.meta.env["VITE_API_BASE_URL"] ?? "http://localhost:3000/api/v1";

export class ApiError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly statusCode: number,
    public readonly details?: unknown
  ) {
    super(message);
  }
}

async function request<T>(
  method: string,
  path: string,
  opts: { body?: unknown; params?: Record<string, string | number | boolean | undefined> } = {}
): Promise<T> {
  let url = `${BASE_URL}${path}`;
  if (opts.params) {
    const qs = Object.entries(opts.params)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join("&");
    if (qs) url += `?${qs}`;
  }

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      // Auth header injected here in production
    },
    ...(opts.body !== undefined && { body: JSON.stringify(opts.body) }),
  });

  const json = (await res.json()) as { ok: boolean; data?: T; error?: { code: string; message: string; details?: unknown } };

  if (!json.ok || !res.ok) {
    throw new ApiError(
      json.error?.code ?? "UNKNOWN",
      json.error?.message ?? "An error occurred",
      res.status,
      json.error?.details
    );
  }

  return json.data as T;
}

export const apiClient = {
  get: <T>(path: string, params?: Record<string, string | number | boolean | undefined>) =>
    request<T>("GET", path, { params }),
  post: <T>(path: string, body?: unknown) => request<T>("POST", path, { body }),
  patch: <T>(path: string, body?: unknown) => request<T>("PATCH", path, { body }),
  delete: <T>(path: string) => request<T>("DELETE", path),
};
