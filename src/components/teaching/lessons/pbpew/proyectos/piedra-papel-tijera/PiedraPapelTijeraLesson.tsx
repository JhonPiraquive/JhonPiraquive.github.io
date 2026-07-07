import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { ProyectoIntegradorIntroSection } from "./sections/ProyectoIntegradorIntroSection";
import { DemoInteractivaSection } from "./sections/DemoInteractivaSection";
import { ReglasDelJuegoSection } from "./sections/ReglasDelJuegoSection";
import { ConstantesYEstadoSection } from "./sections/ConstantesYEstadoSection";
import { EleccionAleatoriaCpuSection } from "./sections/EleccionAleatoriaCpuSection";
import { DeterminarGanadorSection } from "./sections/DeterminarGanadorSection";
import { MarcadorYRenderizadoSection } from "./sections/MarcadorYRenderizadoSection";
import { OrquestarRondaSection } from "./sections/OrquestarRondaSection";
import { ValidacionDefensivaSection } from "./sections/ValidacionDefensivaSection";
import { ExtensionesOpcionalesSection } from "./sections/ExtensionesOpcionalesSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function PiedraPapelTijeraLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDeAprendizajeSection />
      <PrerrequisitosSection />
      <ProyectoIntegradorIntroSection />
      <DemoInteractivaSection />
      <ReglasDelJuegoSection />
      <ConstantesYEstadoSection />
      <EleccionAleatoriaCpuSection />
      <DeterminarGanadorSection />
      <MarcadorYRenderizadoSection />
      <OrquestarRondaSection />
      <ValidacionDefensivaSection />
      <ExtensionesOpcionalesSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
