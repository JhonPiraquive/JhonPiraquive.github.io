import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { AmbitoScopeSection } from "./sections/AmbitoScopeSection";
import { ClasesYMetodosSection } from "./sections/ClasesYMetodosSection";
import { HerenciaSection } from "./sections/HerenciaSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ThisSection } from "./sections/ThisSection";

type Props = { locale: string };

export default function ThisScopeClasesLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <AmbitoScopeSection />
      <ThisSection />
      <ClasesYMetodosSection />
      <HerenciaSection />
</LessonLayout>
  );
}
