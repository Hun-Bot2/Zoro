import {
  ArrowUpRight,
  Check,
  ChevronRight,
  MoveRight,
  PlayCircle,
  Search,
} from "lucide-react";

import {
  ArrowButton,
  Container,
  IconFrame,
  Pill,
  SectionHeader,
  SectionShell,
  SurfaceCard,
  cn,
} from "@/components/design-system";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  AgenticMiniVisual,
  BillingMiniVisual,
  DeveloperConsoleVisual,
  HeroCommerceVisual,
  IssuingMiniVisual,
  MetricsOrbit,
  MoneyMovementMiniVisual,
  NewsVisual,
  PaymentsMiniVisual,
  PlatformMiniVisual,
  StartupVisual,
} from "@/components/ProductVisuals";
import {
  caseStudies,
  commerceStats,
  developerPoints,
  integrationPaths,
  newsItems,
  productCards,
  solutionTabs,
  trustSignals,
} from "@/data/landing";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-page text-body transition-colors duration-300">
      <SiteHeader />
      <Hero />
      <ProductSuite />
      <GlobalCommerce />
      <BusinessScale />
      <DeveloperInfrastructure />
      <NewsAndCta />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero-stage relative overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/80 to-transparent dark:from-[#07182c]/80" />
      <Container className="grid items-center gap-8 pb-10 pt-8 sm:pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:pb-16 lg:pt-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-surface/80 px-3 py-1.5 text-sm font-semibold text-violet shadow-sm">
            Global GDP running on modern rails
            <MoveRight aria-hidden="true" className="h-4 w-4" />
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] text-title sm:text-6xl lg:text-7xl">
            Revenue infrastructure for ambitious businesses.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-body sm:text-xl sm:leading-9">
            Accept payments, build billing models, move money, and operate financial products from one composable platform.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ArrowButton href="/signup">Start now</ArrowButton>
            <ArrowButton href="/solutions" variant="ghost">
              Contact sales
            </ArrowButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Revenue products">
            {solutionTabs.map((tab, index) => (
              <Pill key={tab} active={index === 0}>
                {tab}
              </Pill>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:translate-x-4">
          <HeroCommerceVisual />
        </div>
      </Container>
    </section>
  );
}

function ProductSuite() {
  return (
    <SectionShell id="products" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeader
          eyebrow="Flexible solutions"
          title="A complete financial toolkit for every revenue model."
          copy="Use products independently or combine them into a deeply integrated money movement system."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {trustSignals.slice(0, 6).map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-surface-muted px-3 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface text-violet shadow-sm">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-title">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {productCards.map(({ icon: Icon, eyebrow, title, copy, accent, stats }, index) => (
          <SurfaceCard
            key={title}
            as="article"
            className="group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-stripe"
          >
            <div className={cn("mb-5 h-2 rounded-full bg-gradient-to-r", accent)} />
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-violet">{eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-title">{title}</h3>
              </div>
              <IconFrame>
                <Icon aria-hidden="true" className="h-5 w-5" />
              </IconFrame>
            </div>
            <p className="mt-4 text-sm leading-7 text-body">{copy}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <span key={stat} className="rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-muted">
                  {stat}
                </span>
              ))}
            </div>
            {index === 0 ? <PaymentsMiniVisual /> : null}
            {index === 1 ? <BillingMiniVisual /> : null}
            {index === 2 ? <AgenticMiniVisual /> : null}
            {index === 3 ? <IssuingMiniVisual /> : null}
            {index === 4 ? <MoneyMovementMiniVisual /> : null}
            {index === 5 ? <PlatformMiniVisual /> : null}
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}

function GlobalCommerce() {
  return (
    <SectionShell tone="dark" id="solutions">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Global commerce"
            title="A resilient network for businesses of every size."
            copy="Route payments, reconcile balances, manage subscriptions, and monitor risk from a unified operational layer."
            inverse
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {commerceStats.map((stat) => (
              <div key={stat.value} className="rounded-[24px] bg-white/7 p-5 ring-1 ring-white/10">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <MetricsOrbit />
      </div>
    </SectionShell>
  );
}

function BusinessScale() {
  return (
    <SectionShell id="resources" tone="page">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Use cases"
          title="Powering enterprises, platforms, and startups from the same foundation."
          copy="The surface area expands from simple checkout to full financial workflows without forcing teams onto different systems."
        />
        <StartupVisual />
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <SurfaceCard key={study.company} as="article" className="overflow-hidden p-0">
            <div className={cn("relative h-56 bg-gradient-to-br", study.palette)}>
              <div className="absolute left-6 top-6 h-32 w-48 skew-x-[-14deg] rounded-[24px] bg-white/65 shadow-panel dark:bg-white/25" />
              <div className="absolute bottom-6 right-6 h-28 w-36 skew-x-[-14deg] rounded-[22px] bg-ink/85 dark:bg-slate-950/80" />
              <div className="absolute bottom-10 right-10 h-10 w-20 skew-x-[-14deg] rounded-xl bg-white/90 dark:bg-white/70" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-violet">{study.company}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-title">{study.title}</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-semibold text-title">{study.metricA}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{study.labelA}</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-title">{study.metricB}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{study.labelB}</p>
                </div>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet">
                Read the story
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}

function DeveloperInfrastructure() {
  return (
    <SectionShell id="developers" tone="dark">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Developer platform"
            title="Reliable, extensible infrastructure for every stack."
            copy="APIs, hosted components, no-code controls, and observability tools let teams move from prototype to global operations."
            inverse
          />
          <div className="mt-9 space-y-4">
            {developerPoints.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex gap-4 rounded-[24px] bg-white/6 p-4 ring-1 ring-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DeveloperConsoleVisual />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {integrationPaths.map(({ icon: Icon, title, copy }) => (
          <SurfaceCard key={title} as="article" className="p-5">
            <IconFrame className="text-violet">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </IconFrame>
            <h3 className="mt-5 text-xl font-semibold text-title">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-body">{copy}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet">
              Get started
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}

function NewsAndCta() {
  return (
    <SectionShell id="pricing" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader
          eyebrow="What's happening"
          title="Fresh ideas from the internet economy."
          copy="Product releases, operating guides, and commerce data for teams building financial infrastructure."
        />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {newsItems.map((item, index) => (
            <SurfaceCard
              key={item.title}
              as="article"
              className="grid gap-5 bg-surface-muted p-4 md:block lg:grid lg:grid-cols-[220px_1fr]"
            >
              {index === 0 ? <NewsVisual /> : <MiniNewsVisual index={index} />}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-violet">{item.label}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-title">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{item.copy}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet">
                  Read more
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>

      <div
        id="start"
        className="mt-16 overflow-hidden rounded-[36px] bg-ink p-6 shadow-stripe sm:p-8 lg:p-10 dark:bg-[#061427]"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-cyan-200">Ready to get started?</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Create an account instantly or design a custom revenue package.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <ArrowButton href="/signup" variant="light">
                Start now
              </ArrowButton>
              <ArrowButton href="/solutions" variant="ghost" className="text-white hover:text-cyan-200">
                Contact sales
              </ArrowButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["See what you pay", "Transparent pricing and localized payment method costs."],
              ["Start building", "SDKs, hosted flows, and test data ready in minutes."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[26px] bg-white/8 p-5 ring-1 ring-white/10">
                <Check aria-hidden="true" className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function MiniNewsVisual({ index }: { index: number }) {
  const colors =
    index === 1
      ? "from-emerald-300 via-cyan-200 to-sky-300"
      : "from-amber-300 via-rose-200 to-violet-300";

  return (
    <div className={cn("relative h-44 overflow-hidden rounded-[28px] bg-gradient-to-br p-4", colors)}>
      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm">
        {index === 1 ? (
          <PlayCircle aria-hidden="true" className="h-6 w-6" />
        ) : (
          <Search aria-hidden="true" className="h-6 w-6" />
        )}
      </div>
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-5 items-end gap-2">
        {[44, 74, 58, 91, 66].map((height) => (
          <span key={height} className="rounded-t-xl bg-white/80" style={{ height }} />
        ))}
      </div>
    </div>
  );
}
