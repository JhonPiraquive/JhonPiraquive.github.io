import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsCiaAutenticidadSection } from "./sections/QueEsCiaAutenticidadSection";
import { EjemplosRapidosPorPrincipioSection } from "./sections/EjemplosRapidosPorPrincipioSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoReglaDeSection } from "./sections/EjemploTecnicoReglaDeSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function PrincipiosCiaYAutenticidadPageLesson({ locale: _locale }: Props) {
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
      <QueEsCiaAutenticidadSection />
      <EjemplosRapidosPorPrincipioSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoReglaDeSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
