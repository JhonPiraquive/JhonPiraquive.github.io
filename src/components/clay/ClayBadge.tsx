import type { ReactNode } from "react";

type ClayBadgeProps = {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
};

export function ClayBadge({ children, onDark, className = "" }: ClayBadgeProps) {
  return (
    <span className={`clay-badge ${onDark ? "clay-badge--on-dark" : ""} ${className}`}>
      {children}
    </span>
  );
}
