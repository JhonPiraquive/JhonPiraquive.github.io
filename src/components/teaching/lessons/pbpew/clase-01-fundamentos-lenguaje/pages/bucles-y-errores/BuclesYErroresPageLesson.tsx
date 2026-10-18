import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { BucleForSection } from "./sections/BucleForSection";
import { BucleWhileSection } from "./sections/BucleWhileSection";
import { BucleDoWhileSection } from "./sections/BucleDoWhileSection";
import { BreakContinueSection } from "./sections/BreakContinueSection";
import { TryCatchSection } from "./sections/TryCatchSection";

type Props = { locale: string };

export default function BuclesYErroresPageLesson({ locale: _locale }: Props) {
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
      <BucleForSection />
      <BucleWhileSection />
      <BucleDoWhileSection />
      <BreakContinueSection />
      <TryCatchSection />
    </ClassPageLayout>
  );
}
