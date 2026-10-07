import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ElementosBasicosSection } from "./sections/ElementosBasicosSection";
type Props = { locale: string };

export default function DiagramaClaseSimplePageLesson({ locale: _locale }: Props) {
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
      <ElementosBasicosSection />
</ClassPageLayout>
  );
}
