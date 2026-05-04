import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@asm/schemas": path.resolve(__dirname, "../../packages/schemas/src/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@asm/schemas": path.resolve(__dirname, "../../packages/schemas/src/index.ts"),
    },
  },
});
