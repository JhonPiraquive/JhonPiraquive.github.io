import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroAngularSection } from "./sections/IntroAngularSection";
import { ComponentesSection } from "./sections/ComponentesSection";
import { CicloVidaSection } from "./sections/CicloVidaSection";
import { DirectivasBindingsSection } from "./sections/DirectivasBindingsSection";
import { PipesModulosSection } from "./sections/PipesModulosSection";
import { ServiciosDiSection } from "./sections/ServiciosDiSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function AngularPageLesson({ locale: _locale }: Props) {
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
      <IntroAngularSection />
      <ComponentesSection />
      <CicloVidaSection />
      <DirectivasBindingsSection />
      <PipesModulosSection />
      <ServiciosDiSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
