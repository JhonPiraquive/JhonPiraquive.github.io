import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";

type Props = { locale: string };

export default function Clase03DisenoYScrumHubLesson({ locale }: Props) {
  return (
    <LessonLayout title={meta.title} track={meta.track} locale={locale} prev={meta.prev} next={meta.next}>
      <ObjetivosSection />
    </LessonLayout>
  );
}
