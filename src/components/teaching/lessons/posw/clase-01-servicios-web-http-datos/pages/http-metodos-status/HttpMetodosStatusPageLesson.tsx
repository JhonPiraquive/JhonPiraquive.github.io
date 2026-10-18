import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MetodosHttpSection } from "./sections/MetodosHttpSection";
import { CrudHttpSection } from "./sections/CrudHttpSection";
import { CodigosEstadoSection } from "./sections/CodigosEstadoSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function HttpMetodosStatusPageLesson({ locale: _locale }: Props) {
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
      <MetodosHttpSection />
      <CrudHttpSection />
      <CodigosEstadoSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
