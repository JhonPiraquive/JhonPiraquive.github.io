import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueSonEmergentesSection } from "../../sections/QueSonEmergentesSection";
import { CicloDeAdopcionSection } from "../../sections/CicloDeAdopcionSection";
import { CriteriosDeEvaluacionSection } from "../../sections/CriteriosDeEvaluacionSection";
import { PorQueJavascriptSection } from "../../sections/PorQueJavascriptSection";

type Props = { locale: string };

export default function TecnologiasEmergentesYJavascriptPageLesson({ locale: _locale }: Props) {
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
      <QueSonEmergentesSection />
      <CicloDeAdopcionSection />
      <CriteriosDeEvaluacionSection />
      <PorQueJavascriptSection />
    </ClassPageLayout>
  );
}
