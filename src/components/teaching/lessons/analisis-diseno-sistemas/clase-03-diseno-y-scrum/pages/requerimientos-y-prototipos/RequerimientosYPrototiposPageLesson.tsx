import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RequerimientosFuncionalesSection } from "../../sections/RequerimientosFuncionalesSection";
import { PrototiposYHibridasSection } from "../../sections/PrototiposYHibridasSection";

type Props = { locale: string };

export default function RequerimientosYPrototiposPageLesson({ locale: _locale }: Props) {
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
      <RequerimientosFuncionalesSection />
      <PrototiposYHibridasSection />
    </ClassPageLayout>
  );
}
