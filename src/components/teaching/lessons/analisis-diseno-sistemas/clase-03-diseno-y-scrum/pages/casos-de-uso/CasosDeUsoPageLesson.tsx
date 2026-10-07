import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsUnCasoDeUsoSection } from "../../sections/QueEsUnCasoDeUsoSection";
import { NotacionYRelacionesSection } from "../../sections/NotacionYRelacionesSection";
import { EspecificacionCasoDeUsoSection } from "../../sections/EspecificacionCasoDeUsoSection";

type Props = { locale: string };

export default function CasosDeUsoPageLesson({ locale: _locale }: Props) {
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
      <QueEsUnCasoDeUsoSection />
      <NotacionYRelacionesSection />
      <EspecificacionCasoDeUsoSection />
    </ClassPageLayout>
  );
}
