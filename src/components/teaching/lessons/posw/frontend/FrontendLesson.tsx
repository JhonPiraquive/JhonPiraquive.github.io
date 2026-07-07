import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { ComoElegirFrameworkSection } from "./sections/ComoElegirFrameworkSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { EjemplosComponentesSection } from "./sections/EjemplosComponentesSection";
import { FrameworksSection } from "./sections/FrameworksSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsFrontendSection } from "./sections/QueEsFrontendSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { TecnologiasBaseSection } from "./sections/TecnologiasBaseSection";

type Props = { locale: string };

export default function FrontendLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsFrontendSection />
      <TecnologiasBaseSection />
      <FrameworksSection />
      <ComoElegirFrameworkSection />
      <EjemplosComponentesSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
