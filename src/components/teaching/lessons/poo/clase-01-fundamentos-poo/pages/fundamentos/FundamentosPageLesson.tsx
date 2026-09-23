import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsLaProgramacionSection } from "./sections/QueEsLaProgramacionSection";
import { QueEsUnObjetoSection } from "./sections/QueEsUnObjetoSection";
import { QueEsUnaClaseSection } from "./sections/QueEsUnaClaseSection";
import { QueEsUnaInstanciaSection } from "./sections/QueEsUnaInstanciaSection";
import { QueEsUnConstructorSection } from "./sections/QueEsUnConstructorSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function FundamentosPageLesson({ locale: _locale }: Props) {
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
      <QueEsLaProgramacionSection />
      <QueEsUnObjetoSection />
      <QueEsUnaClaseSection />
      <QueEsUnaInstanciaSection />
      <QueEsUnConstructorSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
