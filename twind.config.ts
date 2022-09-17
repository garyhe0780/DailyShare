

// import { DarkMode } from "twind";
import { Options } from "$fresh/plugins/twind.ts";

/** @type {import("$fresh/plugins/twind.ts").Options} */
export default {
  selfURL: import.meta.url,
  // darkMode: "class" as DarkMode,
  mode: "silent",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      modal: "rgba(0, 0, 0, .5)",
      primary: {
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)", 
      },
      secondary: {
        100: "#fb6533",
        200: "#ff861f",
        300: "#ffa600",
      },
      error: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      slate: {
        50: "f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      gray: {
        50: "f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      red: {
        50: "fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#991b1b",
      },
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gridTemplateColumns: {
        main: "248px 1fr",
        detail: "1fr 1fr",
        login: "3fr 2fr",
        calendar: "120px repeat(7, 1fr)",
        divider: "120px 7fr",
      },
      margin: {
        auto: "0 auto",
      },
      height: {
        sidebar: 'calc(100vh - 64px)'
      },
    },
    animation: {
      hiddenAfter5Secs: "hide 0s ease-in 5s forwards",
    },
    keyframes: {
      hide: {
        to: {
          visibility: "hidden" as unknown as undefined,
          width: "0",
          height: "0",
        },
      },
    },
  },
} as Options;
