import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { AsociacionSection } from "./sections/AsociacionSection";
import { AgregacionSection } from "./sections/AgregacionSection";
import { ComposicionSection } from "./sections/ComposicionSection";
import { ComparacionRelacionesSection } from "./sections/ComparacionRelacionesSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function AsociacionAgregacionComposicionPageLesson({ locale: _locale }: Props) {
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
      <AsociacionSection />
      <AgregacionSection />
      <ComposicionSection />
      <ComparacionRelacionesSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
