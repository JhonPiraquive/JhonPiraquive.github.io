import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CasoAgenteDeProgramacionSection } from "../../sections/CasoAgenteDeProgramacionSection";
import { CasoPilaWebSection } from "../../sections/CasoPilaWebSection";

type Props = { locale: string };

export default function CasosDeDecisionPageLesson({ locale: _locale }: Props) {
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
      <CasoAgenteDeProgramacionSection />
      <CasoPilaWebSection />
    </ClassPageLayout>
  );
}
