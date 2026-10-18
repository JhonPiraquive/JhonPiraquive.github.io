import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsUnaIsoSection } from "./sections/QueEsUnaIsoSection";
import { IsoiecVsIsoiecSection } from "./sections/IsoiecVsIsoiecSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueEvidenciasSection } from "./sections/EjemploTecnicoQueEvidenciasSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function IsoYNormasPageLesson({ locale: _locale }: Props) {
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
      <QueEsUnaIsoSection />
      <IsoiecVsIsoiecSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueEvidenciasSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
