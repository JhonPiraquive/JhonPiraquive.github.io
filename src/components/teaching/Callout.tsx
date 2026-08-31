import type { ReactNode } from "react";
import { ClayCard } from "@/components/clay/ClayCard";

type CalloutVariant = "callout-info" | "callout-warning" | "callout-tip" | "callout-danger";

type CalloutProps = {
  children: ReactNode;
  title?: string;
  variant?: CalloutVariant;
};

const VARIANT_BORDER: Record<CalloutVariant, string> = {
  "callout-info": "border-[var(--color-secondary)]",
  "callout-warning": "border-[var(--color-accent)]",
  "callout-tip": "border-[var(--color-secondary)]",
  "callout-danger": "border-red-600",
};

export function Callout({ children, title, variant = "callout-info" }: CalloutProps) {
  return (
    <ClayCard className={`my-6 border-l-4 ${VARIANT_BORDER[variant]}`}>
      {title && <strong className="mb-2 block">{title}</strong>}
      {children}
    </ClayCard>
  );
}
