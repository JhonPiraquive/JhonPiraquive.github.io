import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { PorQueImportaSection } from "./sections/PorQueImportaSection";
import { CamelCaseSection } from "./sections/CamelCaseSection";
import { PascalCaseSection } from "./sections/PascalCaseSection";
import { SnakeCaseSection } from "./sections/SnakeCaseSection";
import { KebabCaseSection } from "./sections/KebabCaseSection";
import { UpperSnakeCaseSection } from "./sections/UpperSnakeCaseSection";
import { ResumenContextoSection } from "./sections/ResumenContextoSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function NamingConventionsLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <PorQueImportaSection />
      <CamelCaseSection />
      <PascalCaseSection />
      <SnakeCaseSection />
      <KebabCaseSection />
      <UpperSnakeCaseSection />
      <ResumenContextoSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
