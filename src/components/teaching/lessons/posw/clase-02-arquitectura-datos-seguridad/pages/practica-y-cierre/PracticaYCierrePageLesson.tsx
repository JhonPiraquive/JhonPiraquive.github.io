import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PracticaGuiadaSection } from "../../sections/PracticaGuiadaSection";
import { RetosIntegradoresSection } from "../../sections/RetosIntegradoresSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";
import { AutoevaluacionSection } from "../../sections/AutoevaluacionSection";
import { CierreSection } from "../../sections/CierreSection";

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
      <RetosIntegradoresSection />
      <MiniquizFinalSection />
      <AutoevaluacionSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
