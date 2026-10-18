import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsYPorSection } from "./sections/QueEsYPorSection";
import { EvolucionEnEtapasSection } from "./sections/EvolucionEnEtapasSection";
import { SenalesDeUnaAplicacionSection } from "./sections/SenalesDeUnaAplicacionSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueObservariasSection } from "./sections/EjemploTecnicoQueObservariasSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function HistoriaRedesYSeguridadPageLesson({ locale: _locale }: Props) {
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
      <QueEsYPorSection />
      <EvolucionEnEtapasSection />
      <SenalesDeUnaAplicacionSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueObservariasSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
