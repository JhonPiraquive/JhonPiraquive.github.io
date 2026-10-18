import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DeclaracionDeFuncionSection } from "./sections/DeclaracionDeFuncionSection";
import { ExpresionDeFuncionYArrowFunctionSection } from "./sections/ExpresionDeFuncionYArrowFunctionSection";
import { CallbacksSection } from "./sections/CallbacksSection";

type Props = { locale: string };

export default function FuncionesYCallbacksPageLesson({ locale: _locale }: Props) {
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
      <DeclaracionDeFuncionSection />
      <ExpresionDeFuncionYArrowFunctionSection />
      <CallbacksSection />
    </ClassPageLayout>
  );
}
