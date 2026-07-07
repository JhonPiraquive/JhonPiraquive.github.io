import { ClayCard } from "@/components/clay/ClayCard";
import type { PortfolioContent } from "@/lib/portfolio";

type ExperienceHighlight = {
  title: string;
  bullets: string[];
};

type ExperienceItem = PortfolioContent["experience"][number];

type ExperienceCardProps = {
  job: ExperienceItem;
};

export function ExperienceCard({ job }: ExperienceCardProps) {
  const highlight = "highlight" in job ? (job.highlight as ExperienceHighlight | undefined) : undefined;

  return (
    <ClayCard className="mb-6">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{job.period}</p>
      <p className="text-[var(--color-primary)]">
        <em>
          {job.company}
          {job.location ? ` — ${job.location}` : ""}
        </em>
      </p>
      {"intro" in job && job.intro && <p className="mt-3">{job.intro}</p>}
      {job.bullets.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {highlight && (
        <div className="mt-4 rounded-xl border-l-4 border-[var(--color-secondary)] bg-white/50 p-4">
          <p className="font-semibold text-[var(--color-primary)]">{highlight.title}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {highlight.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </ClayCard>
  );
}
