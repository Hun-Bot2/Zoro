import type { Config } from "tailwindcss";

const config: Config = {
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
      },
    },
  },
  plugins: [],
};

export default config;
