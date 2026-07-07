import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { ProgramacionSeguraReglasPracticasSection } from "./sections/ProgramacionSeguraReglasPracticasSection";
import { ManejoDeExcepcionesPorSection } from "./sections/ManejoDeExcepcionesPorSection";
import { LogsDeAplicacionPhpSection } from "./sections/LogsDeAplicacionPhpSection";
import { ConfiguracionYAlmacenamientoDeSection } from "./sections/ConfiguracionYAlmacenamientoDeSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function ProgramacionSeguraExcepcionesLogsYConfigJsonLesson({ locale }: Props) {
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
      <ProgramacionSeguraReglasPracticasSection />
      <ManejoDeExcepcionesPorSection />
      <LogsDeAplicacionPhpSection />
      <ConfiguracionYAlmacenamientoDeSection />
      <EjemploRealHistoriaSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
