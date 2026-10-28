import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CriteriosSection } from "../../sections/CriteriosSection";
import { MatrizPonderadaSection } from "../../sections/MatrizPonderadaSection";
import { NuevoNoEsMejorSection } from "../../sections/NuevoNoEsMejorSection";

type Props = { locale: string };

export default function CriteriosDeDecisionPageLesson({ locale: _locale }: Props) {
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
      <CriteriosSection />
      <MatrizPonderadaSection />
      <NuevoNoEsMejorSection />
    </ClassPageLayout>
  );
}
