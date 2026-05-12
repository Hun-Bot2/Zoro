import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Revenue Infrastructure for Ambitious Businesses",
  description:
    "Explore Zoro's Stripe-inspired revenue infrastructure for payments, billing, platforms, developers, and global commerce.",
  path: "/",
});

export default function Home() {
  return <LandingPage />;
}
