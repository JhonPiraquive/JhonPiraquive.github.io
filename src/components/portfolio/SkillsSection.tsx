import { SkillCategoryCard } from "@/components/portfolio/SkillCategoryCard";
import type { PortfolioContent } from "@/lib/portfolio";

type SkillsSectionProps = {
  content: PortfolioContent;
  locale: string;
};

export function SkillsSection({ content, locale }: SkillsSectionProps) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {content.nav.find((n) => n.id === "skills")?.label}
      </h2>
      {content.skillsIntro && (
        <p className="mb-8 max-w-3xl text-[var(--color-neutral-dark)]/80">{content.skillsIntro}</p>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((group) => (
          <SkillCategoryCard
            key={group.group}
            group={group.group}
            items={group.items}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
