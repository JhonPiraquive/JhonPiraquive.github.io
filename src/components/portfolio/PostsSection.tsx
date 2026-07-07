import Image from "next/image";
import { ClayCard } from "@/components/clay/ClayCard";
import type { PortfolioContent } from "@/lib/portfolio";

type PostsSectionProps = {
  content: PortfolioContent;
};

export function PostsSection({ content }: PostsSectionProps) {
  return (
    <section id="posts" className="bg-[var(--color-neutral-light)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {content.nav.find((n) => n.id === "posts")?.label}
        </h2>
        <p className="mb-8 text-[var(--color-neutral-dark)]/80">{content.posts.intro}</p>
        <ul className="space-y-6">
          {content.posts.items.map((post) => (
            <ClayCard key={post.url}>
              <p>
                <strong>{post.author}:</strong> {post.description}{" "}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-secondary)] underline hover:text-[var(--color-accent)]"
                >
                  {post.linkLabel} →
                </a>
              </p>
            </ClayCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
