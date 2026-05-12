"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { Container, SurfaceCard } from "@/components/design-system";
import { useAuth } from "./AuthProvider";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isReady, user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isReady && !user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [isReady, pathname, router, user]);

  if (!isReady || !user) {
    return (
      <main id="main-content" className="min-h-screen bg-page py-24 text-body">
        <Container>
          <SurfaceCard className="mx-auto max-w-md p-6 text-center">
            <p className="text-sm font-semibold text-violet">Checking access</p>
            <h1 className="mt-3 text-3xl font-semibold text-title">Preparing your workspace</h1>
            <p className="mt-4 text-sm leading-6 text-body">
              Secure dashboard routes require an active local session.
            </p>
          </SurfaceCard>
        </Container>
      </main>
    );
  }

  return <>{children}</>;
}
