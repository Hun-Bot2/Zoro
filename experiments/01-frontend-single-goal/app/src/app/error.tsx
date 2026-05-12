"use client";

import { Container, SurfaceCard } from "@/components/design-system";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-page py-24 text-body">
      <Container>
        <SurfaceCard className="mx-auto max-w-lg p-6 text-center">
          <p className="text-sm font-semibold text-rose-500">Something went wrong</p>
          <h1 className="mt-3 text-3xl font-semibold text-title">We could not load this view.</h1>
          <p className="mt-4 text-sm leading-6 text-body">
            {error.message || "The application encountered an unexpected rendering error."}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:bg-white dark:text-ink"
          >
            Try again
          </button>
        </SurfaceCard>
      </Container>
    </main>
  );
}
