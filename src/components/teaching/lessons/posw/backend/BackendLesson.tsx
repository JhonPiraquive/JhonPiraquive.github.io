import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsBackendSection } from "./sections/QueEsBackendSection";
import { ResponsabilidadesBackendSection } from "./sections/ResponsabilidadesBackendSection";
import { TecnologiasBackendSection } from "./sections/TecnologiasBackendSection";
import { ComoElegirBackendSection } from "./sections/ComoElegirBackendSection";
import { EjemplosBackendSection } from "./sections/EjemplosBackendSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function BackendLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsBackendSection />
      <ResponsabilidadesBackendSection />
      <TecnologiasBackendSection />
      <ComoElegirBackendSection />
      <EjemplosBackendSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
