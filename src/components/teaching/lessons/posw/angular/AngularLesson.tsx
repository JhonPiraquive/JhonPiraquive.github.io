import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { IntroAngularSection } from "./sections/IntroAngularSection";
import { ComponentesSection } from "./sections/ComponentesSection";
import { CicloVidaSection } from "./sections/CicloVidaSection";
import { DirectivasBindingsSection } from "./sections/DirectivasBindingsSection";
import { PipesModulosSection } from "./sections/PipesModulosSection";
import { ServiciosDiSection } from "./sections/ServiciosDiSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function AngularLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <IntroAngularSection />
      <ComponentesSection />
      <CicloVidaSection />
      <DirectivasBindingsSection />
      <PipesModulosSection />
      <ServiciosDiSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
