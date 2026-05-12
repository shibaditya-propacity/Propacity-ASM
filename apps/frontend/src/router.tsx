import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { AppShell } from "@/core/layout/app-shell";
import { growthRoutes } from "@/modules/growth/growth.routes";
import { integrationsRoutes } from "@/modules/integrations/integrations.routes";
import { authLoader } from "@/core/auth/loaders";

const SigninPage = lazy(() => import("@/modules/auth/pages/signin.page"));
const SignupPage = lazy(() => import("@/modules/auth/pages/signup.page"));

export const router = createBrowserRouter([
  { path: "/signin", element: <SigninPage /> },
  { path: "/signup", element: <SignupPage /> },
  // Legacy redirect so any old /login links still work
  { path: "/login", element: <Navigate to="/signin" replace /> },
  {
    path: "/",
    element: <AppShell />,
    loader: authLoader,
    children: [
      { index: true, element: <Navigate to="/growth" replace /> },
      growthRoutes,
      integrationsRoutes,
    ],
  },
]);
