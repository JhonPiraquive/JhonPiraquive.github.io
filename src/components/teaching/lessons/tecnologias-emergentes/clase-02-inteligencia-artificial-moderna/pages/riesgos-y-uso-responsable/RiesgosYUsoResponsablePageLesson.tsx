import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SeguridadDeAgentesSection } from "../../sections/SeguridadDeAgentesSection";
import { VerificarLoGeneradoSection } from "../../sections/VerificarLoGeneradoSection";
import { EticaYRegulacionSection } from "../../sections/EticaYRegulacionSection";

type Props = { locale: string };

export default function RiesgosYUsoResponsablePageLesson({ locale: _locale }: Props) {
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
      <SeguridadDeAgentesSection />
      <VerificarLoGeneradoSection />
      <EticaYRegulacionSection />
    </ClassPageLayout>
  );
}
