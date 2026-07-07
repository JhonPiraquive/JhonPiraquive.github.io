import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SolucionProblemasSection } from "../../sections/SolucionProblemasSection";
import { DiagnosticoSistematicoSection } from "../../sections/DiagnosticoSistematicoSection";
import { NginxTroubleshootingSection } from "../../sections/NginxTroubleshootingSection";
import { ValidacionPostCorreccionSection } from "../../sections/ValidacionPostCorreccionSection";
import { InformeTecnicoSection } from "../../sections/InformeTecnicoSection";

type Props = { locale: string };

export default function DiagnosticoTroubleshootingPageLesson({ locale }: Props) {
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
      <SolucionProblemasSection />
      <DiagnosticoSistematicoSection />
      <NginxTroubleshootingSection />
      <ValidacionPostCorreccionSection />
      <InformeTecnicoSection />
    </ClassPageLayout>
  );
}
