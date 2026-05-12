import type { Metadata } from "next";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { createMetadata } from "@/lib/metadata";

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
  ...createMetadata({
    title: "Zoro | Revenue Infrastructure",
    description:
      "A production-ready Stripe-inspired SaaS product experience built with Next.js, TypeScript, and Tailwind CSS.",
  }),
  applicationName: "Zoro",
  title: {
    default: "Zoro | Revenue Infrastructure",
    template: "%s | Zoro",
  },
  category: "technology",
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
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
