import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ArrayCallbacksSection } from "./sections/ArrayCallbacksSection";
import { ArraysSection } from "./sections/ArraysSection";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { JsonSection } from "./sections/JsonSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ObjetosLiteralesSection } from "./sections/ObjetosLiteralesSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";

type Props = { locale: string };

export default function ArraysJsonObjetosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <ArraysSection />
      <ArrayCallbacksSection />
      <JsonSection />
      <ObjetosLiteralesSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
