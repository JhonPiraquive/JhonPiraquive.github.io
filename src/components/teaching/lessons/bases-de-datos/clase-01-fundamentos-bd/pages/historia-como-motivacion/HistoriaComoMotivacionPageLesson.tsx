import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HistoriaObjetivosSection } from "../../sections/HistoriaObjetivosSection";
import { PorQueLaHistoriaImportaSection } from "../../sections/PorQueLaHistoriaImportaSection";
import { ArchivosPlanosSection } from "../../sections/ArchivosPlanosSection";
import { NavegacionalSection } from "../../sections/NavegacionalSection";
import { ModeloRelacionalCoddSection } from "../../sections/ModeloRelacionalCoddSection";
import { SqlComercialSection } from "../../sections/SqlComercialSection";
import { ComparacionModelosSection } from "../../sections/ComparacionModelosSection";

type Props = { locale: string };

export default function HistoriaComoMotivacionPageLesson({ locale: _locale }: Props) {
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
      <HistoriaObjetivosSection />
      <PorQueLaHistoriaImportaSection />
      <ArchivosPlanosSection />
      <NavegacionalSection />
      <ModeloRelacionalCoddSection />
      <SqlComercialSection />
      <ComparacionModelosSection />
    </ClassPageLayout>
  );
}
