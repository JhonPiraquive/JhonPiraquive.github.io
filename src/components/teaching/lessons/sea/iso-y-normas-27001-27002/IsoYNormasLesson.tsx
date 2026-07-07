import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { QueEsUnaIsoSection } from "./sections/QueEsUnaIsoSection";
import { IsoiecVsIsoiecSection } from "./sections/IsoiecVsIsoiecSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueEvidenciasSection } from "./sections/EjemploTecnicoQueEvidenciasSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function IsoYNormasLesson({ locale }: Props) {
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
      <QueEsUnaIsoSection />
      <IsoiecVsIsoiecSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueEvidenciasSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
