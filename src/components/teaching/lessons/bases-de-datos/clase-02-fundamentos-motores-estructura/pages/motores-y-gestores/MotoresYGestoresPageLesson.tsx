import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MotoresSection } from "../../sections/MotoresSection";
import { GestoresGuiSection } from "../../sections/GestoresGuiSection";
import { CliSection } from "../../sections/CliSection";
import { MotorGuiCliCompareSection } from "../../sections/MotorGuiCliCompareSection";

type Props = { locale: string };

export default function MotoresYGestoresPageLesson({ locale }: Props) {
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
      <MotoresSection />
      <GestoresGuiSection />
      <CliSection />
      <MotorGuiCliCompareSection />
    </ClassPageLayout>
  );
}
