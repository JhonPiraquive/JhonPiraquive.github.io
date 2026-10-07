import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CasoLogisticaSection } from "../../sections/CasoLogisticaSection";
import { ActoresYClasesSection } from "../../sections/ActoresYClasesSection";
import { DiagramaClasesSection } from "../../sections/DiagramaClasesSection";

type Props = { locale: string };

export default function CasoLogisticaPageLesson({ locale: _locale }: Props) {
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
      <CasoLogisticaSection />
      <ActoresYClasesSection />
      <DiagramaClasesSection />
    </ClassPageLayout>
  );
}
