import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroSolidSection } from "./sections/IntroSolidSection";
import { SrpSection } from "./sections/SrpSection";
import { OcpSection } from "./sections/OcpSection";
import { LspSection } from "./sections/LspSection";
import { IspSection } from "./sections/IspSection";
import { DipSection } from "./sections/DipSection";
import { ResumenSolidSection } from "./sections/ResumenSolidSection";

type Props = { locale: string };

export default function PrincipiosSolidPageLesson({ locale: _locale }: Props) {
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
      <IntroSolidSection />
      <SrpSection />
      <OcpSection />
      <LspSection />
      <IspSection />
      <DipSection />
      <ResumenSolidSection />
    </ClassPageLayout>
  );
}
