import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ProyectoIntegradorIntroSection } from "./sections/ProyectoIntegradorIntroSection";
import { DemoInteractivaSection } from "./sections/DemoInteractivaSection";
import { ReglasDelJuegoSection } from "./sections/ReglasDelJuegoSection";
import { ConstantesYEstadoSection } from "./sections/ConstantesYEstadoSection";
import { EleccionAleatoriaCpuSection } from "./sections/EleccionAleatoriaCpuSection";
import { DeterminarGanadorSection } from "./sections/DeterminarGanadorSection";
import { MarcadorYRenderizadoSection } from "./sections/MarcadorYRenderizadoSection";
import { OrquestarRondaSection } from "./sections/OrquestarRondaSection";
import { ValidacionDefensivaSection } from "./sections/ValidacionDefensivaSection";

type Props = { locale: string };

export default function PiedraPapelTijeraPageLesson({ locale: _locale }: Props) {
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
      <ProyectoIntegradorIntroSection />
      <DemoInteractivaSection />
      <ReglasDelJuegoSection />
      <ConstantesYEstadoSection />
      <EleccionAleatoriaCpuSection />
      <DeterminarGanadorSection />
      <MarcadorYRenderizadoSection />
      <OrquestarRondaSection />
      <ValidacionDefensivaSection />
    </ClassPageLayout>
  );
}
