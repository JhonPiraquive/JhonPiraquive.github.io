import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsReactSection } from "./sections/QueEsReactSection";
import { JsxSection } from "./sections/JsxSection";
import { ComponentesFuncionalesSection } from "./sections/ComponentesFuncionalesSection";
import { PropsEstadoSection } from "./sections/PropsEstadoSection";
import { HooksSection } from "./sections/HooksSection";
import { EfectosSection } from "./sections/EfectosSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function ReactPageLesson({ locale: _locale }: Props) {
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
      <QueEsReactSection />
      <JsxSection />
      <ComponentesFuncionalesSection />
      <PropsEstadoSection />
      <HooksSection />
      <EfectosSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
