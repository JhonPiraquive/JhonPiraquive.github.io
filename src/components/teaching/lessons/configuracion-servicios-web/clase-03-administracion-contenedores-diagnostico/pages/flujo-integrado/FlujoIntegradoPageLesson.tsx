import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ResolucionLocalSection } from "../../sections/ResolucionLocalSection";
import { FlujoIntegradoSection } from "../../sections/FlujoIntegradoSection";
import { ChecklistPruebasSection } from "../../sections/ChecklistPruebasSection";
import { ValidacionServicioFtpSection } from "../../sections/ValidacionServicioFtpSection";

type Props = { locale: string };

export default function FlujoIntegradoPageLesson({ locale }: Props) {
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
      <ResolucionLocalSection />
      <FlujoIntegradoSection />
      <ChecklistPruebasSection />
      <ValidacionServicioFtpSection />
    </ClassPageLayout>
  );
}
