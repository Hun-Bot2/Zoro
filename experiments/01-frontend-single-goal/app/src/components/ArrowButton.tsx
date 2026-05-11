import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "./Section";

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
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "dark" &&
          "bg-ink text-white shadow-panel hover:-translate-y-0.5 hover:bg-marine focus-visible:ring-ink",
        variant === "light" &&
          "bg-white text-ink shadow-panel hover:-translate-y-0.5 hover:bg-skyglass focus-visible:ring-white",
        variant === "ghost" &&
          "text-ink hover:text-violet focus-visible:ring-violet",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
