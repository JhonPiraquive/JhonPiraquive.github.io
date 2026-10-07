import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { EncapsulamientoQueEsYSection } from "./sections/EncapsulamientoQueEsYSection";
import { InvariantesReglasQueElSection } from "./sections/InvariantesReglasQueElSection";
type Props = { locale: string };

export default function EncapsulamientoPageLesson({ locale: _locale }: Props) {
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
      <EncapsulamientoQueEsYSection />
      <InvariantesReglasQueElSection />
</ClassPageLayout>
  );
}
