import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { OverloadSection } from "./sections/OverloadSection";
import { OverrideSection } from "./sections/OverrideSection";
import { OverrideVsOverloadSection } from "./sections/OverrideVsOverloadSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";

type Props = { locale: string };

export default function OverrideYSobrecargaPageLesson({ locale: _locale }: Props) {
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
      <CierreSection />
      <CompruebaTuComprensionSection />
      <MiniquizFinalSection />
      <ObjetivosDelTemaSection />
      <OverloadSection />
      <OverrideSection />
      <OverrideVsOverloadSection />
      <ResumenSection />
      <RetoIntegradorSection />
    </ClassPageLayout>
  );
}
