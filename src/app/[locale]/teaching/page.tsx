import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ClayCard } from "@/components/clay";
import { TRACKS } from "@/lib/teaching";
import type { Locale } from "@/i18n/routing";

export default async function TeachingPortalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1
          className="mb-2 text-4xl font-bold text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {isEn ? "Expand your mind" : "¡Expande tu mente!"}
        </h1>
        <p className="mb-10 text-lg text-[var(--color-neutral-dark)]/70">
          {isEn ? "Discover and learn something new." : "Descubre y aprende algo nuevo."}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {TRACKS.map((track) => (
            <Link key={track.id} href={`/teaching/${track.id}`}>
              <ClayCard className="h-full cursor-pointer transition hover:scale-[1.02]">
                <span className="text-3xl">{track.icon}</span>
                <h2 className="mt-3 text-xl font-semibold text-[var(--color-primary)]">
                  {isEn ? track.titleEn : track.titleEs}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-neutral-dark)]/75">
                  {isEn ? track.descEn : track.descEs}
                </p>
              </ClayCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
