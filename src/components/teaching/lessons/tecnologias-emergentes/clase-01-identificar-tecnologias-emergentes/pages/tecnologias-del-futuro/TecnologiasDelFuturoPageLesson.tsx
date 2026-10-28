import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HorizontesSection } from "../../sections/HorizontesSection";
import { CandidatasFuturasSection } from "../../sections/CandidatasFuturasSection";
import { LimitesDePrediccionSection } from "../../sections/LimitesDePrediccionSection";

type Props = { locale: string };

export default function TecnologiasDelFuturoPageLesson({ locale: _locale }: Props) {
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
      <HorizontesSection />
      <CandidatasFuturasSection />
      <LimitesDePrediccionSection />
    </ClassPageLayout>
  );
}
