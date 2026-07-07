import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BrandSidebar } from "@/components/layout/BrandSidebar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { getPortfolio } from "@/lib/portfolio";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const portfolio = getPortfolio(locale as Locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <BrandSidebar content={portfolio} locale={locale} />
      <main className="ml-0 min-h-screen lg:ml-64">{children}</main>
      <ScrollToTopButton />
    </NextIntlClientProvider>
  );
}
