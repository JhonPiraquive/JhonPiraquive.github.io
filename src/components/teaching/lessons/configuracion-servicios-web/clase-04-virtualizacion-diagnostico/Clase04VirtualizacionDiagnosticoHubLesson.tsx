import { LessonLayout } from "@/components/teaching/LessonLayout";
import { ClassPagesNavSection } from "@/components/teaching/ClassPagesNavSection";
import { CLASE_04 } from "../class-navigation";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";

type Props = { locale: string };

export default function Clase04VirtualizacionDiagnosticoHubLesson({ locale }: Props) {
  return (
    <LessonLayout title={meta.title} track={meta.track} locale={locale} prev={meta.prev} next={meta.next}>
      <ObjetivosSection />
      <ClassPagesNavSection track={meta.track} classSlug={CLASE_04.classSlug} pages={CLASE_04.pages} />
    </LessonLayout>
  );
}
