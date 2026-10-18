import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroduccionDomMutableSection } from "./sections/IntroduccionDomMutableSection";
import { SeleccionarNodosSection } from "./sections/SeleccionarNodosSection";
import { ModificarDomSection } from "./sections/ModificarDomSection";
import { EventosSection } from "./sections/EventosSection";
import { DemoMiniEnLaSection } from "./sections/DemoMiniEnLaSection";

type Props = { locale: string };

export default function DomYEventosPageLesson({ locale: _locale }: Props) {
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
      <IntroduccionDomMutableSection />
      <SeleccionarNodosSection />
      <ModificarDomSection />
      <EventosSection />
      <DemoMiniEnLaSection />
    </ClassPageLayout>
  );
}
