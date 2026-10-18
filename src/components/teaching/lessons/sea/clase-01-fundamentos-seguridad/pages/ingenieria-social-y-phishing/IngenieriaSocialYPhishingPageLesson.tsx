import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsPhishingSection } from "./sections/QueEsPhishingSection";
import { SenalesChecklistRapidoSection } from "./sections/SenalesChecklistRapidoSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoMensajeriaDentroSection } from "./sections/EjemploTecnicoMensajeriaDentroSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function IngenieriaSocialYPhishingPageLesson({ locale: _locale }: Props) {
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
      <QueEsPhishingSection />
      <SenalesChecklistRapidoSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoMensajeriaDentroSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
