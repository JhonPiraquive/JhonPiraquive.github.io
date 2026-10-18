import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsFrontendSection } from "./sections/QueEsFrontendSection";
import { TecnologiasBaseSection } from "./sections/TecnologiasBaseSection";
import { FrameworksSection } from "./sections/FrameworksSection";
import { ComoElegirFrameworkSection } from "./sections/ComoElegirFrameworkSection";
import { EjemplosComponentesSection } from "./sections/EjemplosComponentesSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function FrontendPageLesson({ locale: _locale }: Props) {
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
      <QueEsFrontendSection />
      <TecnologiasBaseSection />
      <FrameworksSection />
      <ComoElegirFrameworkSection />
      <EjemplosComponentesSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
