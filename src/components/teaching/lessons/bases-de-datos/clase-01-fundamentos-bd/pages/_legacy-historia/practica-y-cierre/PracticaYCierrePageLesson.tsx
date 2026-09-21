import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HistoriaPracticaGuiadaSection } from "../../../sections/HistoriaPracticaGuiadaSection";
import { HistoriaRetoIntegradorSection } from "../../../sections/HistoriaRetoIntegradorSection";
import { HistoriaCierreSection } from "../../../sections/HistoriaCierreSection";
import { HistoriaMiniquizFinalSection } from "../../../sections/HistoriaMiniquizFinalSection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson({ locale }: Props) {
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
      <HistoriaPracticaGuiadaSection />
      <HistoriaRetoIntegradorSection />
      <HistoriaCierreSection />
      <HistoriaMiniquizFinalSection />
    </ClassPageLayout>
  );
}
