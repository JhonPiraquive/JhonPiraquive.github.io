import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { XmlSection } from "./sections/XmlSection";
import { JsonSection } from "./sections/JsonSection";
import { ComparativaXmlJsonSection } from "./sections/ComparativaXmlJsonSection";
import { CasosDeUsoSection } from "./sections/CasosDeUsoSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function FormatosDatosPageLesson({ locale: _locale }: Props) {
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
      <XmlSection />
      <JsonSection />
      <ComparativaXmlJsonSection />
      <CasosDeUsoSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
