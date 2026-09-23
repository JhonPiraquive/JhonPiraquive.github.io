import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HerenciaInterfacesDiagramaSection } from "./sections/HerenciaInterfacesDiagramaSection";
import { RelacionesDiagramaSection } from "./sections/RelacionesDiagramaSection";
import { CasoIntegradoTiendaSection } from "./sections/CasoIntegradoTiendaSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function DiagramasRelacionesPageLesson({ locale: _locale }: Props) {
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
      <HerenciaInterfacesDiagramaSection />
      <RelacionesDiagramaSection />
      <CasoIntegradoTiendaSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
