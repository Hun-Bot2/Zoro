import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        stripe: "0 32px 90px rgba(15, 23, 42, 0.18)",
        panel: "0 18px 55px rgba(15, 23, 42, 0.16)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#0a2540",
        marine: "#183f6a",
        violet: "#625afa",
        skyglass: "#e8f4ff",
        page: "rgb(var(--color-page) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--color-surface-muted) / <alpha-value>)",
        title: "rgb(var(--color-title) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
