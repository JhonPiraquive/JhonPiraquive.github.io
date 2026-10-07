import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ArrayCallbacksSection } from "./sections/ArrayCallbacksSection";
import { ArraysSection } from "./sections/ArraysSection";
import { JsonSection } from "./sections/JsonSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ObjetosLiteralesSection } from "./sections/ObjetosLiteralesSection";
type Props = { locale: string };

export default function ArraysJsonObjetosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <ArraysSection />
      <ArrayCallbacksSection />
      <JsonSection />
      <ObjetosLiteralesSection />
</LessonLayout>
  );
}
