import type { Metadata } from "next";

import "./globals.css";

const themeScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("zoro-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    var root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (error) {}
})();
`;

export const metadata: Metadata = {
  title: "Zoro | Revenue Infrastructure",
  description:
    "A production-quality Stripe-inspired landing page built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
