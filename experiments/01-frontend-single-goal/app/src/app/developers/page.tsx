import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";

export default function DevelopersPage() {
  return <MarketingRoutePage content={marketingPages.developers} />;
}
