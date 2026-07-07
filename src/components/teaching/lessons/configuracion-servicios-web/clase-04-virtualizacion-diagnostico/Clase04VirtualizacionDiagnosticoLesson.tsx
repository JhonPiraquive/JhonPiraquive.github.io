import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ContenedoresSection } from "./sections/ContenedoresSection";
import { DespliegueContenedorBasicoSection } from "./sections/DespliegueContenedorBasicoSection";
import { VirtualizacionSection } from "./sections/VirtualizacionSection";
import { ValidacionServicioFtpSection } from "./sections/ValidacionServicioFtpSection";
import { SolucionProblemasSection } from "./sections/SolucionProblemasSection";
import { DiagnosticoSistematicoSection } from "./sections/DiagnosticoSistematicoSection";
import { NginxTroubleshootingSection } from "./sections/NginxTroubleshootingSection";
import { ValidacionPostCorreccionSection } from "./sections/ValidacionPostCorreccionSection";
import { InformeTecnicoSection } from "./sections/InformeTecnicoSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ResolucionLocalSection } from "./sections/ResolucionLocalSection";
import { FlujoIntegradoSection } from "./sections/FlujoIntegradoSection";
import { ChecklistPruebasSection } from "./sections/ChecklistPruebasSection";

type Props = { locale: string };

export default function Clase04VirtualizacionDiagnosticoLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <ContenedoresSection />
      <DespliegueContenedorBasicoSection />
      <VirtualizacionSection />
      <SolucionProblemasSection />
      <DiagnosticoSistematicoSection />
      <NginxTroubleshootingSection />
      <ValidacionPostCorreccionSection />
      <InformeTecnicoSection />
      <ResolucionLocalSection />
      <FlujoIntegradoSection />
      <ChecklistPruebasSection />
      <ValidacionServicioFtpSection />
      <RetoIntegradorSection />
      <CompruebaTuComprensionSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
