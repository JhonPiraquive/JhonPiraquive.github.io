import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsClienteServidorSection } from "./sections/QueEsClienteServidorSection";
import { FlujoHttpSection } from "./sections/FlujoHttpSection";
import { ArquitecturasSection } from "./sections/ArquitecturasSection";
import { VariantesSection } from "./sections/VariantesSection";
import { EjemplosRealesSection } from "./sections/EjemplosRealesSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function ModeloClienteServidorLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsClienteServidorSection />
      <FlujoHttpSection />
      <ArquitecturasSection />
      <VariantesSection />
      <EjemplosRealesSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
