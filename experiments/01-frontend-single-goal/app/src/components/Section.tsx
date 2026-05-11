import type { ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div>
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
          inverse ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-8",
            inverse ? "text-slate-300" : "text-slate-600",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
