import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CasosRealesSection } from "./sections/CasosRealesSection";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { DelegacionEventosSection } from "./sections/DelegacionEventosSection";
import { DemoCalculadoraSection } from "./sections/DemoCalculadoraSection";
import { DigitosOperadoresSection } from "./sections/DigitosOperadoresSection";
import { EstadoMemoriaSection } from "./sections/EstadoMemoriaSection";
import { FuncionCalcularSection } from "./sections/FuncionCalcularSection";
import { IgualLimpiarErroresSection } from "./sections/IgualLimpiarErroresSection";
import { IntroProyectoSection } from "./sections/IntroProyectoSection";
import { MaquetaHtmlSection } from "./sections/MaquetaHtmlSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { PracticaProfundaSection } from "./sections/PracticaProfundaSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { VariablesEstadoSection } from "./sections/VariablesEstadoSection";

type Props = { locale: string };

export default function CalculadoraLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <PrerrequisitosSection />
      <IntroProyectoSection />
      <DemoCalculadoraSection />
      <EstadoMemoriaSection />
      <MaquetaHtmlSection />
      <VariablesEstadoSection />
      <FuncionCalcularSection />
      <DelegacionEventosSection />
      <DigitosOperadoresSection />
      <IgualLimpiarErroresSection />
      <CasosRealesSection />
      <PracticaProfundaSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
    </LessonLayout>
  );
}
