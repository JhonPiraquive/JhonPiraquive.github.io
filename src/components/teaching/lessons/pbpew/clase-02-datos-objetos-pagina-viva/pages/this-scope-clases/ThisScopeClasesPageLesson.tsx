import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { AmbitoScopeSection } from "./sections/AmbitoScopeSection";
import { ThisSection } from "./sections/ThisSection";
import { ClasesYMetodosSection } from "./sections/ClasesYMetodosSection";
import { HerenciaSection } from "./sections/HerenciaSection";

type Props = { locale: string };

export default function ThisScopeClasesPageLesson({ locale: _locale }: Props) {
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
      <AmbitoScopeSection />
      <ThisSection />
      <ClasesYMetodosSection />
      <HerenciaSection />
    </ClassPageLayout>
  );
}
