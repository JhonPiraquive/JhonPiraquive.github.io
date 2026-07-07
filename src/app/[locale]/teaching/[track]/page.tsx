import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ClayCard } from "@/components/clay";
import { getAllLessons, TRACKS } from "@/lib/teaching";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const params: { locale: string; track: string }[] = [];
  for (const locale of routing.locales) {
    for (const track of TRACKS) {
      params.push({ locale, track: track.id });
    }
  }
  return params;
}

export default async function TrackIndexPage({
  params,
}: {
  params: Promise<{ locale: string; track: string }>;
}) {
  const { locale, track } = await params;
  setRequestLocale(locale);
  const trackMeta = TRACKS.find((t) => t.id === track);
  if (!trackMeta) notFound();
  const lessons = (await getAllLessons())
    .filter((l) => l.track === track)
    .sort((a, b) => a.order - b.order);
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] px-6 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/teaching" className="text-[var(--color-secondary)]">
          ← {isEn ? "Portal" : "Portal"}
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
          {isEn ? trackMeta.titleEn : trackMeta.titleEs}
        </h1>
        <p className="mt-2 text-[var(--color-neutral-dark)]/70">
          {isEn ? trackMeta.descEn : trackMeta.descEs}
        </p>
        <ClayCard className="mt-8 overflow-hidden !p-0">
          <ul className="divide-y divide-[var(--color-neutral-mid)]/20">
            {lessons.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/teaching/${track}/${l.slug}`}
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--color-neutral-light)]/90 sm:px-6 sm:py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-sm font-semibold text-[var(--color-accent)]">
                    {l.order < 100 ? String(l.order).padStart(2, "0") : "★"}
                  </span>
                  <span className="text-base font-medium leading-snug text-[var(--color-primary)]">
                    {l.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </ClayCard>
      </div>
    </div>
  );
}
