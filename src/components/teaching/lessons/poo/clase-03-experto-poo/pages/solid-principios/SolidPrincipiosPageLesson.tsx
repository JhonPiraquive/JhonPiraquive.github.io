import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SrpSection } from "./sections/SrpSection";
import { OcpSection } from "./sections/OcpSection";
import { LspSection } from "./sections/LspSection";
import { IspSection } from "./sections/IspSection";
import { DipSection } from "./sections/DipSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function SolidPrincipiosPageLesson({ locale: _locale }: Props) {
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
      <SrpSection />
      <OcpSection />
      <LspSection />
      <IspSection />
      <DipSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
