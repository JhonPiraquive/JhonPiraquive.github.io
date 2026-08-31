import type { CSSProperties, ReactNode } from "react";

type ClayCardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

export function ClayCard({ children, className = "", dark = false, onClick, style }: ClayCardProps) {
  return (
    <div
      className={`clay-card ${dark ? "clay-card--dark" : ""} ${className}`}
      style={style}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
