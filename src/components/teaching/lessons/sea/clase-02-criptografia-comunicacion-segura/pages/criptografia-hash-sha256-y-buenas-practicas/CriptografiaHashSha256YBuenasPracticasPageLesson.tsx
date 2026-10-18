import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { TerminosClaveSinMatematicasSection } from "./sections/TerminosClaveSinMatematicasSection";
import { CifradoVsCodificacionVsSection } from "./sections/CifradoVsCodificacionVsSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueDebeSection } from "./sections/EjemploTecnicoQueDebeSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function CriptografiaHashSha256YBuenasPracticasPageLesson({ locale: _locale }: Props) {
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
      <TerminosClaveSinMatematicasSection />
      <CifradoVsCodificacionVsSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueDebeSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
