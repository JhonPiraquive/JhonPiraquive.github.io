import type { ReactNode } from "react";

type ClayCardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  onClick?: () => void;
};

export function ClayCard({ children, className = "", dark = false, onClick }: ClayCardProps) {
  return (
    <div
      className={`clay-card ${dark ? "clay-card--dark" : ""} ${className}`}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
