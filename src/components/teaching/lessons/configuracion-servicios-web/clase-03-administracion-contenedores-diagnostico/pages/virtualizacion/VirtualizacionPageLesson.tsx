import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { VirtualizacionSection } from "../../sections/VirtualizacionSection";

type Props = { locale: string };

export default function VirtualizacionPageLesson({ locale }: Props) {
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
      <VirtualizacionSection />
    </ClassPageLayout>
  );
}
