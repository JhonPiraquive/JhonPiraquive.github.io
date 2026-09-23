import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CompruebaTuComprensionSection as CompruebaFundamentosSection } from "../fundamentos/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaEncapsulamientoSection } from "../encapsulamiento/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaDiagramaSection } from "../diagrama-clase-simple/sections/CompruebaTuComprensionSection";
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
      <CompruebaFundamentosSection />
      <CompruebaEncapsulamientoSection />
      <CompruebaDiagramaSection />
      <PracticaGuiadaSection />
      <RetoIntegradorSection />
      <MiniquizFinalSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
