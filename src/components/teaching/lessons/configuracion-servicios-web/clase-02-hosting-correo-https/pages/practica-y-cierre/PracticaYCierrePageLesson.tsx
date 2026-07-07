import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CompruebaTuComprensionSection } from "../../sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { CierreSection } from "../../sections/CierreSection";
import { MiniquizSection } from "../../sections/MiniquizSection";

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
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </ClassPageLayout>
  );
}
