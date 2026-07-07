import type { ReactNode } from "react";

type ClayButtonProps = {
  children: ReactNode;
  href?: string;
  ghost?: boolean;
  className?: string;
  onClick?: () => void;
};

export function ClayButton({
  children,
  href,
  ghost,
  className = "",
  onClick,
}: ClayButtonProps) {
  const cls = `clay-button ${ghost ? "clay-button--ghost" : ""} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
