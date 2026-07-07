import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { QueEsSqlInjectionSection } from "./sections/QueEsSqlInjectionSection";
import { SenalesDeRiesgoSection } from "./sections/SenalesDeRiesgoSection";
import { MitigacionLoQueSiSection } from "./sections/MitigacionLoQueSiSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoDemostracionConceptualSection } from "./sections/EjemploTecnicoDemostracionConceptualSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function AtaquesWebSqliYMitigacionLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDeAprendizajeSection />
      <PrerrequisitosSection />
      <QueEsSqlInjectionSection />
      <SenalesDeRiesgoSection />
      <MitigacionLoQueSiSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoDemostracionConceptualSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
