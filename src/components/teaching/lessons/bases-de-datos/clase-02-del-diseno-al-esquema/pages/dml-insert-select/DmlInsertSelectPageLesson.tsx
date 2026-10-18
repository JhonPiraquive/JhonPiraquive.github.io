import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsDmlSection } from "../../sections/QueEsDmlSection";
import { InsertSection } from "../../sections/InsertSection";
import { SelectBaseSection } from "../../sections/SelectBaseSection";

type Props = { locale: string };

export default function DmlInsertSelectPageLesson({ locale }: Props) {
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
      <QueEsDmlSection />
      <InsertSection />
      <SelectBaseSection />
    </ClassPageLayout>
  );
}
