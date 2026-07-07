import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsTypescriptSection } from "./sections/QueEsTypescriptSection";
import { PorQueTypescriptSection } from "./sections/PorQueTypescriptSection";
import { SistemaTiposSection } from "./sections/SistemaTiposSection";
import { InterfacesTypesSection } from "./sections/InterfacesTypesSection";
import { GenericosSection } from "./sections/GenericosSection";
import { ConfiguracionTsSection } from "./sections/ConfiguracionTsSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function TypescriptLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsTypescriptSection />
      <PorQueTypescriptSection />
      <SistemaTiposSection />
      <InterfacesTypesSection />
      <GenericosSection />
      <ConfiguracionTsSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
