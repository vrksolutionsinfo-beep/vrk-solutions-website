import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E85D24",
          "deep-orange": "#C54A1A",
          "orange-highlight": "#F47735",
          "warm-ivory": "#FAF8F4",
          "soft-surface": "#F3F0EA",
          "warm-neutral": "#EAE5DE",
          "primary-text": "#202322",
          "secondary-text": "#626460",
          "hairline-border": "#DEDAD3",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
