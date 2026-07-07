import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { MapaMentalVistaRapidaSection } from "./sections/MapaMentalVistaRapidaSection";
import { QueEsUnHackerSection } from "./sections/QueEsUnHackerSection";
import { TiposDeHackerPorSection } from "./sections/TiposDeHackerPorSection";
import { CanalesQueUsaUnSection } from "./sections/CanalesQueUsaUnSection";
import { ComoProtegermePersonaSection } from "./sections/ComoProtegermePersonaSection";
import { ComoProtegermeEquipoAplicacionSection } from "./sections/ComoProtegermeEquipoAplicacionSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueVeriasSection } from "./sections/EjemploTecnicoQueVeriasSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function HackersCanalesYProteccionLesson({ locale }: Props) {
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
      <QueEsUnHackerSection />
      <TiposDeHackerPorSection />
      <CanalesQueUsaUnSection />
      <ComoProtegermePersonaSection />
      <ComoProtegermeEquipoAplicacionSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueVeriasSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
