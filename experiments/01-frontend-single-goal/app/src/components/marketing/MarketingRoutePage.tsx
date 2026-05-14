import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, LineChart, Network, ShieldCheck } from "lucide-react";

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
import type { MarketingPageContent } from "@/data/site";

const icons = [LineChart, Network, ShieldCheck];

export function MarketingRoutePage({ content }: { content: MarketingPageContent }) {
  return (
    <main id="main-content" className="min-h-screen bg-page text-body transition-colors duration-300">
      <SiteHeader />
      <section className="hero-stage relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold text-violet">{content.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-title sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body sm:text-xl sm:leading-9">
              {content.copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href={content.primaryHref}>{content.primaryAction}</ArrowButton>
              <ArrowButton href={content.secondaryHref} variant="ghost">
                {content.secondaryAction}
              </ArrowButton>
            </div>
          </div>
          <SurfaceCard className="relative z-10 overflow-hidden p-5">
            <div className="rounded-[26px] bg-surface-muted p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-violet">Zoro Console</p>
                  <p className="mt-2 text-4xl font-semibold text-title">{content.metric}</p>
                  <p className="mt-1 text-sm text-body">{content.metricLabel}</p>
                </div>
                <IconFrame className="bg-violet/10 text-violet">
                  <ArrowUpRight className="h-5 w-5" />
                </IconFrame>
              </div>
              <div className="mt-8 grid grid-cols-3 items-end gap-2">
                {[44, 72, 58, 94, 66, 112, 88, 104, 78].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="rounded-t-xl bg-gradient-to-t from-violet to-cyan-400"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {content.proof.map((item) => (
                <div key={item.value} className="rounded-2xl bg-surface-muted p-4">
                  <p className="text-2xl font-semibold text-title">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </Container>
      </section>

      <SectionShell tone="surface" id={content.slug === "pricing" ? "plans" : `${content.slug}-overview`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow={`${content.eyebrow} overview`}
            title="Built from the same primitives as your revenue operations."
            copy="Every page uses the shared design system, responsive spacing, tokenized colors, and dark-mode surfaces introduced in the landing experience."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {content.features.map((feature, index) => {
              const Icon = icons[index % icons.length];

              return (
                <SurfaceCard key={feature.title} as="article" className="p-5">
                  <IconFrame className="text-violet">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </IconFrame>
                  <p className="mt-5 text-sm font-semibold text-violet">{feature.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-title">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-body">{feature.copy}</p>
                  {feature.href ? (
                    <Link
                      href={feature.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet"
                    >
                      Explore {feature.eyebrow}
                      <ChevronRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  ) : null}
                </SurfaceCard>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="page">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Unified data model",
            "Dark-mode-ready surfaces",
            "Responsive product workflows",
          ].map((item) => (
            <SurfaceCard key={item} className="flex items-center gap-4 p-5">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
              <div>
                <h2 className="font-semibold text-title">{item}</h2>
                <p className="mt-1 text-sm leading-6 text-body">
                  Consistent components keep navigation, content density, and visual hierarchy aligned.
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SiteFooter />
    </main>
  );
}
