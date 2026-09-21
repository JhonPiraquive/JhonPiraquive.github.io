import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { ElementosBasicosSection } from "./sections/ElementosBasicosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";

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
      <ObjetivosDelTemaSection />
      <ElementosBasicosSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
    </ClassPageLayout>
  );
}
