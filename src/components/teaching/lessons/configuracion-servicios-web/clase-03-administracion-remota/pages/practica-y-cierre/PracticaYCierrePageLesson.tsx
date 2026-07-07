import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { CompruebaTuComprensionSection } from "../../sections/CompruebaTuComprensionSection";
import { CierreSection } from "../../sections/CierreSection";

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
      <RetoIntegradorSection />
      <CompruebaTuComprensionSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
