import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PerifericosSection } from "../../sections/PerifericosSection";
import { MonitorSection } from "../../sections/MonitorSection";

type Props = { locale: string };

export default function PerifericosMonitorPageLesson(_props: Props) {
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
      <PerifericosSection />
      <MonitorSection />
    </ClassPageLayout>
  );
}
