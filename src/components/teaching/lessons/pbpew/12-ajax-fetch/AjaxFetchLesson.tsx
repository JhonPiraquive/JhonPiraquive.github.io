import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { DemoEnVivoApiSection } from "./sections/DemoEnVivoApiSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { QueEsAjaxSection } from "./sections/QueEsAjaxSection";
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
</LessonLayout>
  );
}
