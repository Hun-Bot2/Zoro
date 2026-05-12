import type { Metadata } from "next";

import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Developers",
  description:
    "Build with Zoro APIs, typed SDKs, hosted components, webhook replay, and production observability tools.",
  path: "/developers",
});

export default function DevelopersPage() {
  return <MarketingRoutePage content={marketingPages.developers} />;
}
