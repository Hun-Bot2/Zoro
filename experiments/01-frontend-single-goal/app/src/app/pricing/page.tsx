import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";

export default function PricingPage() {
  return <MarketingRoutePage content={marketingPages.pricing} />;
}
