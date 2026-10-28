import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ProcesoDeAdopcionSection } from "../../sections/ProcesoDeAdopcionSection";
import { PruebaDeConceptoSection } from "../../sections/PruebaDeConceptoSection";
import { MetricasYRadarSection } from "../../sections/MetricasYRadarSection";

type Props = { locale: string };

export default function DeLaIdeaALaAdopcionPageLesson({ locale: _locale }: Props) {
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
      <ProcesoDeAdopcionSection />
      <PruebaDeConceptoSection />
      <MetricasYRadarSection />
    </ClassPageLayout>
  );
}
