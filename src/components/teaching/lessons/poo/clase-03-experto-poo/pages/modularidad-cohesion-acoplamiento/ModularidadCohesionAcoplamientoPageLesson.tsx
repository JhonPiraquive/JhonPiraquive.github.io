import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ModularidadSection } from "./sections/ModularidadSection";
import { CohesionSection } from "./sections/CohesionSection";
import { AcoplamientoSection } from "./sections/AcoplamientoSection";
import { ChecklistDisenoSection } from "./sections/ChecklistDisenoSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function ModularidadCohesionAcoplamientoPageLesson({ locale: _locale }: Props) {
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
      <ModularidadSection />
      <CohesionSection />
      <AcoplamientoSection />
      <ChecklistDisenoSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
