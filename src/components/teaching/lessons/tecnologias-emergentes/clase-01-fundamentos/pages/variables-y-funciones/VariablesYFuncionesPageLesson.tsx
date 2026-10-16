import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { VariablesYTiposSection } from "../../sections/VariablesYTiposSection";
import { FuncionesYFlechaSection } from "../../sections/FuncionesYFlechaSection";
import { OperadoresModernosSection } from "../../sections/OperadoresModernosSection";

type Props = { locale: string };

export default function VariablesYFuncionesPageLesson({ locale: _locale }: Props) {
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
      <VariablesYTiposSection />
      <FuncionesYFlechaSection />
      <OperadoresModernosSection />
    </ClassPageLayout>
  );
}
