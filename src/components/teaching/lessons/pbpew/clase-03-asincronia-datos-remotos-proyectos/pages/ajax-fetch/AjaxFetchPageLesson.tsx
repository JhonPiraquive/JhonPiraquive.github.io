import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsAjaxSection } from "./sections/QueEsAjaxSection";
import { XmlhttprequestLegadoSection } from "./sections/XmlhttprequestLegadoSection";
import { DemoEnVivoApiSection } from "./sections/DemoEnVivoApiSection";

type Props = { locale: string };

export default function AjaxFetchPageLesson({ locale: _locale }: Props) {
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
      <QueEsAjaxSection />
      <XmlhttprequestLegadoSection />
      <DemoEnVivoApiSection />
    </ClassPageLayout>
  );
}
