import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueCambiaConLoSection } from "./sections/QueCambiaConLoSection";
import { SettimeoutYSetintervalSection } from "./sections/SettimeoutYSetintervalSection";
import { ThenCatchFinallySection } from "./sections/ThenCatchFinallySection";
import { AsyncAwaitSection } from "./sections/AsyncAwaitSection";
import { TemplateLiteralsSection } from "./sections/TemplateLiteralsSection";

type Props = { locale: string };

export default function AsincroniaPageLesson({ locale: _locale }: Props) {
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
      <QueCambiaConLoSection />
      <SettimeoutYSetintervalSection />
      <ThenCatchFinallySection />
      <AsyncAwaitSection />
      <TemplateLiteralsSection />
    </ClassPageLayout>
  );
}
