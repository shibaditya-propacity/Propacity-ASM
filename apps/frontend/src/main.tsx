import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/core/api/query-client";
import { AuthProvider } from "@/core/auth/auth-context";
import { router } from "./router";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
