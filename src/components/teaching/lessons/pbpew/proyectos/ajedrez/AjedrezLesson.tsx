import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CasosRealesSection } from "./sections/CasosRealesSection";
import { CierreSection } from "./sections/CierreSection";
import { ControladorEventosSection } from "./sections/ControladorEventosSection";
import { DemoTableroSection } from "./sections/DemoTableroSection";
import { DeshacerPersistenciaSection } from "./sections/DeshacerPersistenciaSection";
import { ModeloMatriz2DSection } from "./sections/ModeloMatriz2DSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ProyectoCapstoneSection } from "./sections/ProyectoCapstoneSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { RetosAvanzadosSection } from "./sections/RetosAvanzadosSection";
import { ValidacionMovimientosSection } from "./sections/ValidacionMovimientosSection";
import { VistaRenderizadoSection } from "./sections/VistaRenderizadoSection";

type Props = { locale: string };

export default function AjedrezLesson({ locale }: Props) {
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
      <ProyectoCapstoneSection />
      <DemoTableroSection />
      <ModeloMatriz2DSection />
      <VistaRenderizadoSection />
      <ControladorEventosSection />
      <ValidacionMovimientosSection />
      <DeshacerPersistenciaSection />
      <CasosRealesSection />
      <RetosAvanzadosSection />
      <RetoIntegradorSection />
      <CierreSection />
    </LessonLayout>
  );
}
