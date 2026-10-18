import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { UsosIaSection } from "./sections/UsosIaSection";
import { RiesgosSection } from "./sections/RiesgosSection";
import { VerificacionSection } from "./sections/VerificacionSection";
import { EstructuraClaudeSection } from "./sections/EstructuraClaudeSection";
import { AgentesSection } from "./sections/AgentesSection";
import { FlujoTrabajoSection } from "./sections/FlujoTrabajoSection";

type Props = { locale: string };

export default function IaEnDesarrolloWebPageLesson({ locale: _locale }: Props) {
  return (
    <ClassPageLayout
      title={meta.title}
      classTitle={meta.classTitle!}
      pageNumber={meta.pageNumber}
      totalPages={meta.totalPages}
      track={meta.track}
      prev={meta.prev}
      next={meta.next}
    >
      <UsosIaSection />
      <RiesgosSection />
      <VerificacionSection />
      <EstructuraClaudeSection />
      <AgentesSection />
      <FlujoTrabajoSection />
    </ClassPageLayout>
  );
}
