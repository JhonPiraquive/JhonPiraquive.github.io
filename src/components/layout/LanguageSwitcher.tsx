"use client";

import { Link, usePathname } from "@/i18n/navigation";

type LanguageSwitcherProps = {
  locale: string;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="clay-lang-switch mt-3 flex gap-1 rounded-xl p-1">
      {(["es", "en"] as const).map((loc) => {
        const isActive = locale === loc;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            aria-current={isActive ? "true" : undefined}
            className={`clay-lang-switch__link ${
              isActive ? "clay-lang-switch__link--active" : "clay-lang-switch__link--inactive"
            }`}
          >
            {loc}
          </Link>
        );
      })}
    </div>
  );
}
