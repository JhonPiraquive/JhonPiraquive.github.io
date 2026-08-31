import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DesnormalizacionSection } from "../../sections/DesnormalizacionSection";

type Props = { locale: string };

export default function DesnormalizacionPageLesson({ locale: _locale }: Props) {
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
      <DesnormalizacionSection />
    </ClassPageLayout>
  );
}
