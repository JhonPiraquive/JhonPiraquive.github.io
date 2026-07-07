import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { IntroCursoSection } from "./sections/IntroCursoSection";
import { NavegacionClasesSection } from "./sections/NavegacionClasesSection";

type Props = { locale: string };

export default function ConfiguracionSistemasOperativosLesson({ locale }: Props) {
  return (
    <LessonLayout title={meta.title} track={meta.track} locale={locale} prev={meta.prev} next={meta.next}>
      <IntroCursoSection />
      <NavegacionClasesSection />
    </LessonLayout>
  );
}
