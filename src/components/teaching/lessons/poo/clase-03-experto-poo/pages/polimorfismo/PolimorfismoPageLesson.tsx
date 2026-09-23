import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PolimorfismoInterfacesSection } from "./sections/PolimorfismoInterfacesSection";
import { PolimorfismoHerenciaSection } from "./sections/PolimorfismoHerenciaSection";
import { ClienteEstableSection } from "./sections/ClienteEstableSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function PolimorfismoPageLesson({ locale: _locale }: Props) {
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
      <PolimorfismoInterfacesSection />
      <PolimorfismoHerenciaSection />
      <ClienteEstableSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
