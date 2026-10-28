import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RetoClase02Section } from "../../sections/RetoClase02Section";
import { EjerciciosClase02Section } from "../../sections/EjerciciosClase02Section";
import { MiniquizSection } from "../../sections/MiniquizSection";
import { ExplorarMasSection } from "../../sections/ExplorarMasSection";

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
      <RetoClase02Section />
      <EjerciciosClase02Section />
      <MiniquizSection />
      <ExplorarMasSection />
    </ClassPageLayout>
  );
}
