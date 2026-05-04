interface User {
  id: string;
  permissions: string[];
}

export const GrowthPolicy = {
  canView(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
  canManageWorkshops(user: User): boolean {
    return user.permissions.includes("growth.workshop.manage");
  },
  canManageProspects(user: User): boolean {
    return user.permissions.includes("growth.prospect.manage");
  },
  canManageAudits(user: User): boolean {
    return user.permissions.includes("growth.audit.manage");
  },
  canDeleteWorkshop(user: User): boolean {
    return user.permissions.includes("growth.workshop.delete");
  },
};
