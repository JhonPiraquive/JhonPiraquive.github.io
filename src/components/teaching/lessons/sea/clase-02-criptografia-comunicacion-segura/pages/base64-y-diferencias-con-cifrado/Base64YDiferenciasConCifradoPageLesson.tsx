import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsBase64Section } from "./sections/QueEsBase64Section";
import { CuandoSiUsarBase64Section } from "./sections/CuandoSiUsarBase64Section";
import { CuandoNoUsarBase64Section } from "./sections/CuandoNoUsarBase64Section";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoDemostracionConceptualSection } from "./sections/EjemploTecnicoDemostracionConceptualSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function Base64YDiferenciasConCifradoPageLesson({ locale: _locale }: Props) {
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
      <QueEsBase64Section />
      <CuandoSiUsarBase64Section />
      <CuandoNoUsarBase64Section />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoDemostracionConceptualSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
