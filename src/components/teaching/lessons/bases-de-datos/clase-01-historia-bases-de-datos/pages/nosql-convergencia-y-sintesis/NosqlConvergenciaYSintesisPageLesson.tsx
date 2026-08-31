import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { NosqlWebScaleSection } from "../../sections/NosqlWebScaleSection";
import { HoyConvergenciaSection } from "../../sections/HoyConvergenciaSection";
import { ComparacionModelosSection } from "../../sections/ComparacionModelosSection";
import { ErroresYCasosSection } from "../../sections/ErroresYCasosSection";

type Props = { locale: string };

export default function NosqlConvergenciaYSintesisPageLesson({ locale }: Props) {
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
      <NosqlWebScaleSection />
      <HoyConvergenciaSection />
      <ComparacionModelosSection />
      <ErroresYCasosSection />
    </ClassPageLayout>
  );
}
