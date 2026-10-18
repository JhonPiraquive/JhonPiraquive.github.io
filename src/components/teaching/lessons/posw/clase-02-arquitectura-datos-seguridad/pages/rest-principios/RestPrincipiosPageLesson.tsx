import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroRestSection } from "./sections/IntroRestSection";
import { StatelessSection } from "./sections/StatelessSection";
import { ClientServerSection } from "./sections/ClientServerSection";
import { CacheableSection } from "./sections/CacheableSection";
import { LayeredSection } from "./sections/LayeredSection";
import { UniformInterfaceSection } from "./sections/UniformInterfaceSection";
import { CodeOnDemandSection } from "./sections/CodeOnDemandSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function RestPrincipiosPageLesson({ locale: _locale }: Props) {
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
      <IntroRestSection />
      <StatelessSection />
      <ClientServerSection />
      <CacheableSection />
      <LayeredSection />
      <UniformInterfaceSection />
      <CodeOnDemandSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
