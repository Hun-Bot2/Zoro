import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { solutionDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(solutionDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = solutionDetailPages[slug as keyof typeof solutionDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const content = solutionDetailPages[slug as keyof typeof solutionDetailPages];

  if (!content) {
    notFound();
  }

  return <DetailRoutePage content={content} />;
}
