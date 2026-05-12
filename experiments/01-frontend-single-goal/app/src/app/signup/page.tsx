import type { Metadata } from "next";

import { AuthPage } from "@/components/auth/AuthForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Signup",
  description: "Create a Zoro workspace and start a simulated authenticated SaaS session.",
  path: "/signup",
  noIndex: true,
});

export default function SignupPage() {
  return <AuthPage mode="signup" />;
}
