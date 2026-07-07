import { Link } from "@/i18n/navigation";

export type ClassPageLink = {
  slug: string;
  title: string;
  description: string;
  readMinutes: number;
};

export function ClassPagesNavSection({
  track,
  classSlug,
  pages,
}: {
  track: string;
  classSlug: string;
  pages: ClassPageLink[];
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Páginas de esta clase"}</h2>
      <p className="my-4 text-[var(--color-neutral-dark)]/80">
        {
          "Recorre las páginas en orden. Cada una agrupa 2–4 temas (~15–20 min). Usa la navegación anterior/siguiente al final de cada página."
        }
      </p>
      <ol className="my-6 space-y-3">
        {pages.map((page, index) => (
          <li key={page.slug}>
            <Link
              href={`/teaching/${track}/${classSlug}/${page.slug}`}
              className="block rounded-xl border border-[var(--color-neutral-mid)]/25 bg-white/60 px-4 py-3 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5"
            >
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                {`Página ${index + 1}`}
                <span className="ml-2 font-normal text-[var(--color-neutral-dark)]/60">
                  {`· ~${page.readMinutes} min`}
                </span>
              </span>
              <span className="mt-1 block text-base font-medium text-[var(--color-primary)]">{page.title}</span>
              <span className="mt-1 block text-sm text-[var(--color-neutral-dark)]/70">{page.description}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
