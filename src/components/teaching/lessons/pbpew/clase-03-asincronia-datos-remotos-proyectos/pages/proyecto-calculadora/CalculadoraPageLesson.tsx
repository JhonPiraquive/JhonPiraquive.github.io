import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroProyectoSection } from "./sections/IntroProyectoSection";
import { DemoCalculadoraSection } from "./sections/DemoCalculadoraSection";
import { EstadoMemoriaSection } from "./sections/EstadoMemoriaSection";
import { MaquetaHtmlSection } from "./sections/MaquetaHtmlSection";
import { VariablesEstadoSection } from "./sections/VariablesEstadoSection";
import { FuncionCalcularSection } from "./sections/FuncionCalcularSection";
import { DelegacionEventosSection } from "./sections/DelegacionEventosSection";
import { DigitosOperadoresSection } from "./sections/DigitosOperadoresSection";
import { IgualLimpiarErroresSection } from "./sections/IgualLimpiarErroresSection";
import { CasosRealesSection } from "./sections/CasosRealesSection";

type Props = { locale: string };

export default function CalculadoraPageLesson({ locale: _locale }: Props) {
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
    </ClassPageLayout>
  );
}
