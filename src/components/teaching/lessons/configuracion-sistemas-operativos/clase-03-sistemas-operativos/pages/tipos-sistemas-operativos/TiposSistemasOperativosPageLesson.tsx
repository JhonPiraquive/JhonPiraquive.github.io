import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsSoSection } from "../../sections/QueEsSoSection";
import { ClasificacionSoSection } from "../../sections/ClasificacionSoSection";
import { ComparativaSoSection } from "../../sections/ComparativaSoSection";

type Props = { locale: string };

export default function TiposSistemasOperativosPageLesson({ locale }: Props) {
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
      <QueEsSoSection />
      <ClasificacionSoSection />
      <ComparativaSoSection />
    </ClassPageLayout>
  );
}
