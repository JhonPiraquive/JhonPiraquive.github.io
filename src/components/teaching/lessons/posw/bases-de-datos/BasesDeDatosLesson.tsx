import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { SqlFamiliasSection } from "./sections/SqlFamiliasSection";
import { DdlSection } from "./sections/DdlSection";
import { DmlSection } from "./sections/DmlSection";
import { DclTclAcidSection } from "./sections/DclTclAcidSection";
import { SqlVsNosqlSection } from "./sections/SqlVsNosqlSection";
import { ClavesSection } from "./sections/ClavesSection";
import { ColumnarGrafosSection } from "./sections/ColumnarGrafosSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function BasesDeDatosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <SqlFamiliasSection />
      <DdlSection />
      <DmlSection />
      <DclTclAcidSection />
      <SqlVsNosqlSection />
      <ClavesSection />
      <ColumnarGrafosSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
