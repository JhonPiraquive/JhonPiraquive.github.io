import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MetodologiasYRolSection } from "../../sections/MetodologiasYRolSection";
import { RolesDelEquipoSection } from "../../sections/RolesDelEquipoSection";
import { CriteriosCalidadSection } from "../../sections/CriteriosCalidadSection";

type Props = { locale: string };

export default function RolesYCalidadPageLesson({ locale: _locale }: Props) {
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
      <MetodologiasYRolSection />
      <RolesDelEquipoSection />
      <CriteriosCalidadSection />
    </ClassPageLayout>
  );
}
