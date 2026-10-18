import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsBackendSection } from "./sections/QueEsBackendSection";
import { ResponsabilidadesBackendSection } from "./sections/ResponsabilidadesBackendSection";
import { TecnologiasBackendSection } from "./sections/TecnologiasBackendSection";
import { ComoElegirBackendSection } from "./sections/ComoElegirBackendSection";
import { EjemplosBackendSection } from "./sections/EjemplosBackendSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function BackendPageLesson({ locale: _locale }: Props) {
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
      <QueEsBackendSection />
      <ResponsabilidadesBackendSection />
      <TecnologiasBackendSection />
      <ComoElegirBackendSection />
      <EjemplosBackendSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
