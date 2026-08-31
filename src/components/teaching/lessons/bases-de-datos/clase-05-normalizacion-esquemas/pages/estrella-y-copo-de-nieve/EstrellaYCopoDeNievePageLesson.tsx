import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { EsquemaEstrellaSection } from "../../sections/EsquemaEstrellaSection";
import { EsquemaCopoNieveSection } from "../../sections/EsquemaCopoNieveSection";

type Props = { locale: string };

export default function EstrellaYCopoDeNievePageLesson({ locale: _locale }: Props) {
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
      <EsquemaEstrellaSection />
      <EsquemaCopoNieveSection />
    </ClassPageLayout>
  );
}
