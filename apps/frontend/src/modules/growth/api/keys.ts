export const growthKeys = {
  all: ["growth"] as const,
  // Prefix keys — use these in invalidateQueries so all filter variants are invalidated
  workshopsList: () => [...growthKeys.all, "workshops"] as const,
  prospectsList: () => [...growthKeys.all, "prospects"] as const,
  brandAuditsList: () => [...growthKeys.all, "brand-audits"] as const,
  // Full keys — use these in useQuery
  workshops: (filters?: object) =>
    [...growthKeys.all, "workshops", filters] as const,
  workshop: (id: string) => [...growthKeys.all, "workshops", id] as const,
  prospects: (filters?: object) =>
    [...growthKeys.all, "prospects", filters] as const,
  prospect: (id: string) => [...growthKeys.all, "prospects", id] as const,
  prospectActivities: (prospectId: string) =>
    [...growthKeys.all, "prospects", prospectId, "activities"] as const,
  prospectBrandAudit: (prospectId: string) =>
    [...growthKeys.all, "prospects", prospectId, "brand-audit"] as const,
  brandAudits: (filters?: object) =>
    [...growthKeys.all, "brand-audits", filters] as const,
  brandAudit: (id: string) => [...growthKeys.all, "brand-audits", id] as const,
  fullAuditByProspect: (prospectId: string) =>
    [...growthKeys.all, "full-audit-by-prospect", prospectId] as const,
  fullAudits: (filters?: object) =>
    [...growthKeys.all, "full-audits", filters] as const,
  fullAudit: (id: string) => [...growthKeys.all, "full-audits", id] as const,
  brandLookup: (brandName: string, city: string) =>
    [...growthKeys.all, "brand-lookup", brandName, city] as const,
};
