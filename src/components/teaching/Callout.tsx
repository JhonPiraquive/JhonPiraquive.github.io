import type { ReactNode } from "react";
import { ClayCard } from "@/components/clay/ClayCard";

type CalloutProps = {
  children: ReactNode;
  title?: string;
};

export function Callout({ children, title }: CalloutProps) {
  return (
    <ClayCard className="my-6 border-l-4 border-[var(--color-secondary)]">
      {title && <strong className="mb-2 block">{title}</strong>}
      {children}
    </ClayCard>
  );
}
