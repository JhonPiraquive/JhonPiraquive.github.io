import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsServicioWebSection } from "./sections/QueEsServicioWebSection";
import { IntroSolidPreviewSection } from "./sections/IntroSolidPreviewSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function ServiciosWebPageLesson({ locale: _locale }: Props) {
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
      <QueEsServicioWebSection />
      <IntroSolidPreviewSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
