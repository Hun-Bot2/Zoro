"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import { ArrowButton, Container, SurfaceCard, cn } from "@/components/design-system";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { useAuth } from "./AuthProvider";

type AuthMode = "login" | "signup";

type FormState = {
  name: string;
  company: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "submitting" | "error";

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validateForm(values: FormState, mode: AuthMode) {
  const errors: FormErrors = {};
  const email = values.email.trim();
  const password = values.password.trim();

  if (mode === "signup" && values.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (mode === "signup" && values.company.trim().length < 2) {
    errors.company = "Enter a company name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    errors.email = "Enter a valid work email.";
  }

  if (password.length < 8) {
    errors.password = "Use at least 8 characters.";
  } else if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    errors.password = "Use letters and numbers.";
  }

  if (mode === "signup" && values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match.";
  }

  return errors;
}

function getSafeNextPath() {
  const next = new URLSearchParams(window.location.search).get("next");

  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/dashboard";
  }

  return next;
}

export function AuthPage({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const { isReady, login, signup, user } = useAuth();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const isSignup = mode === "signup";
  const title = isSignup ? "Create your Zoro workspace." : "Sign in to your Zoro workspace.";
  const copy = isSignup
    ? "Start with a local demo session that unlocks the dashboard and authenticated navigation."
    : "Use any valid email and an 8-character password to simulate a secure session.";

  useEffect(() => {
    if (isReady && user) {
      router.replace("/dashboard");
    }
  }, [isReady, router, user]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("idle");

    const nextErrors = validateForm(values, mode);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const nextPath = getSafeNextPath();
    const payload = {
      email: values.email.trim(),
      name: values.name.trim(),
      company: values.company.trim(),
    };

    try {
      setSubmitStatus("submitting");
      await new Promise((resolve) => window.setTimeout(resolve, 120));

      if (payload.email.toLowerCase().startsWith("error@")) {
        throw new Error("Simulated auth service failure.");
      }

      if (isSignup) {
        signup(payload);
      } else {
        login(payload);
      }

      router.push(nextPath);
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-page text-body transition-colors duration-300">
      <SiteHeader />
      <section className="hero-stage relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold text-violet">{isSignup ? "Signup" : "Login"}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-title sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-body">{copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href="/pricing">Compare plans</ArrowButton>
              <ArrowButton href="/developers" variant="ghost">
                Developer docs
              </ArrowButton>
            </div>
          </div>

          <SurfaceCard className="relative z-10 mx-auto w-full max-w-lg p-6">
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              {isSignup ? (
                <>
                  <Field
                    id="name"
                    label="Full name"
                    value={values.name}
                    error={errors.name}
                    autoComplete="name"
                    onChange={(value) => updateField("name", value)}
                  />
                  <Field
                    id="company"
                    label="Company"
                    value={values.company}
                    error={errors.company}
                    autoComplete="organization"
                    onChange={(value) => updateField("company", value)}
                  />
                </>
              ) : null}
              <Field
                id="email"
                label="Work email"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => updateField("email", value)}
              />
              <Field
                id="password"
                label="Password"
                type="password"
                value={values.password}
                error={errors.password}
                autoComplete={isSignup ? "new-password" : "current-password"}
                onChange={(value) => updateField("password", value)}
              />
              {isSignup ? (
                <Field
                  id="confirmPassword"
                  label="Confirm password"
                  type="password"
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  autoComplete="new-password"
                  onChange={(value) => updateField("confirmPassword", value)}
                />
              ) : null}

              {submitStatus === "error" ? (
                <div
                  role="alert"
                  className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-500"
                >
                  We could not complete the simulated auth request. Use a different email and try again.
                </div>
              ) : null}

              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="flex h-11 w-full items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-marine focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-ink"
              >
                {submitStatus === "submitting"
                  ? isSignup
                    ? "Creating account..."
                    : "Signing in..."
                  : isSignup
                    ? "Create account"
                    : "Sign in"}
              </button>

              <p className="text-center text-sm text-body">
                {isSignup ? "Already have an account?" : "Need a workspace?"}{" "}
                <Link
                  href={isSignup ? "/login" : "/signup"}
                  className="font-semibold text-violet"
                >
                  {isSignup ? "Sign in" : "Create account"}
                </Link>
              </p>
            </form>
          </SurfaceCard>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-title">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-2 h-11 w-full rounded-2xl border bg-surface px-4 text-sm text-title outline-none transition focus:ring-2 focus:ring-violet",
          error ? "border-rose-400" : "border-line",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-rose-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
