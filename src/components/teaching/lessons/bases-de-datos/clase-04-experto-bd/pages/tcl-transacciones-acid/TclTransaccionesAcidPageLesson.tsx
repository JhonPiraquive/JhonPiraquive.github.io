import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsTclTransaccionSection } from "../../sections/QueEsTclTransaccionSection";
import { AcidSection } from "../../sections/AcidSection";
import { CommitRollbackSavepointSection } from "../../sections/CommitRollbackSavepointSection";

type Props = { locale: string };

export default function TclTransaccionesAcidPageLesson({ locale: _locale }: Props) {
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
      <QueEsTclTransaccionSection />
      <AcidSection />
      <CommitRollbackSavepointSection />
    </ClassPageLayout>
  );
}
