"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, CheckCircle2, CreditCard, LineChart, LogOut, ShieldCheck } from "lucide-react";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  ArrowButton,
  Container,
  IconFrame,
  SectionHeader,
  SectionShell,
  SurfaceCard,
} from "@/components/design-system";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const dashboardMetrics = [
  { label: "Revenue processed", value: "$428.6K", delta: "+18.2%" },
  { label: "Successful payments", value: "98.7%", delta: "+2.4%" },
  { label: "Open risk reviews", value: "14", delta: "-9" },
  { label: "Active workflows", value: "32", delta: "+6" },
];

const workflowItems = [
  "Billing usage meters synchronized",
  "Seller onboarding review completed",
  "Treasury payout batch ready",
  "Dashboard session authenticated",
];

export function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const router = useRouter();
  const { logout, user } = useAuth();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <main id="main-content" className="min-h-screen bg-page text-body transition-colors duration-300">
      <SiteHeader />
      <section className="bg-ink py-14 dark:bg-[#061427]">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-cyan-200">Authenticated dashboard</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1] text-white sm:text-6xl">
              Welcome back, {user?.name}.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Your simulated Zoro session is active for {user?.company} on the {user?.plan} plan.
            </p>
            <p className="mt-3 text-sm font-semibold text-cyan-200">Signed in as {user?.email}</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            <LogOut aria-hidden="true" className="h-4 w-4" />
            Log out
          </button>
        </Container>
      </section>

      <SectionShell tone="page">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <SurfaceCard key={metric.label} className="p-5">
              <p className="text-sm font-semibold text-muted">{metric.label}</p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="text-4xl font-semibold text-title">{metric.value}</p>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-500">
                  {metric.delta}
                </span>
              </div>
            </SurfaceCard>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <SectionHeader
                eyebrow="Revenue overview"
                title="Live product state for your authenticated workspace."
                copy="This dashboard uses the client-side auth session to render user-specific state while keeping the same SaaS visual system."
              />
              <ArrowButton href="/products" variant="ghost">
                Explore products
              </ArrowButton>
            </div>
            <div className="mt-8 grid grid-cols-12 items-end gap-2">
              {[52, 64, 48, 72, 84, 66, 96, 78, 112, 90, 124, 104].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="rounded-t-xl bg-gradient-to-t from-violet to-cyan-400"
                  style={{ height }}
                />
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-6">
            <p className="text-sm font-semibold text-violet">Operations queue</p>
            <div className="mt-6 space-y-3">
              {workflowItems.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-title">{item}</span>
                  </div>
                  <span className="text-xs font-semibold text-muted">{index === 3 ? "session" : "ready"}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: CreditCard,
              title: "Payments",
              copy: "Checkout conversion and authorization routes are healthy.",
            },
            {
              icon: ShieldCheck,
              title: "Risk",
              copy: "Risk policies are active across global and platform flows.",
            },
            {
              icon: LineChart,
              title: "Billing",
              copy: "Usage meters and recurring invoices are in sync.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <SurfaceCard key={title} className="p-5">
              <IconFrame className="text-violet">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </IconFrame>
              <h2 className="mt-5 text-2xl font-semibold text-title">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-body">{copy}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet">
                View details
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </SurfaceCard>
          ))}
        </div>

        <SurfaceCard className="mt-10 p-6 text-center">
          <p className="text-sm font-semibold text-emerald-500">Empty state</p>
          <h2 className="mt-3 text-3xl font-semibold text-title">No disputes need attention.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-body">
            When payment disputes, failed payouts, or urgent risk reviews appear, this dashboard will render them here with the same authenticated state.
          </p>
        </SurfaceCard>
      </SectionShell>
      <SiteFooter />
    </main>
  );
}
