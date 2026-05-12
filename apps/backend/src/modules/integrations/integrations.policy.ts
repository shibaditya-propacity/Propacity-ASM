type User = {
  id: string;
  tenantId: string;
  role: string;
  permissions: string[];
};

export const IntegrationsPolicy = {
  canView(_user: User): boolean {
    return true; // all authenticated users can view integrations
  },
  canConnect(user: User): boolean {
    return ["agency_admin", "agency_member"].includes(user.role);
  },
  canDisconnect(user: User): boolean {
    return ["agency_admin"].includes(user.role);
  },
  canManagePlatform(user: User): boolean {
    return ["agency_admin"].includes(user.role);
  },
};
