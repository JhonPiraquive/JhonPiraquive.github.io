import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PanoramaPorAreasSection } from "../../sections/PanoramaPorAreasSection";
import { InteligenciaArtificialHoySection } from "../../sections/InteligenciaArtificialHoySection";
import { TecnologiasWebSection } from "../../sections/TecnologiasWebSection";
import { SoftwareEnTodasSection } from "../../sections/SoftwareEnTodasSection";

type Props = { locale: string };

export default function PanoramaActualPageLesson({ locale: _locale }: Props) {
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
      <PanoramaPorAreasSection />
      <InteligenciaArtificialHoySection />
      <TecnologiasWebSection />
      <SoftwareEnTodasSection />
    </ClassPageLayout>
  );
}
