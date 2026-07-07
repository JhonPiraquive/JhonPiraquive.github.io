import Image from "next/image";
import type { PortfolioContent } from "@/lib/portfolio";

type InterestsSectionProps = {
  content: PortfolioContent;
};

export function InterestsSection({ content }: InterestsSectionProps) {
  return (
    <section id="hobbies" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {content.hobbies.title}
        </h2>
        <p className="mb-8 text-justify leading-relaxed">{content.hobbies.text}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.hobbies.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${content.hobbies.title} ${i + 1}`}
              width={500}
              height={300}
              className="clay-card h-56 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
