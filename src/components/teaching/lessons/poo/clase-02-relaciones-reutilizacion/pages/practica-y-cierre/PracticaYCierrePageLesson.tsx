import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CompruebaTuComprensionSection as CompruebaHerenciaSection } from "../herencia/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaOverrideSection } from "../override-y-sobrecarga/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaRelacionesSection } from "../asociacion-agregacion-composicion/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaDiagramasSection } from "../diagramas-relaciones/sections/CompruebaTuComprensionSection";
import { PracticaGuiadaSection } from "../../sections/PracticaGuiadaSection";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";
import { CierreSection } from "../../sections/CierreSection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson({ locale: _locale }: Props) {
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
      <CompruebaHerenciaSection />
      <CompruebaOverrideSection />
      <CompruebaRelacionesSection />
      <CompruebaDiagramasSection />
      <PracticaGuiadaSection />
      <RetoIntegradorSection />
      <MiniquizFinalSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
