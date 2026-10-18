import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ConceptosBaseConEjemploSection } from "./sections/ConceptosBaseConEjemploSection";
import { ComoUsarLaMatrizSection } from "./sections/ComoUsarLaMatrizSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoMatrizSimpleSection } from "./sections/EjemploTecnicoMatrizSimpleSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function MatrizDeRiesgosPageLesson({ locale: _locale }: Props) {
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
      <ConceptosBaseConEjemploSection />
      <ComoUsarLaMatrizSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoMatrizSimpleSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
