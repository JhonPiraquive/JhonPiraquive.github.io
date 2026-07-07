import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsReactSection } from "./sections/QueEsReactSection";
import { JsxSection } from "./sections/JsxSection";
import { ComponentesFuncionalesSection } from "./sections/ComponentesFuncionalesSection";
import { PropsEstadoSection } from "./sections/PropsEstadoSection";
import { HooksSection } from "./sections/HooksSection";
import { EfectosSection } from "./sections/EfectosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function ReactLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsReactSection />
      <JsxSection />
      <ComponentesFuncionalesSection />
      <PropsEstadoSection />
      <HooksSection />
      <EfectosSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
