import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { LabBaseSection } from "../../sections/LabBaseSection";
import { PracticaGuiadaDclSection } from "../../sections/PracticaGuiadaDclSection";
import { RetoIntegradorDclSection } from "../../sections/RetoIntegradorDclSection";
import { CierreDclLegacySection } from "../../sections/CierreDclLegacySection";
import { MiniquizFinalDclLegacySection } from "../../sections/MiniquizFinalDclLegacySection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson({ locale: _locale }: Props) {
  return (
    <ClassPageLayout
      title={meta.title}
      classTitle="Legacy DCL práctica"
      pageNumber={1}
      totalPages={1}
      track={meta.track}
      prev={meta.prev}
      next={meta.next}
    >
      <LabBaseSection />
      <PracticaGuiadaDclSection />
      <RetoIntegradorDclSection />
      <CierreDclLegacySection />
      <MiniquizFinalDclLegacySection />
    </ClassPageLayout>
  );
}
