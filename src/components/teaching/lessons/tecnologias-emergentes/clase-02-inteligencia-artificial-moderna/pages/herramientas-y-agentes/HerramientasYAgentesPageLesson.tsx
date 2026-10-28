import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { UsoDeHerramientasSection } from "../../sections/UsoDeHerramientasSection";
import { CicloDelAgenteSection } from "../../sections/CicloDelAgenteSection";
import { HarnessSection } from "../../sections/HarnessSection";
import { SubagentesYAutonomiaSection } from "../../sections/SubagentesYAutonomiaSection";

type Props = { locale: string };

export default function HerramientasYAgentesPageLesson({ locale: _locale }: Props) {
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
      <UsoDeHerramientasSection />
      <CicloDelAgenteSection />
      <HarnessSection />
      <SubagentesYAutonomiaSection />
    </ClassPageLayout>
  );
}
