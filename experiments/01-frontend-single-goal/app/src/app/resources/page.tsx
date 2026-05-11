import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";

export default function ResourcesPage() {
  return <MarketingRoutePage content={marketingPages.resources} />;
}
