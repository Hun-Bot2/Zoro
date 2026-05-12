import type { Metadata } from "next";

import { DashboardPage } from "@/components/dashboard/DashboardPage";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Dashboard",
  description: "View authenticated Zoro workspace metrics, operations state, and product activity.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardRoute() {
  return <DashboardPage />;
}
