import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { EstructuraTablasCamposSection } from "../../sections/EstructuraTablasCamposSection";
import { ErroresComunesSection } from "../../sections/ErroresComunesSection";
import { CasosRealesSection } from "../../sections/CasosRealesSection";

type Props = { locale: string };

export default function EstructuraTablasCamposPageLesson({ locale }: Props) {
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
      <EstructuraTablasCamposSection />
      <ErroresComunesSection />
      <CasosRealesSection />
    </ClassPageLayout>
  );
}
