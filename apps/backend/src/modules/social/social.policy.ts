type User = { permissions: string[] };

export const SocialPolicy = {
  canView(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
  canManageProfiles(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
  canSync(user: User): boolean {
    return user.permissions.includes("growth.view");
  },
};
