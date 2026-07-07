import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { ModularidadSection } from "./sections/ModularidadSection";
import { CohesionSection } from "./sections/CohesionSection";
import { AcoplamientoSection } from "./sections/AcoplamientoSection";
import { ChecklistDisenoSection } from "./sections/ChecklistDisenoSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function ModularidadCohesionAcoplamientoLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <ModularidadSection />
      <CohesionSection />
      <AcoplamientoSection />
      <ChecklistDisenoSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
