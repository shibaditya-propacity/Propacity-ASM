type User = { permissions: string[] };

export const SeoPolicy = {
  canView(user: User): boolean {
    // All authenticated agency members can view SEO data.
    return user.permissions.includes("growth.view");
  },
  canSync(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
  canManageKeywords(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
};
