import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsLaProgramacionSection } from "./sections/QueEsLaProgramacionSection";
import { QueEsUnObjetoSection } from "./sections/QueEsUnObjetoSection";
import { QueEsUnaClaseSection } from "./sections/QueEsUnaClaseSection";
import { QueEsUnaInstanciaSection } from "./sections/QueEsUnaInstanciaSection";
import { QueEsUnConstructorSection } from "./sections/QueEsUnConstructorSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

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
      <ObjetivosDelTemaSection />
      <QueEsLaProgramacionSection />
      <QueEsUnObjetoSection />
      <QueEsUnaClaseSection />
      <QueEsUnaInstanciaSection />
      <QueEsUnConstructorSection />
      <CompruebaTuComprensionSection />
      <ResumenSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </ClassPageLayout>
  );
}
