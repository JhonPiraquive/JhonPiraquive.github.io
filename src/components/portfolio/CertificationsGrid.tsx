import { CertificationCard } from "@/components/portfolio/CertificationCard";
import type { PortfolioContent } from "@/lib/portfolio";

type CertificationsGridProps = {
  content: PortfolioContent;
};

export function CertificationsGrid({ content }: CertificationsGridProps) {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {content.nav.find((n) => n.id === "certifications")?.label}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  );
}
