import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { companyDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(companyDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = companyDetailPages[slug as keyof typeof companyDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/company/${slug}`,
  });
}

export default async function CompanyDetailPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const content = companyDetailPages[slug as keyof typeof companyDetailPages];

  if (!content) {
    notFound();
  }

  return <DetailRoutePage content={content} />;
}
