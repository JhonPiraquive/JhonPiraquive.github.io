import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ClasicasVsAgilesSection } from "../../sections/ClasicasVsAgilesSection";
import { OrientacionAObjetosSection } from "../../sections/OrientacionAObjetosSection";
import { HerenciaYVentajasSection } from "../../sections/HerenciaYVentajasSection";

type Props = { locale: string };

export default function ModelosYObjetosPageLesson({ locale: _locale }: Props) {
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
      <ClasicasVsAgilesSection />
      <OrientacionAObjetosSection />
      <HerenciaYVentajasSection />
    </ClassPageLayout>
  );
}
