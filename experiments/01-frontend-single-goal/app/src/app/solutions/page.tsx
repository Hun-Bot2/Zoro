import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";

export default function SolutionsPage() {
  return <MarketingRoutePage content={marketingPages.solutions} />;
}
