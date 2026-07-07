import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { MapaMentalVistaRapidaSection } from "./sections/MapaMentalVistaRapidaSection";
import { QueEsYPorSection } from "./sections/QueEsYPorSection";
import { EvolucionEnEtapasSection } from "./sections/EvolucionEnEtapasSection";
import { SenalesDeUnaAplicacionSection } from "./sections/SenalesDeUnaAplicacionSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueObservariasSection } from "./sections/EjemploTecnicoQueObservariasSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function HistoriaRedesYSeguridadLesson({ locale }: Props) {
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
      <MapaMentalVistaRapidaSection />
      <QueEsYPorSection />
      <EvolucionEnEtapasSection />
      <SenalesDeUnaAplicacionSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueObservariasSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
