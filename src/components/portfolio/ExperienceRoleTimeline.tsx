type RoleTimelineItem = {
  level: string;
  period: string;
  summary: string;
  projects: string[];
  responsibilities: string[];
  current?: boolean;
};

type ExperienceRoleTimelineProps = {
  title: string;
  roles: RoleTimelineItem[];
};

export function ExperienceRoleTimeline({ title, roles }: ExperienceRoleTimelineProps) {
  return (
    <div className="mt-5">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
        {title}
      </p>
      <ol className="relative m-0 list-none space-y-0 p-0">
        {roles.map((role, index) => {
          const isLast = index === roles.length - 1;
          const isCurrent = Boolean(role.current);

          return (
            <li key={role.level} className="relative flex gap-4 pb-8 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute left-[11px] top-7 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-accent)]/40"
                />
              )}
              <span
                aria-hidden
                className={[
                  "relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                  isCurrent
                    ? "border-[var(--color-secondary)] bg-[var(--color-secondary)] shadow-[0_0_0_4px_rgba(0,194,255,0.2)]"
                    : "border-[var(--color-accent)] bg-white",
                ].join(" ")}
              >
                {isCurrent && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>
              <div
                className={[
                  "min-w-0 flex-1 rounded-2xl p-4",
                  isCurrent
                    ? "bg-[var(--color-secondary)]/10 ring-1 ring-[var(--color-secondary)]/30"
                    : "bg-white/60 ring-1 ring-[var(--color-primary)]/8",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-base font-semibold text-[var(--color-primary)]">{role.level}</h4>
                  <span
                    className={[
                      "text-xs font-medium",
                      isCurrent ? "text-[var(--color-secondary)]" : "text-[var(--color-accent)]",
                    ].join(" ")}
                  >
                    {role.period}
                  </span>
                </div>
                {role.projects.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.projects.map((project) => (
                      <span
                        key={project}
                        className={[
                          "rounded-lg px-2.5 py-1 text-xs font-semibold",
                          isCurrent
                            ? "bg-[var(--color-secondary)]/20 text-[var(--color-primary)]"
                            : "bg-[var(--color-primary)]/8 text-[var(--color-primary)]",
                        ].join(" ")}
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-sm text-[var(--color-neutral-dark)]">{role.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
