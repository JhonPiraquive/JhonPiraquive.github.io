import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsApiSection } from "./sections/QueEsApiSection";
import { TiposApiSection } from "./sections/TiposApiSection";
import { HerramientasApiSection } from "./sections/HerramientasApiSection";
import { DisenoApiSection } from "./sections/DisenoApiSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function ApisPageLesson({ locale: _locale }: Props) {
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
      <QueEsApiSection />
      <TiposApiSection />
      <HerramientasApiSection />
      <DisenoApiSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
