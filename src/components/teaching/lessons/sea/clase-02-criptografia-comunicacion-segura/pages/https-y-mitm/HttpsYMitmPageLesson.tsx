import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsHttpsSection } from "./sections/QueEsHttpsSection";
import { MitmManinthemiddleExplicadoSection } from "./sections/MitmManinthemiddleExplicadoSection";
import { QueNoSolucionaHttpsSection } from "./sections/QueNoSolucionaHttpsSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueRevisariasSection } from "./sections/EjemploTecnicoQueRevisariasSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function HttpsYMitmPageLesson({ locale: _locale }: Props) {
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
      <QueEsHttpsSection />
      <MitmManinthemiddleExplicadoSection />
      <QueNoSolucionaHttpsSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueRevisariasSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
