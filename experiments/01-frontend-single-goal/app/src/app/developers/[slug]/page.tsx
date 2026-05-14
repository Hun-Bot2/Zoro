import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { developerDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type DeveloperPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(developerDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DeveloperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = developerDetailPages[slug as keyof typeof developerDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/developers/${slug}`,
  });
}

export default async function DeveloperDetailPage({ params }: DeveloperPageProps) {
  const { slug } = await params;
  const content = developerDetailPages[slug as keyof typeof developerDetailPages];

  if (!content) {
    notFound();
  }

  return <DetailRoutePage content={content} />;
}
