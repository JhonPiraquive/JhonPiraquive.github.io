import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SqlFamiliasSection } from "./sections/SqlFamiliasSection";
import { DdlSection } from "./sections/DdlSection";
import { DmlSection } from "./sections/DmlSection";
import { DclTclAcidSection } from "./sections/DclTclAcidSection";
import { SqlVsNosqlSection } from "./sections/SqlVsNosqlSection";
import { ClavesSection } from "./sections/ClavesSection";
import { ColumnarGrafosSection } from "./sections/ColumnarGrafosSection";

type Props = { locale: string };

export default function BasesDeDatosPageLesson({ locale: _locale }: Props) {
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
      <SqlFamiliasSection />
      <DdlSection />
      <DmlSection />
      <DclTclAcidSection />
      <SqlVsNosqlSection />
      <ClavesSection />
      <ColumnarGrafosSection />
    </ClassPageLayout>
  );
}
