import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsUnHackerSection } from "./sections/QueEsUnHackerSection";
import { TiposDeHackerPorSection } from "./sections/TiposDeHackerPorSection";
import { CanalesQueUsaUnSection } from "./sections/CanalesQueUsaUnSection";
import { ComoProtegermePersonaSection } from "./sections/ComoProtegermePersonaSection";
import { ComoProtegermeEquipoAplicacionSection } from "./sections/ComoProtegermeEquipoAplicacionSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueVeriasSection } from "./sections/EjemploTecnicoQueVeriasSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function HackersCanalesYProteccionPageLesson({ locale: _locale }: Props) {
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
      <QueEsUnHackerSection />
      <TiposDeHackerPorSection />
      <CanalesQueUsaUnSection />
      <ComoProtegermePersonaSection />
      <ComoProtegermeEquipoAplicacionSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueVeriasSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
