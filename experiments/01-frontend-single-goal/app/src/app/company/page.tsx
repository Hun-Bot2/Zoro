import type { Metadata } from "next";

import { DetailRoutePage } from "@/components/marketing/DetailRoutePage";
import { companyOverviewPage } from "@/data/route-details";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Company",
  description: companyOverviewPage.copy,
  path: "/company",
});

export default function CompanyPage() {
  return <DetailRoutePage content={companyOverviewPage} />;
}
