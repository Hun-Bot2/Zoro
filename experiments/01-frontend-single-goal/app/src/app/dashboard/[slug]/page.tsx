import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { dashboardDetailPages } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

type DashboardPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(dashboardDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DashboardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = dashboardDetailPages[slug as keyof typeof dashboardDetailPages];

  if (!content) {
    return {};
  }

  return createMetadata({
    title: content.eyebrow,
    description: content.copy,
    path: `/dashboard/${slug}`,
    noIndex: true,
  });
}

export default async function DashboardDetailPage({ params }: DashboardPageProps) {
  const { slug } = await params;
  const content = dashboardDetailPages[slug as keyof typeof dashboardDetailPages];

  if (!content) {
    notFound();
  }

  return (
    <ProtectedRoute>
      <DetailRoutePage content={content} />
    </ProtectedRoute>
  );
}
