import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosAprendizajeSection } from "./sections/ObjetivosAprendizajeSection";
import { ResultadosAprendizajeSection } from "./sections/ResultadosAprendizajeSection";

type Props = { locale: string };

export default function BasesDeDatosLesson({ locale }: Props) {
  return (
    <LessonLayout title={meta.title} track={meta.track} locale={locale} prev={meta.prev} next={meta.next}>
      <ObjetivosAprendizajeSection />
      <ResultadosAprendizajeSection />
    </LessonLayout>
  );
}
