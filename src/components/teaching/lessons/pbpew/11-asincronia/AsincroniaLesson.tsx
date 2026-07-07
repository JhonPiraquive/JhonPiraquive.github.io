import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { AsyncAwaitSection } from "./sections/AsyncAwaitSection";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { QueCambiaConLoSection } from "./sections/QueCambiaConLoSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { SettimeoutYSetintervalSection } from "./sections/SettimeoutYSetintervalSection";
import { TemplateLiteralsSection } from "./sections/TemplateLiteralsSection";
import { ThenCatchFinallySection } from "./sections/ThenCatchFinallySection";

type Props = { locale: string };

export default function AsincroniaLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <QueCambiaConLoSection />
      <SettimeoutYSetintervalSection />
      <ThenCatchFinallySection />
      <AsyncAwaitSection />
      <TemplateLiteralsSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
