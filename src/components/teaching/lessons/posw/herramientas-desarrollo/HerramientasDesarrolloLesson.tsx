import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { XamppSection } from "./sections/XamppSection";
import { HelloPhpSection } from "./sections/HelloPhpSection";
import { DockerConceptosSection } from "./sections/DockerConceptosSection";
import { DockerComandosSection } from "./sections/DockerComandosSection";
import { ComparativaSection } from "./sections/ComparativaSection";
import { ReactDockerSection } from "./sections/ReactDockerSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function HerramientasDesarrolloLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <XamppSection />
      <HelloPhpSection />
      <DockerConceptosSection />
      <DockerComandosSection />
      <ComparativaSection />
      <ReactDockerSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
