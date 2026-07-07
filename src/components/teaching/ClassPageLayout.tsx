import { Link } from "@/i18n/navigation";
import { ClayCard } from "@/components/clay";
import type { ReactNode } from "react";

export function ClassPageLayout({
  title,
  classTitle,
  pageNumber,
  totalPages,
  track,
  prev,
  next,
  children,
}: {
  title: string;
  classTitle: string;
  pageNumber?: number;
  totalPages?: number;
  track: string;
  prev?: string | null;
  next?: string | null;
  children: ReactNode;
}) {
  const progressLabel =
    pageNumber != null && totalPages != null
      ? `Página ${pageNumber} de ${totalPages}`
      : "Índice de la clase";

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm">
        <Link href="/teaching" className="text-[var(--color-secondary)]">
          ← Portal
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href={`/teaching/${track}`} className="text-[var(--color-secondary)]">
          {track}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-[var(--color-neutral-dark)]/80">{classTitle}</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-[var(--color-accent)]">{progressLabel}</span>
      </nav>
      <ClayCard className="!p-6 sm:!p-8 lg:!p-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--color-accent)]">
          {classTitle}
        </p>
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
