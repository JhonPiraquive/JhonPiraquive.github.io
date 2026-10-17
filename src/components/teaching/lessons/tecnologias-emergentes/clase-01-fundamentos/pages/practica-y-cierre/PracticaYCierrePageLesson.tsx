import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RetoClase01Section } from "../../sections/RetoClase01Section";
import { EjerciciosClase01Section } from "../../sections/EjerciciosClase01Section";
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
      <RetoClase01Section />
      <EjerciciosClase01Section />
      <MiniquizSection />
      <ExplorarMasSection />
    </ClassPageLayout>
  );
}
