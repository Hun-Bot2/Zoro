import type { Metadata } from "next";

import { AuthPage } from "@/components/auth/AuthForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Login",
  description: "Sign in to your Zoro workspace and continue to the authenticated dashboard.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
