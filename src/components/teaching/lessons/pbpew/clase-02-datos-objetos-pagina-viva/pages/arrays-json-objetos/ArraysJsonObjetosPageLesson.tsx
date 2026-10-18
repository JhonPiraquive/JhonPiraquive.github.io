import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ArraysSection } from "./sections/ArraysSection";
import { ArrayCallbacksSection } from "./sections/ArrayCallbacksSection";
import { JsonSection } from "./sections/JsonSection";
import { ObjetosLiteralesSection } from "./sections/ObjetosLiteralesSection";

type Props = { locale: string };

export default function ArraysJsonObjetosPageLesson({ locale: _locale }: Props) {
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
      <ArraysSection />
      <ArrayCallbacksSection />
      <JsonSection />
      <ObjetosLiteralesSection />
    </ClassPageLayout>
  );
}
