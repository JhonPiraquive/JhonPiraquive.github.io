import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { EstadoUseStateSection } from "../../sections/EstadoUseStateSection";
import { EventosYFormulariosSection } from "../../sections/EventosYFormulariosSection";
import { ActualizarSinMutarSection } from "../../sections/ActualizarSinMutarSection";

type Props = { locale: string };

export default function EstadoYEventosPageLesson({ locale: _locale }: Props) {
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
      <EstadoUseStateSection />
      <EventosYFormulariosSection />
      <ActualizarSinMutarSection />
    </ClassPageLayout>
  );
}
