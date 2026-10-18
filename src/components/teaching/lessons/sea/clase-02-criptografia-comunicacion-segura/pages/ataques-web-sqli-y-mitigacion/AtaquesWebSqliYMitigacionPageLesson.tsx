import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsSqlInjectionSection } from "./sections/QueEsSqlInjectionSection";
import { SenalesDeRiesgoSection } from "./sections/SenalesDeRiesgoSection";
import { MitigacionLoQueSiSection } from "./sections/MitigacionLoQueSiSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoDemostracionConceptualSection } from "./sections/EjemploTecnicoDemostracionConceptualSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function AtaquesWebSqliYMitigacionPageLesson({ locale: _locale }: Props) {
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
      <QueEsSqlInjectionSection />
      <SenalesDeRiesgoSection />
      <MitigacionLoQueSiSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoDemostracionConceptualSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
