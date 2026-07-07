import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { QueEsHttpsSection } from "./sections/QueEsHttpsSection";
import { MitmManinthemiddleExplicadoSection } from "./sections/MitmManinthemiddleExplicadoSection";
import { QueNoSolucionaHttpsSection } from "./sections/QueNoSolucionaHttpsSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueRevisariasSection } from "./sections/EjemploTecnicoQueRevisariasSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function HttpsYMitmLesson({ locale }: Props) {
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
      <QueEsHttpsSection />
      <MitmManinthemiddleExplicadoSection />
      <QueNoSolucionaHttpsSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueRevisariasSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
