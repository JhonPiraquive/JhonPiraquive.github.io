import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { VisionGeneralFormasSection } from "../../sections/VisionGeneralFormasSection";
import { PrimeraFormaNormalSection } from "../../sections/PrimeraFormaNormalSection";
import { SegundaFormaNormalSection } from "../../sections/SegundaFormaNormalSection";
import { TerceraFormaNormalSection } from "../../sections/TerceraFormaNormalSection";
import { BcnfMencionSection } from "../../sections/BcnfMencionSection";

type Props = { locale: string };

export default function FormasNormales123PageLesson({ locale: _locale }: Props) {
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
      <VisionGeneralFormasSection />
      <PrimeraFormaNormalSection />
      <SegundaFormaNormalSection />
      <TerceraFormaNormalSection />
      <BcnfMencionSection />
    </ClassPageLayout>
  );
}
