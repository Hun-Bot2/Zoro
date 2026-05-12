import type { Metadata } from "next";

import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Solutions",
  description:
    "Find Zoro solutions for enterprises, platforms, startups, marketplaces, SaaS businesses, and AI commerce.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <MarketingRoutePage content={marketingPages.solutions} />;
}
