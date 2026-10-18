import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ProgramacionSeguraReglasPracticasSection } from "./sections/ProgramacionSeguraReglasPracticasSection";
import { ManejoDeExcepcionesPorSection } from "./sections/ManejoDeExcepcionesPorSection";
import { LogsDeAplicacionPhpSection } from "./sections/LogsDeAplicacionPhpSection";
import { ConfiguracionYAlmacenamientoDeSection } from "./sections/ConfiguracionYAlmacenamientoDeSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function ProgramacionSeguraExcepcionesLogsYConfigJsonPageLesson({ locale: _locale }: Props) {
  return (
    <ClassPageLayout
      title={meta.title}
      classTitle={meta.classTitle!}
      pageNumber={meta.pageNumber}
      totalPages={meta.totalPages}
      track={meta.track}
      prev={meta.prev}
      next={meta.next}
    >
      <ProgramacionSeguraReglasPracticasSection />
      <ManejoDeExcepcionesPorSection />
      <LogsDeAplicacionPhpSection />
      <ConfiguracionYAlmacenamientoDeSection />
      <EjemploRealHistoriaSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
