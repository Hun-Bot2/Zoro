import type { Metadata } from "next";

import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Resources",
  description:
    "Read Zoro reports, guides, customer stories, and operating playbooks for scaling internet businesses.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <MarketingRoutePage content={marketingPages.resources} />;
}
