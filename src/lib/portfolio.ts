import es from "@/content/portfolio/es.json";
import en from "@/content/portfolio/en.json";
import type { Locale } from "@/i18n/routing";

export type PortfolioContent = typeof es;

export function getPortfolio(locale: Locale): PortfolioContent {
  return locale === "en" ? en : es;
}

export function interpolate(text: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)),
    text
  );
}
