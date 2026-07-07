import { ClayCard } from "@/components/clay/ClayCard";
import type { PortfolioContent } from "@/lib/portfolio";

type ArchetypeSectionProps = {
  content: PortfolioContent;
};

export function ArchetypeSection({ content }: ArchetypeSectionProps) {
  return (
    <section id="archetype" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {content.nav.find((n) => n.id === "archetype")?.label ?? "Enfoque"}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {content.archetype.map((a) => (
          <ClayCard key={a.name}>
            <h3 className="text-xl font-semibold">{a.name}</h3>
            <p className="mt-2 text-[var(--color-neutral-dark)]/80">{a.desc}</p>
          </ClayCard>
        ))}
      </div>
    </section>
  );
}
