import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PracticaGuiadaSection } from "../../sections/PracticaGuiadaSection";
import { EjerciciosSection } from "../../sections/EjerciciosSection";
import { MiniquizSection } from "../../sections/MiniquizSection";
import { AutoevaluacionYRecursosSection } from "../../sections/AutoevaluacionYRecursosSection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson({ locale: _locale }: Props) {
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
      <PracticaGuiadaSection />
      <EjerciciosSection />
      <MiniquizSection />
      <AutoevaluacionYRecursosSection />
    </ClassPageLayout>
  );
}
