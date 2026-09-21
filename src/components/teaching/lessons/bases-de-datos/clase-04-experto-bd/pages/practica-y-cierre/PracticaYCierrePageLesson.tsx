import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PracticaGuiadaSection } from "../../sections/PracticaGuiadaSection";
import { LabBaseSection } from "../../sections/LabBaseSection";
import { PracticaGuiadaDclSection } from "../../sections/PracticaGuiadaDclSection";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { RetoIntegradorDclSection } from "../../sections/RetoIntegradorDclSection";
import { CierreSection } from "../../sections/CierreSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";

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
      <LabBaseSection />
      <PracticaGuiadaDclSection />
      <RetoIntegradorSection />
      <RetoIntegradorDclSection />
      <CierreSection />
      <MiniquizFinalSection />
    </ClassPageLayout>
  );
}
