import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "../../sections/CierreSection";
import { AutoevaluacionSection } from "../../sections/AutoevaluacionSection";
import { EjerciciosSection } from "../../sections/EjerciciosSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";

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
      <CierreSection />
      <EjerciciosSection />
      <MiniquizFinalSection />
      <AutoevaluacionSection />
    </ClassPageLayout>
  );
}
