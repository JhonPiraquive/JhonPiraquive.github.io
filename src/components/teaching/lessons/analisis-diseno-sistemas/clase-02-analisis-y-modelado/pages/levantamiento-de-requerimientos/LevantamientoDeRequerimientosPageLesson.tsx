import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ModeloCascadaSection } from "../../sections/ModeloCascadaSection";
import { ActasPlanificacionSection } from "../../sections/ActasPlanificacionSection";
import { DescubrirRequerimientosSection } from "../../sections/DescubrirRequerimientosSection";
import { TecnicaEntrevistasSection } from "../../sections/TecnicaEntrevistasSection";

type Props = { locale: string };

export default function LevantamientoDeRequerimientosPageLesson({ locale: _locale }: Props) {
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
      <ModeloCascadaSection />
      <ActasPlanificacionSection />
      <DescubrirRequerimientosSection />
      <TecnicaEntrevistasSection />
    </ClassPageLayout>
  );
}
