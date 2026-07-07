import { ClayBadge } from "@/components/clay/ClayBadge";
import { TypedRoles } from "@/components/portfolio/TypedRoles";
import type { PortfolioContent } from "@/lib/portfolio";

type HeroSectionProps = {
  content: PortfolioContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[45vh] flex-col items-center justify-center px-6 py-12 text-center text-white"
      style={{
        background: `linear-gradient(135deg, var(--color-primary) 0%, #0d3a5c 50%, var(--color-neutral-dark) 100%)`,
      }}
    >
      <ClayBadge onDark>{content.brand.tagline}</ClayBadge>
      <h1
        className="mt-4 max-w-5xl text-4xl font-bold md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {content.brand.name}
      </h1>
      <p className="mt-4 max-w-5xl text-xl">
        <TypedRoles items={content.brand.typedRoles} />
      </p>
    </section>
  );
}
