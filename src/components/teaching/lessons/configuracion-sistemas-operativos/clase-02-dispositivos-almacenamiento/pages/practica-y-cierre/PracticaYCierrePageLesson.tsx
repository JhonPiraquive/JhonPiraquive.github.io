import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CompruebaTuComprensionSection } from "../../sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { CierreSection } from "../../sections/CierreSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson(_props: Props) {
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
      <MiniquizFinalSection />
    </ClassPageLayout>
  );
}
