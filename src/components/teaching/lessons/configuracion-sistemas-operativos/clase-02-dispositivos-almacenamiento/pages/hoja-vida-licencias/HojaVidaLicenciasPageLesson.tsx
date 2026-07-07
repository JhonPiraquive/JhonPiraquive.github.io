import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HojaVidaPcSection } from "../../sections/HojaVidaPcSection";
import { LicenciasSoftwareSection } from "../../sections/LicenciasSoftwareSection";

type Props = { locale: string };

export default function HojaVidaLicenciasPageLesson(_props: Props) {
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
      <HojaVidaPcSection />
      <LicenciasSoftwareSection />
    </ClassPageLayout>
  );
}
