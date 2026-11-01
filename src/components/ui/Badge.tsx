import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "pending" | "active";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    pending: "bg-amber-50 text-amber-800 ring-1 ring-amber-200",
    active: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/**
 * Renders a credential/status badge only if `active` is true; otherwise renders
 * nothing (or a "pending" variant if showPending is set). Centralizes the
 * honesty rule: no claim appears on the page unless its backing flag is true.
 */
export function CredentialBadge({
  active,
  label,
  pendingLabel,
  showPending = true,
}: {
  active: boolean;
  label: string;
  pendingLabel?: string;
  showPending?: boolean;
}) {
  if (active) return <Badge tone="active">{label}</Badge>;
  if (!showPending) return null;
  return <Badge tone="pending">{pendingLabel ?? `${label} — in progress`}</Badge>;
}
