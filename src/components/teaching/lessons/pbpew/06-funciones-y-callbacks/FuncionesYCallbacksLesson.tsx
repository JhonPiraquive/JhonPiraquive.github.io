import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CallbacksSection } from "./sections/CallbacksSection";
import { DeclaracionDeFuncionSection } from "./sections/DeclaracionDeFuncionSection";
import { ExpresionDeFuncionYArrowFunctionSection } from "./sections/ExpresionDeFuncionYArrowFunctionSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
type Props = { locale: string };

export default function FuncionesYCallbacksLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <DeclaracionDeFuncionSection />
      <ExpresionDeFuncionYArrowFunctionSection />
      <CallbacksSection />
</LessonLayout>
  );
}
