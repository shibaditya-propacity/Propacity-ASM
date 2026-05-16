import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/core/components/loading-state";

const SeoDashboardPage = lazy(() => import("./pages/seo-dashboard.page"));
const SeoActionsPage = lazy(() => import("./pages/seo-actions.page"));

export const seoRoutes: RouteObject = {
  path: "seo",
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<LoadingState />}>
          <SeoDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<LoadingState />}>
          <SeoDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "actions",
      element: (
        <Suspense fallback={<LoadingState />}>
          <SeoActionsPage />
        </Suspense>
      ),
    },
  ],
};
