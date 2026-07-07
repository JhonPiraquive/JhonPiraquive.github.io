import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { UsosIaSection } from "./sections/UsosIaSection";
import { RiesgosSection } from "./sections/RiesgosSection";
import { VerificacionSection } from "./sections/VerificacionSection";
import { EstructuraClaudeSection } from "./sections/EstructuraClaudeSection";
import { AgentesSection } from "./sections/AgentesSection";
import { FlujoTrabajoSection } from "./sections/FlujoTrabajoSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function IaEnDesarrolloWebLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <UsosIaSection />
      <RiesgosSection />
      <VerificacionSection />
      <EstructuraClaudeSection />
      <AgentesSection />
      <FlujoTrabajoSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
