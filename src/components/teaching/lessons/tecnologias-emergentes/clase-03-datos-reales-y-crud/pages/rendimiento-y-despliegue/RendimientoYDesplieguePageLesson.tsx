import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RendimientoSection } from "../../sections/RendimientoSection";
import { CalidadDeCodigoSection } from "../../sections/CalidadDeCodigoSection";
import { ConfiguracionYDespliegueSection } from "../../sections/ConfiguracionYDespliegueSection";

type Props = { locale: string };

export default function RendimientoYDesplieguePageLesson({ locale: _locale }: Props) {
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
      <RendimientoSection />
      <CalidadDeCodigoSection />
      <ConfiguracionYDespliegueSection />
    </ClassPageLayout>
  );
}
