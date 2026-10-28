import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DeLaIaAlModeloSection } from "../../sections/DeLaIaAlModeloSection";
import { ComoFuncionaUnModeloSection } from "../../sections/ComoFuncionaUnModeloSection";
import { TiposDeModelosSection } from "../../sections/TiposDeModelosSection";
import { LimitesDeLosModelosSection } from "../../sections/LimitesDeLosModelosSection";

type Props = { locale: string };

export default function ModelosDeLenguajePageLesson({ locale: _locale }: Props) {
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
      <DeLaIaAlModeloSection />
      <ComoFuncionaUnModeloSection />
      <TiposDeModelosSection />
      <LimitesDeLosModelosSection />
    </ClassPageLayout>
  );
}
