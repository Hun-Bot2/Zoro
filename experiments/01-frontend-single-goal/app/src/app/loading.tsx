import { Container, SurfaceCard } from "@/components/design-system";

export default function Loading() {
  return (
    <main id="main-content" className="min-h-screen bg-page py-24 text-body">
      <Container>
        <SurfaceCard className="mx-auto max-w-lg p-6 text-center">
          <p className="text-sm font-semibold text-violet">Loading</p>
          <h1 className="mt-3 text-3xl font-semibold text-title">Preparing the experience</h1>
          <p className="mt-4 text-sm leading-6 text-body">
            The interface is loading with the same design tokens and theme state.
          </p>
        </SurfaceCard>
      </Container>
    </main>
  );
}
