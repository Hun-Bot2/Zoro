import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { resourceDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(resourceDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = resourceDetailPages[slug as keyof typeof resourceDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/resources/${slug}`,
  });
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const content = resourceDetailPages[slug as keyof typeof resourceDetailPages];

  if (!content) {
    notFound();
  }

  return <DetailRoutePage content={content} />;
}
