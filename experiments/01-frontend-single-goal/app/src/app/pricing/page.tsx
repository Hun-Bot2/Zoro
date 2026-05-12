import type { Metadata } from "next";

import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Compare Zoro pricing packages for launch, scale, and enterprise revenue infrastructure needs.",
  path: "/pricing",
});

export default function PricingPage() {
  return <MarketingRoutePage content={marketingPages.pricing} />;
}
