import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CpuSection } from "../../sections/CpuSection";
import { MicroprocesadorSection } from "../../sections/MicroprocesadorSection";

type Props = { locale: string };

export default function CpuYMicroprocesadorPageLesson({ locale }: Props) {
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
      <CpuSection />
      <MicroprocesadorSection />
    </ClassPageLayout>
  );
}
