"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { ClayButton } from "@/components/clay/ClayButton";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SocialLinks } from "@/components/layout/SocialLinks";
import type { PortfolioContent } from "@/lib/portfolio";

type BrandSidebarProps = {
  content: PortfolioContent;
  locale: string;
};

export function BrandSidebar({ content, locale }: BrandSidebarProps) {
  const pathname = usePathname();
  const teachingLabel = content.nav.find((n) => n.id === "teaching")?.label ?? "Teaching";

  return (
    <aside className="brand-sidebar fixed left-0 top-0 z-40 flex h-full w-64 flex-col overflow-y-auto p-4 text-white">
      <div className="clay-sidebar-panel flex flex-1 flex-col rounded-2xl p-4">
        <div className="mb-4 text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/img/logo.png"
              alt={content.brand.name}
              width={56}
              height={56}
              className="mx-auto"
              priority
            />
          </Link>
        </div>

        <SocialLinks content={content} />

        <nav className="mt-6 flex flex-1 flex-col gap-1">
          {content.nav.filter((item) => item.id !== "teaching").map((item) => {
            const href = item.href ? item.href : `#${item.id}`;
            const isHash = href.startsWith("#");
            if (isHash && pathname !== "/") return null;
            return isHash ? (
              <a key={item.id} href={href} className="clay-nav-link text-white/90">
                {item.label}
              </a>
            ) : (
              <Link key={item.id} href={href} className="clay-nav-link text-white/90">
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
          <ClayButton href={`/${locale}/teaching/`} className="w-full justify-center text-sm">
            {teachingLabel} →
          </ClayButton>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </aside>
  );
}
