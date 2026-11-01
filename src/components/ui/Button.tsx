import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

const variants: Record<Variant, string> = {
  // accent-600 (not -500) so white button text clears WCAG AA contrast (4.5:1)
  primary: "bg-accent-600 text-white hover:bg-accent-700",
  secondary: "bg-brand-900 text-white hover:bg-brand-800",
  ghost: "bg-transparent text-brand-900 ring-1 ring-inset ring-brand-700/30 hover:bg-brand-50",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
