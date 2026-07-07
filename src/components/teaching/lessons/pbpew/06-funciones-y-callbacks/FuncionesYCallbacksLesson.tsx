import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CallbacksSection } from "./sections/CallbacksSection";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { DeclaracionDeFuncionSection } from "./sections/DeclaracionDeFuncionSection";
import { ExpresionDeFuncionYArrowFunctionSection } from "./sections/ExpresionDeFuncionYArrowFunctionSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";

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
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
