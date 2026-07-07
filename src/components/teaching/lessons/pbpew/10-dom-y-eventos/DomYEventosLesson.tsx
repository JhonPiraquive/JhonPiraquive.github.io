import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { DemoMiniEnLaSection } from "./sections/DemoMiniEnLaSection";
import { EventosSection } from "./sections/EventosSection";
import { IntroduccionDomMutableSection } from "./sections/IntroduccionDomMutableSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ModificarDomSection } from "./sections/ModificarDomSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { SeleccionarNodosSection } from "./sections/SeleccionarNodosSection";

type Props = { locale: string };

export default function DomYEventosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <IntroduccionDomMutableSection />
      <SeleccionarNodosSection />
      <ModificarDomSection />
      <EventosSection />
      <DemoMiniEnLaSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
