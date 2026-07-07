import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  className?: string;
};

export function CodeBlock({ children, className }: CodeBlockProps) {
  const lang = className?.replace("language-", "") ?? "";
  return (
    <pre className="my-4 overflow-x-auto rounded-xl bg-[var(--color-neutral-dark)] p-4 text-sm text-white">
      <code data-lang={lang}>{children}</code>
    </pre>
  );
}
