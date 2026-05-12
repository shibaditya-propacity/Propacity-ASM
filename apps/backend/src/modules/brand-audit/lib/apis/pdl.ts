import { fetchWithRetry, withRetry } from "../fetchWithRetry";
import type { PDLCompanyResponse } from "../api-types";

const CE_BASE_URL = "https://api.companyenrich.com";

export async function enrichCompany(
  domain: string,
): Promise<PDLCompanyResponse | null> {
  try {
    const url = `${CE_BASE_URL}/companies/enrich?domain=${encodeURIComponent(domain)}`;
    const res = await withRetry(() =>
      fetchWithRetry(
        url,
        {
          headers: {
            Authorization: `Bearer ${process.env.COMPANY_ENRICH_API_KEY ?? ""}`,
            accept: "application/json",
          },
        },
        2,
        15000,
      ),
    );
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`enrichCompany error: ${res.status}`);
    return res.json() as Promise<PDLCompanyResponse>;
  } catch (error: unknown) {
    // On any other error (timeout, network, etc.) return null instead of throwing
    console.error(
      "enrichCompany error:",
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

export function extractCompanyData(data: PDLCompanyResponse) {
  return {
    name: data.name,
    employeeCount: data.workforce?.observed_employee_count,
    size: undefined,
    industry: data.industry || (data.industries?.[0] ?? undefined),
    summary: data.description,
    founded: data.founded_year,
    location: data.location,
    socialLinks: {
      linkedin: data.socials?.linkedin_url,
      twitter: data.socials?.twitter_url,
      facebook: data.socials?.facebook_url,
      instagram: data.socials?.instagram_url,
      youtube: data.socials?.youtube_url,
    },
  };
}
