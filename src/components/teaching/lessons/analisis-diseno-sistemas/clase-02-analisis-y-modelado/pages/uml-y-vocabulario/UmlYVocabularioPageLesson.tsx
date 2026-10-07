import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsUmlSection } from "../../sections/QueEsUmlSection";
import { ConceptosModeladoSection } from "../../sections/ConceptosModeladoSection";
import { ConceptosDelSistemaSection } from "../../sections/ConceptosDelSistemaSection";

type Props = { locale: string };

export default function UmlYVocabularioPageLesson({ locale: _locale }: Props) {
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
      <QueEsUmlSection />
      <ConceptosModeladoSection />
      <ConceptosDelSistemaSection />
    </ClassPageLayout>
  );
}
