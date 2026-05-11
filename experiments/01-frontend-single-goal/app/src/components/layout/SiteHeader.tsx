"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/components/auth/AuthProvider";
import { ArrowButton, BrandMark, Container, cn } from "@/components/design-system";
import { siteNavItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { isReady, logout, user } = useAuth();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/80 backdrop-blur-xl transition-colors duration-300">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-title"
          aria-label="Zoro home"
        >
          <BrandMark />
          Zoro
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-title/70 transition hover:text-title",
                pathname === item.href && "text-title",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          {isReady && user ? (
            <>
              <Link href="/dashboard" className="text-sm font-semibold text-title/70 transition hover:text-title">
                Dashboard
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-semibold text-title/70 transition hover:text-title"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-semibold text-title/70 transition hover:text-title">
                Sign in
              </Link>
              <ArrowButton className="h-9 px-4" href="/signup">
                Start now
              </ArrowButton>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <details className="relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-ink text-white transition dark:bg-white dark:text-ink [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-[24px] border border-line bg-surface p-3 shadow-stripe">
              <div className="space-y-1">
                {siteNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-title transition hover:bg-surface-muted",
                      pathname === item.href && "bg-surface-muted",
                    )}
                  >
                    {item.label}
                    <ChevronRight aria-hidden="true" className="h-4 w-4 text-muted" />
                  </Link>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {isReady && user ? (
                  <>
                    <Link
                      className="rounded-full bg-surface-muted px-3 py-2 text-center text-sm font-semibold text-title"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="rounded-full bg-ink px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="rounded-full bg-surface-muted px-3 py-2 text-center text-sm font-semibold text-title"
                      href="/login"
                    >
                      Sign in
                    </Link>
                    <Link
                      className="rounded-full bg-ink px-3 py-2 text-center text-sm font-semibold text-white dark:bg-white dark:text-ink"
                      href="/signup"
                    >
                      Start now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
