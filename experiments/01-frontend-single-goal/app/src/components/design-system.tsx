import type { ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "page" | "surface" | "dark";
};

export function SectionShell({
  children,
  className,
  id,
  tone = "page",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 transition-colors duration-300 sm:py-20 lg:py-24",
        tone === "page" && "bg-page",
        tone === "surface" && "bg-surface",
        tone === "dark" && "bg-ink dark:bg-[#061427]",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  inverse = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "mb-4 text-sm font-semibold",
          inverse ? "text-sky-200" : "text-violet",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl",
          inverse ? "text-white" : "text-title",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-8",
            inverse ? "text-slate-300" : "text-body",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

type ArrowButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "dark" | "light" | "ghost";
  className?: string;
};

export function ArrowButton({
  children,
  href = "#",
  variant = "dark",
  className,
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page",
        variant === "dark" &&
          "bg-ink text-white shadow-panel hover:-translate-y-0.5 hover:bg-marine focus-visible:ring-ink dark:bg-white dark:text-ink dark:hover:bg-skyglass",
        variant === "light" &&
          "bg-white text-ink shadow-panel hover:-translate-y-0.5 hover:bg-skyglass focus-visible:ring-white dark:bg-cyan-100 dark:text-ink dark:hover:bg-white",
        variant === "ghost" &&
          "text-title hover:text-violet focus-visible:ring-violet",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function SurfaceCard({
  children,
  className,
  as: Component = "div",
}: SurfaceCardProps) {
  return (
    <Component
      className={cn(
        "rounded-[28px] border border-line bg-surface text-body shadow-[0_14px_50px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:shadow-[0_20px_70px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}

type IconFrameProps = {
  children: ReactNode;
  className?: string;
};

export function IconFrame({ children, className }: IconFrameProps) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-title",
        className,
      )}
    >
      {children}
    </span>
  );
}

type PillProps = {
  children: ReactNode;
  active?: boolean;
  className?: string;
};

export function Pill({ children, active = false, className }: PillProps) {
  return (
    <span
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-300",
        active
          ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink"
          : "border-line bg-surface/75 text-title/70 dark:bg-surface-muted/75",
        className,
      )}
    >
      {children}
    </span>
  );
}

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm font-semibold text-white dark:bg-white dark:text-ink",
        className,
      )}
    >
      Z
    </span>
  );
}
