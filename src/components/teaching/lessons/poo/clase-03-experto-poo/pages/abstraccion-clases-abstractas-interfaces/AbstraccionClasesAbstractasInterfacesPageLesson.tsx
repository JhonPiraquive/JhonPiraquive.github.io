import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { AbstraccionSection } from "./sections/AbstraccionSection";
import { ClasesAbstractasSection } from "./sections/ClasesAbstractasSection";
import { InterfacesSection } from "./sections/InterfacesSection";
import { AbstractaVsInterfazSection } from "./sections/AbstractaVsInterfazSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function AbstraccionClasesAbstractasInterfacesPageLesson({ locale: _locale }: Props) {
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
      <AbstraccionSection />
      <ClasesAbstractasSection />
      <InterfacesSection />
      <AbstractaVsInterfazSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </ClassPageLayout>
  );
}
