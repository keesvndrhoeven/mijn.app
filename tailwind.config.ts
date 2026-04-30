import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#e8600a",
        "accent-dim": "rgba(232,96,10,0.10)",
        "accent-soft": "rgba(232,96,10,0.22)",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        barGrow: {
          "0%": { width: "0%" },
          "100%": { width: "var(--bar-width)" },
        },
      },
      animation: {
        "fade-up-1": "fadeUp 0.6s ease forwards",
        "fade-up-2": "fadeUp 0.6s 0.15s ease forwards",
        "fade-up-3": "fadeUp 0.6s 0.3s ease forwards",
        "fade-up-4": "fadeUp 0.6s 0.4s ease forwards",
        "fade-up-5": "fadeUp 0.6s 0.55s ease forwards",
        "fade-up-6": "fadeUp 0.6s 0.65s ease forwards",
        "fade-up-7": "fadeUp 0.6s 0.78s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
