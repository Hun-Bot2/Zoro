import Link from "next/link";

import { BrandMark, Container } from "@/components/design-system";
import { footerColumns } from "@/data/landing";

export function SiteFooter() {
  return (
    <footer className="bg-page py-12 transition-colors duration-300">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-title"
            aria-label="Zoro home"
          >
            <BrandMark />
            Zoro
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-body">
            A Stripe-inspired SaaS product experience built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="mt-6 text-sm text-muted">© 2026 Zoro Labs</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-title">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/resources" className="text-sm text-body transition hover:text-title">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
