import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "../../sections/ObjetivosSection";
import { IntroMapaMasAllaSelectSection } from "../../sections/IntroMapaMasAllaSelectSection";
import { CicloFamiliasSqlSection } from "../../sections/CicloFamiliasSqlSection";
import { FamiliasDdlDmlDclTclSection } from "../../sections/FamiliasDdlDmlDclTclSection";

type Props = { locale: string };

export default function MapaSqlFamiliasPageLesson({ locale: _locale }: Props) {
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
      <ObjetivosSection />
      <IntroMapaMasAllaSelectSection />
      <CicloFamiliasSqlSection />
      <FamiliasDdlDmlDclTclSection />
    </ClassPageLayout>
  );
}
