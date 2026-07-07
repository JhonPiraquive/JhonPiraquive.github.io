import { ClayCard } from "@/components/clay/ClayCard";
import type { PortfolioContent } from "@/lib/portfolio";

type EducationSectionProps = {
  content: PortfolioContent;
};

export function EducationSection({ content }: EducationSectionProps) {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {content.nav.find((n) => n.id === "education")?.label}
      </h2>
      {content.educationIntro && (
        <p className="mb-8 text-[var(--color-neutral-dark)]/80">{content.educationIntro}</p>
      )}
      {content.education.map((edu) => (
        <ClayCard key={`${edu.degree}-${edu.period}`} className="mb-4">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{edu.period}</p>
          <p className="text-[var(--color-neutral-dark)]/80">
            <em>{edu.location ?? edu.school}</em>
          </p>
        </ClayCard>
      ))}
    </section>
  );
}
