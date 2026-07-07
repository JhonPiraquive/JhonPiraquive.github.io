import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsJavascriptSection } from "./sections/QueEsJavascriptSection";
import { CaracteristicasPrincipalesSection } from "./sections/CaracteristicasPrincipalesSection";
import { ParaQueSeUsaSection } from "./sections/ParaQueSeUsaSection";
import { HistoriaBreveYVideoSection } from "./sections/HistoriaBreveYVideoSection";
import { QueEsElDomSection } from "./sections/QueEsElDomSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function IntroJsYDomLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsJavascriptSection />
      <CaracteristicasPrincipalesSection />
      <ParaQueSeUsaSection />
      <HistoriaBreveYVideoSection />
      <QueEsElDomSection />
      <CompruebaTuComprensionSection />
      <ResumenSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
