import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"DM Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ['"Sora"', '"DM Sans"', "ui-sans-serif", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#eef0fe",
          100: "#d9dcfd",
          200: "#b3b9fb",
          500: "#2D3FE7",
          600: "#2233d0",
          700: "#1a28a8",
        },
      },
      keyframes: {
        "auth-in": {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "toast-in": {
          "0%":   { opacity: "0", transform: "translateY(-12px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "auth-in":  "auth-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        "toast-in": "toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up":  "fade-up 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in":  "fade-in 0.4s ease both",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};

export default config;
