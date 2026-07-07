import { Link } from "@/i18n/navigation";
import { ClayCard } from "@/components/clay";
import type { ReactNode } from "react";

export function LessonLayout({
  title,
  track,
  locale,
  prev,
  next,
  children,
}: {
  title: string;
  track: string;
  locale: string;
  prev?: string | null;
  next?: string | null;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm">
        <Link href="/teaching" className="text-[var(--color-secondary)]">
          ← Portal
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="uppercase text-[var(--color-accent)]">{track}</span>
      </nav>
      <ClayCard className="!p-6 sm:!p-8 lg:!p-10">
        <h1 className="mb-8 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h1>
        <div className="prose prose-slate max-w-none lesson-content">{children}</div>
      </ClayCard>
      <div className="mt-8 flex justify-between gap-4">
        {prev ? (
          <Link href={`/teaching/${track}/${prev}`} className="clay-button clay-button--ghost !text-[var(--color-primary)]">
            ← Anterior
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/teaching/${track}/${next}`} className="clay-button">
            Siguiente →
          </Link>
        )}
      </div>
    </article>
  );
}
