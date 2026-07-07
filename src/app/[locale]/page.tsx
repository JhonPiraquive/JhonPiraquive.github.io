import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  HeroSection,
  ArchetypeSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  CertificationsGrid,
  InterestsSection,
  PostsSection,
} from "@/components/portfolio";
import { getPortfolio } from "@/lib/portfolio";
import { getAge, getExperienceYears } from "@/lib/profile-stats";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getPortfolio(locale as Locale);
  return {
    title: content.meta.title,
    description: content.meta.description.replace("{expYears}", String(getExperienceYears())),
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getPortfolio(locale as Locale);
  const age = getAge();
  const expYears = getExperienceYears();

  return (
    <>
      <HeroSection content={content} />
      <ArchetypeSection content={content} />
      <AboutSection content={content} age={age} expYears={expYears} />
      <CertificationsGrid content={content} />
      <SkillsSection content={content} locale={locale} />
      <ExperienceSection content={content} expYears={expYears} />
      <EducationSection content={content} />
      <PostsSection content={content} />
      <InterestsSection content={content} />
    </>
  );
}
