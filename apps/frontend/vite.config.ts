import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: { port: 5174, allowedHosts: "all" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@asm/schemas": path.resolve(
        __dirname,
        "../../packages/schemas/src/index.ts",
      ),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    // test-setup.ts adds @testing-library/jest-dom matchers (toBeInTheDocument, etc.)
    setupFiles: ["./src/test-setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      // Exclude non-source files from coverage measurement
      exclude: [
        "src/test-setup.ts",
        "src/main.tsx",
        "src/router.tsx",
        "**/*.d.ts",
        "**/node_modules/**",
        "**/dist/**",
      ],
    },
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@asm/schemas": path.resolve(
        __dirname,
        "../../packages/schemas/src/index.ts",
      ),
    },
  },
});
