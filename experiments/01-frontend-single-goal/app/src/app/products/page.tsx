import type { Metadata } from "next";

import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description:
    "Explore Zoro products for payments, billing, money movement, risk controls, and revenue reporting.",
  path: "/products",
});

export default function ProductsPage() {
  return <MarketingRoutePage content={marketingPages.products} />;
}
