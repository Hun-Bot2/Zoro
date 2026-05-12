import { ArrowButton, Container, SurfaceCard } from "@/components/design-system";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-page text-body">
      <SiteHeader />
      <section className="hero-stage relative overflow-hidden py-24">
        <Container>
          <SurfaceCard className="mx-auto max-w-2xl p-8 text-center">
            <p className="text-sm font-semibold text-violet">404</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-title">
              This Zoro page does not exist.
            </h1>
            <p className="mt-5 text-lg leading-8 text-body">
              Return to the product experience or continue to the authenticated dashboard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ArrowButton href="/">Go home</ArrowButton>
              <ArrowButton href="/dashboard" variant="ghost">
                Dashboard
              </ArrowButton>
            </div>
          </SurfaceCard>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
