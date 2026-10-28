import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CurvaSSection } from "../../sections/CurvaSSection";
import { CicloDeSobreexpectacionSection } from "../../sections/CicloDeSobreexpectacionSection";
import { DifusionYAbismoSection } from "../../sections/DifusionYAbismoSection";
import { NivelesDeMadurezSection } from "../../sections/NivelesDeMadurezSection";

type Props = { locale: string };

export default function ComoEvolucionaPageLesson({ locale: _locale }: Props) {
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
      <CurvaSSection />
      <CicloDeSobreexpectacionSection />
      <DifusionYAbismoSection />
      <NivelesDeMadurezSection />
    </ClassPageLayout>
  );
}
