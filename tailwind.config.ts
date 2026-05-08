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
        "g50":  "#EAF3DE",
        "g100": "#C0DD97",
        "g200": "#97C459",
        "g400": "#639922",
        "g600": "#3B6D11",
        "g800": "#27500A",
        "g900": "#173404",
        cream:  "#faf9f5",
        ink:    "#1c1f1a",
      },
      fontFamily: {
        serif:    ["Playfair Display", "serif"],
        body:     ["Cormorant Garamond", "serif"],
        mono:     ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
