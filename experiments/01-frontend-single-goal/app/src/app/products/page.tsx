import { MarketingRoutePage } from "@/components/marketing/MarketingRoutePage";
import { marketingPages } from "@/data/site";

export default function ProductsPage() {
  return <MarketingRoutePage content={marketingPages.products} />;
}
