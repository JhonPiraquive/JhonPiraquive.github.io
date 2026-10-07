import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ClasificacionSistemasSection } from "../../sections/ClasificacionSistemasSection";
import { TiposPorUsoSection } from "../../sections/TiposPorUsoSection";

type Props = { locale: string };

export default function TiposYUsoPageLesson({ locale: _locale }: Props) {
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
      <ClasificacionSistemasSection />
      <TiposPorUsoSection />
    </ClassPageLayout>
  );
}
