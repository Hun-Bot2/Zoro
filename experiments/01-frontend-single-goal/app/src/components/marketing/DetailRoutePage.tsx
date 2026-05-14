import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers3, LineChart, ShieldCheck } from "lucide-react";

import {
  ArrowButton,
  Container,
  IconFrame,
  SectionHeader,
  SectionShell,
  SurfaceCard,
  cn,
} from "@/components/design-system";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { DetailRouteContent } from "@/data/route-details";

const sectionIcons = [LineChart, Layers3, ShieldCheck];

export function DetailRoutePage({ content }: { content: DetailRouteContent }) {
  return (
    <main id="main-content" className="min-h-screen bg-page text-body transition-colors duration-300">
      <SiteHeader />
      <section className="hero-stage relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold text-violet">{content.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-title sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body sm:text-xl sm:leading-9">
              {content.copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href={content.relatedLinks[0]?.href || "/signup"}>
                {content.relatedLinks[0]?.label || "Explore"}
              </ArrowButton>
              <ArrowButton href={content.relatedLinks[1]?.href || "/pricing"} variant="ghost">
                {content.relatedLinks[1]?.label || "View pricing"}
              </ArrowButton>
            </div>
          </div>

          <SurfaceCard className="relative z-10 overflow-hidden p-5">
            <div className={cn("h-2 rounded-full bg-gradient-to-r", content.accent)} />
            <div className="mt-5 rounded-[26px] bg-surface-muted p-5">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-violet">Route focus</p>
                  <p className="mt-2 text-5xl font-semibold text-title">{content.metric}</p>
                  <p className="mt-2 text-sm leading-6 text-body">{content.metricLabel}</p>
                </div>
                <IconFrame className="bg-violet/10 text-violet">
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </IconFrame>
              </div>
              <div className="mt-8 grid gap-3">
                {content.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-3">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-semibold text-title">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        </Container>
      </section>

      <SectionShell tone="surface">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            eyebrow={`${content.eyebrow} detail`}
            title="A dedicated destination with topic-specific operations and next steps."
            copy="Each route keeps the shared Zoro visual system while giving the selected product, solution, resource, or company area its own content and path."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {content.sections.map((section, index) => {
              const Icon = sectionIcons[index % sectionIcons.length];

              return (
                <SurfaceCard key={section.title} as="article" className="p-5">
                  <IconFrame className="text-violet">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </IconFrame>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-title">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-body">{section.copy}</p>
                </SurfaceCard>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Connected routes"
            title="Continue through the site without dead ends."
            copy="Related links point to distinct destinations so navigation, cards, and CTAs keep moving through meaningful pages."
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {content.relatedLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="rounded-[26px] bg-white/8 p-5 text-white ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                <span className="text-sm font-semibold text-cyan-200">{link.label}</span>
                <span className="mt-6 flex items-center gap-2 text-lg font-semibold">
                  Open route
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SiteFooter />
    </main>
  );
}
