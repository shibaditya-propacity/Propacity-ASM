import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/core/components/loading-state";

const IntegrationsPage = lazy(() => import("./pages/integrations.page"));

export const integrationsRoutes: RouteObject = {
  path: "integrations",
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<LoadingState />}>
          <IntegrationsPage />
        </Suspense>
      ),
    },
    {
      path: "all-clients",
      element: (
        <Suspense fallback={<LoadingState />}>
          <IntegrationsPage />
        </Suspense>
      ),
    },
    {
      path: "platform",
      element: (
        <Suspense fallback={<LoadingState />}>
          <IntegrationsPage />
        </Suspense>
      ),
    },
  ],
};
