import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { QueEsBase64Section } from "./sections/QueEsBase64Section";
import { CuandoSiUsarBase64Section } from "./sections/CuandoSiUsarBase64Section";
import { CuandoNoUsarBase64Section } from "./sections/CuandoNoUsarBase64Section";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoDemostracionConceptualSection } from "./sections/EjemploTecnicoDemostracionConceptualSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function Base64YDiferenciasConCifradoLesson({ locale }: Props) {
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
      <QueEsBase64Section />
      <CuandoSiUsarBase64Section />
      <CuandoNoUsarBase64Section />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoDemostracionConceptualSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
