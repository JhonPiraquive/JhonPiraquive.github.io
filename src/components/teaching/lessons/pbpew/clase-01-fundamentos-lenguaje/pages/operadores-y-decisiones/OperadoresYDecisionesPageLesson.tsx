import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { OperadoresAritmeticosSection } from "./sections/OperadoresAritmeticosSection";
import { OperadoresLogicosSection } from "./sections/OperadoresLogicosSection";
import { IfElseIfElseSection } from "./sections/IfElseIfElseSection";
import { SwitchSection } from "./sections/SwitchSection";

type Props = { locale: string };

export default function OperadoresYDecisionesPageLesson({ locale: _locale }: Props) {
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
      <OperadoresAritmeticosSection />
      <OperadoresLogicosSection />
      <IfElseIfElseSection />
      <SwitchSection />
    </ClassPageLayout>
  );
}
