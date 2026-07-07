import { LessonLayout } from "@/components/teaching/LessonLayout";
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

export default function OverrideYSobrecargaLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <OverrideSection />
      <OverloadSection />
      <OverrideVsOverloadSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
