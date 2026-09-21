import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CatalogoRestriccionesSection } from "../../sections/CatalogoRestriccionesSection";
import { PrimaryKeySection } from "../../sections/PrimaryKeySection";
import { UniqueConstraintSection } from "../../sections/UniqueConstraintSection";
import { NotNullNullSection } from "../../sections/NotNullNullSection";

type Props = { locale: string };

export default function DdlRestriccionesPageLesson({ locale }: Props) {
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
      <CatalogoRestriccionesSection />
      <PrimaryKeySection />
      <UniqueConstraintSection />
      <NotNullNullSection />
    </ClassPageLayout>
  );
}
