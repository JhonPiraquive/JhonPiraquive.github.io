import Image from "next/image";
import { ClayBadge } from "@/components/clay/ClayBadge";
import { ClayCard } from "@/components/clay/ClayCard";
import type { PortfolioContent } from "@/lib/portfolio";

type AboutSectionProps = {
  content: PortfolioContent;
  age: number;
  expYears: number;
};

export function AboutSection({ content, age, expYears }: AboutSectionProps) {
  const summary = content.about.summary
    .replace("{expYears}", String(expYears))
    .replace("{age}", String(age));

  return (
    <section id="about" className="bg-[var(--color-neutral-light)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <Image
          src="/assets/img/profile-img.jpg"
          alt={content.brand.name}
          width={400}
          height={400}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="clay-card w-full max-w-md object-cover"
        />
        <div>
          <h2
            className="text-center text-3xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {content.about.title}
          </h2>
          <p className="mt-4 text-justify">{summary}</p>

          <ClayCard className="mt-6">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">{content.about.role}</h3>
            <p className="mt-2 italic text-[var(--color-neutral-dark)]/80">{content.about.motto}</p>
          </ClayCard>

          <p className="mt-6 text-justify">{content.about.bio}</p>

          <div className="mt-6">
            <h4 className="mb-3 font-semibold text-[var(--color-primary)]">Idiomas</h4>
            <div className="flex flex-wrap gap-2">
              {content.about.languages.map((l) => (
                <ClayBadge key={l.name}>
                  {l.name}: {l.level}
                </ClayBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
