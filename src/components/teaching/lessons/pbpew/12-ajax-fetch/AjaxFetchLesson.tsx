import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { DemoEnVivoApiSection } from "./sections/DemoEnVivoApiSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { QueEsAjaxSection } from "./sections/QueEsAjaxSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { XmlhttprequestLegadoSection } from "./sections/XmlhttprequestLegadoSection";

type Props = { locale: string };

export default function AjaxFetchLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <QueEsAjaxSection />
      <XmlhttprequestLegadoSection />
      <DemoEnVivoApiSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
