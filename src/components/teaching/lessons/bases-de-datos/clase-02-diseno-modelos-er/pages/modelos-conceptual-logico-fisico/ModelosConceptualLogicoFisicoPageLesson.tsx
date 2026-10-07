import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "../../sections/ObjetivosSection";
import { IntroDisenarAntesSection } from "../../sections/IntroDisenarAntesSection";
import { MapaRequisitoDdlSection } from "../../sections/MapaRequisitoDdlSection";
import { ModeloDatosSection } from "../../sections/ModeloDatosSection";
import { ModeloConceptualSection } from "../../sections/ModeloConceptualSection";
import { ModeloLogicoSection } from "../../sections/ModeloLogicoSection";
import { ModeloFisicoSection } from "../../sections/ModeloFisicoSection";

type Props = { locale: string };

export default function ModelosConceptualLogicoFisicoPageLesson({ locale }: Props) {
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
      <IntroDisenarAntesSection />
      <MapaRequisitoDdlSection />
      <ModeloDatosSection />
      <ModeloConceptualSection />
      <ModeloLogicoSection />
      <ModeloFisicoSection />
    </ClassPageLayout>
  );
}
