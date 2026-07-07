import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { RestArquitecturaSection } from "./sections/RestArquitecturaSection";
import { SoapArquitecturaSection } from "./sections/SoapArquitecturaSection";
import { GraphqlArquitecturaSection } from "./sections/GraphqlArquitecturaSection";
import { GrpcArquitecturaSection } from "./sections/GrpcArquitecturaSection";
import { PatronesSection } from "./sections/PatronesSection";
import { ComparativaSection } from "./sections/ComparativaSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { CierreTrackSection } from "./sections/CierreTrackSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function ArquitecturaApiLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <RestArquitecturaSection />
      <SoapArquitecturaSection />
      <GraphqlArquitecturaSection />
      <GrpcArquitecturaSection />
      <PatronesSection />
      <ComparativaSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <CierreTrackSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
