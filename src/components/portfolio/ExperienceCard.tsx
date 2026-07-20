import { ClayCard } from "@/components/clay/ClayCard";
import { ExperienceRoleTimeline } from "@/components/portfolio/ExperienceRoleTimeline";
import type { PortfolioContent } from "@/lib/portfolio";

type ExperienceHighlight = {
  title: string;
  bullets: string[];
};

type RoleTimeline = {
  title: string;
  roles: {
    level: string;
    period: string;
    summary: string;
    projects: string[];
    responsibilities: string[];
    current?: boolean;
  }[];
};

type ExperienceItem = PortfolioContent["experience"][number];

type ExperienceCardProps = {
  job: ExperienceItem;
};

export function ExperienceCard({ job }: ExperienceCardProps) {
  const highlights: ExperienceHighlight[] = [];
  if ("highlights" in job && Array.isArray(job.highlights)) {
    highlights.push(...(job.highlights as ExperienceHighlight[]));
  } else if ("highlight" in job && job.highlight) {
    highlights.push(job.highlight as ExperienceHighlight);
  }

  const roleTimeline =
    "roleTimeline" in job && job.roleTimeline
      ? (job.roleTimeline as RoleTimeline)
      : undefined;

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
      {roleTimeline && (
        <ExperienceRoleTimeline title={roleTimeline.title} roles={roleTimeline.roles} />
      )}
      {job.bullets.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {highlights.map((highlight) => (
        <div
          key={highlight.title}
          className="mt-4 rounded-xl border-l-4 border-[var(--color-secondary)] bg-white/50 p-4"
        >
          <p className="font-semibold text-[var(--color-primary)]">{highlight.title}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {highlight.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </ClayCard>
  );
}
