import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { AdrSection } from "../../sections/AdrSection";
import { RiesgosYReversibilidadSection } from "../../sections/RiesgosYReversibilidadSection";
import { GestionDelCambioSection } from "../../sections/GestionDelCambioSection";

type Props = { locale: string };

export default function RegistrarYGestionarLaDecisionPageLesson({ locale: _locale }: Props) {
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
      <AdrSection />
      <RiesgosYReversibilidadSection />
      <GestionDelCambioSection />
    </ClassPageLayout>
  );
}
