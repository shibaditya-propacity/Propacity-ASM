import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/core/components/loading-state";

const SocialDashboardPage = lazy(() => import("./pages/social-dashboard.page"));

export const socialRoutes: RouteObject = {
  path: "social",
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<LoadingState />}>
          <SocialDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<LoadingState />}>
          <SocialDashboardPage />
        </Suspense>
      ),
    },
  ],
};
