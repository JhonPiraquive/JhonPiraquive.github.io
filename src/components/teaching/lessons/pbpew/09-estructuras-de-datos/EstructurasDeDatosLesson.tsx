import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { ColaSection } from "./sections/ColaSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { MapSection } from "./sections/MapSection";
import { MapVsObjetoSection } from "./sections/MapVsObjetoSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { PilaSection } from "./sections/PilaSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { SetSection } from "./sections/SetSection";

type Props = { locale: string };

export default function EstructurasDeDatosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <MapSection />
      <SetSection />
      <PilaSection />
      <ColaSection />
      <MapVsObjetoSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
