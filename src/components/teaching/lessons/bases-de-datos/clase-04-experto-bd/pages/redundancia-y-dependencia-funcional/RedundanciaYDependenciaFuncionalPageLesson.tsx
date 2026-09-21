import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroMapaLeccionSection } from "../../sections/IntroMapaLeccionSection";
import { DelExcelSucioSection } from "../../sections/DelExcelSucioSection";
import { RedundanciaSection } from "../../sections/RedundanciaSection";
import { DependenciaFuncionalSection } from "../../sections/DependenciaFuncionalSection";

type Props = { locale: string };

export default function RedundanciaYDependenciaFuncionalPageLesson({ locale: _locale }: Props) {
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
      <IntroMapaLeccionSection />
      <DelExcelSucioSection />
      <RedundanciaSection />
      <DependenciaFuncionalSection />
    </ClassPageLayout>
  );
}
