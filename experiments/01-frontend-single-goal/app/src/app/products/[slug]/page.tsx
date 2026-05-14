import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { productDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(productDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = productDetailPages[slug as keyof typeof productDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const content = productDetailPages[slug as keyof typeof productDetailPages];

  if (!content) {
    notFound();
  }

  return <DetailRoutePage content={content} />;
}
