import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getLessonEntry, getAllLessonMetas } from "@/lib/teaching-lessons-registry";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const metas = await getAllLessonMetas();
  const params: { locale: string; track: string; slug: string[] }[] = [];
  for (const locale of routing.locales) {
    for (const lesson of metas) {
      params.push({
        locale,
        track: lesson.track,
        slug: lesson.slug.split("/"),
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; track: string; slug: string[] }>;
}): Promise<Metadata> {
  const { track, slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const entry = getLessonEntry(track, slug);
  if (!entry) return {};
  const meta = await entry.meta();
  return {
    title: meta.seoTitle ?? meta.title,
    description: meta.seoDescription,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; track: string; slug: string[] }>;
}) {
  const { locale, track, slug: slugParts } = await params;
  setRequestLocale(locale);
  const slug = slugParts.join("/");

  const entry = getLessonEntry(track, slug);
  if (!entry) notFound();

  const { default: LessonComponent } = await entry.component();

  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <LessonComponent locale={locale} />
    </div>
  );
}
