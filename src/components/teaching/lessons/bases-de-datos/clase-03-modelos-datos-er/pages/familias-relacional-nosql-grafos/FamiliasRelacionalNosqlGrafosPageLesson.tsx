import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { FamiliaRelacionalSection } from "../../sections/FamiliaRelacionalSection";
import { FamiliaNosqlSection } from "../../sections/FamiliaNosqlSection";
import { FamiliaGrafosSection } from "../../sections/FamiliaGrafosSection";
import { IntroEstrellaCopoSection } from "../../sections/IntroEstrellaCopoSection";

type Props = { locale: string };

export default function FamiliasRelacionalNosqlGrafosPageLesson({ locale }: Props) {
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
      <FamiliaRelacionalSection />
      <FamiliaNosqlSection />
      <FamiliaGrafosSection />
      <IntroEstrellaCopoSection />
    </ClassPageLayout>
  );
}
