import { ExperienceCard } from "@/components/portfolio/ExperienceCard";
import type { PortfolioContent } from "@/lib/portfolio";

type ExperienceSectionProps = {
  content: PortfolioContent;
  expYears: number;
};

export function ExperienceSection({ content, expYears }: ExperienceSectionProps) {
  const intro = content.experienceIntro?.replace("{expYears}", String(expYears));
  return (
    <section id="resume" className="bg-[var(--color-neutral-light)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {content.nav.find((n) => n.id === "resume")?.label}
        </h2>
        {intro && (
          <p className="mb-8 text-[var(--color-neutral-dark)]/80">{intro}</p>
        )}
        {content.experience.map((job) => (
          <ExperienceCard key={`${job.company}-${job.title}-${job.period}`} job={job} />
        ))}
      </div>
    </section>
  );
}
