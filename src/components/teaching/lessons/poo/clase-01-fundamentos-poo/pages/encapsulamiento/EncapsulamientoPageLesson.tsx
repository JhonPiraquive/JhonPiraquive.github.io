import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { EncapsulamientoQueEsYSection } from "./sections/EncapsulamientoQueEsYSection";
import { InvariantesReglasQueElSection } from "./sections/InvariantesReglasQueElSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function EncapsulamientoPageLesson({ locale: _locale }: Props) {
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
      <ObjetivosSection />
      <EncapsulamientoQueEsYSection />
      <InvariantesReglasQueElSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </ClassPageLayout>
  );
}
