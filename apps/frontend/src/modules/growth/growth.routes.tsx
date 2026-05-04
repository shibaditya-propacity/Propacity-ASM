import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/core/components/loading-state";

const GrowthDashboardPage = lazy(() => import("./pages/growth-dashboard.page"));
const GrowthWorkshopsPage = lazy(() => import("./pages/growth-workshops.page"));
const GrowthWorkshopDetailPage = lazy(() => import("./pages/growth-workshop-detail.page"));
const GrowthProspectsPage = lazy(() => import("./pages/growth-prospects.page"));
const GrowthProspectDetailPage = lazy(() => import("./pages/growth-prospect-detail.page"));
const GrowthBrandAuditsPage = lazy(() => import("./pages/growth-brand-audits.page"));

export const growthRoutes: RouteObject = {
  path: "growth",
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "workshops",
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthWorkshopsPage />
        </Suspense>
      ),
    },
    {
      path: "workshops/:workshopId",
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthWorkshopDetailPage />
        </Suspense>
      ),
    },
    {
      path: "prospects",
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthProspectsPage />
        </Suspense>
      ),
    },
    {
      path: "prospects/:prospectId",
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthProspectDetailPage />
        </Suspense>
      ),
    },
    {
      path: "brand-audits",
      element: (
        <Suspense fallback={<LoadingState />}>
          <GrowthBrandAuditsPage />
        </Suspense>
      ),
    },
  ],
};
