import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsTypescriptSection } from "./sections/QueEsTypescriptSection";
import { PorQueTypescriptSection } from "./sections/PorQueTypescriptSection";
import { SistemaTiposSection } from "./sections/SistemaTiposSection";
import { InterfacesTypesSection } from "./sections/InterfacesTypesSection";
import { GenericosSection } from "./sections/GenericosSection";
import { ConfiguracionTsSection } from "./sections/ConfiguracionTsSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function TypescriptPageLesson({ locale: _locale }: Props) {
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
      <QueEsTypescriptSection />
      <PorQueTypescriptSection />
      <SistemaTiposSection />
      <InterfacesTypesSection />
      <GenericosSection />
      <ConfiguracionTsSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
