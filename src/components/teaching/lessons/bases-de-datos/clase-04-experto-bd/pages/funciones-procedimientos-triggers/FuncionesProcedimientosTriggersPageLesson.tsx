import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { UdfSection } from "../../sections/UdfSection";
import { ProcedureSection } from "../../sections/ProcedureSection";
import { TriggerSection } from "../../sections/TriggerSection";
import { CriterioAppVsBdSection } from "../../sections/CriterioAppVsBdSection";

type Props = { locale: string };

export default function FuncionesProcedimientosTriggersPageLesson({ locale: _locale }: Props) {
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
      <UdfSection />
      <ProcedureSection />
      <TriggerSection />
      <CriterioAppVsBdSection />
    </ClassPageLayout>
  );
}
