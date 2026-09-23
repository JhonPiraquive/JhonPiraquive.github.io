import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { OverloadSection } from "./sections/OverloadSection";
import { OverrideSection } from "./sections/OverrideSection";
import { OverrideVsOverloadSection } from "./sections/OverrideVsOverloadSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function OverrideYSobrecargaPageLesson({ locale: _locale }: Props) {
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
      <OverloadSection />
      <OverrideSection />
      <OverrideVsOverloadSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
