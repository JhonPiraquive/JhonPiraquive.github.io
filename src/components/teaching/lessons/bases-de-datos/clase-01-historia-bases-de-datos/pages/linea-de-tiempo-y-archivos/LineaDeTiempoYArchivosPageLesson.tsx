import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PorQueLaHistoriaImportaSection } from "../../sections/PorQueLaHistoriaImportaSection";
import { ArchivosPlanosSection } from "../../sections/ArchivosPlanosSection";

type Props = { locale: string };

export default function LineaDeTiempoYArchivosPageLesson({ locale }: Props) {
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
      <PorQueLaHistoriaImportaSection />
      <ArchivosPlanosSection />
    </ClassPageLayout>
  );
}
