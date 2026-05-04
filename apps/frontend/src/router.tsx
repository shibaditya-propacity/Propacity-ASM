import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { AppShell } from "@/core/layout/app-shell";
import { growthRoutes } from "@/modules/growth/growth.routes";
import { LoadingState } from "@/core/components/loading-state";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/growth" replace /> },
      growthRoutes,
    ],
  },
]);
