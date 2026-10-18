import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ProyectoCapstoneSection } from "./sections/ProyectoCapstoneSection";
import { DemoTableroSection } from "./sections/DemoTableroSection";
import { ModeloMatriz2DSection } from "./sections/ModeloMatriz2DSection";
import { VistaRenderizadoSection } from "./sections/VistaRenderizadoSection";
import { ControladorEventosSection } from "./sections/ControladorEventosSection";
import { ValidacionMovimientosSection } from "./sections/ValidacionMovimientosSection";
import { DeshacerPersistenciaSection } from "./sections/DeshacerPersistenciaSection";
import { CasosRealesSection } from "./sections/CasosRealesSection";

type Props = { locale: string };

export default function AjedrezPageLesson({ locale: _locale }: Props) {
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
      <ProyectoCapstoneSection />
      <DemoTableroSection />
      <ModeloMatriz2DSection />
      <VistaRenderizadoSection />
      <ControladorEventosSection />
      <ValidacionMovimientosSection />
      <DeshacerPersistenciaSection />
      <CasosRealesSection />
    </ClassPageLayout>
  );
}
