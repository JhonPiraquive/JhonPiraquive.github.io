import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { IntroRestSection } from "./sections/IntroRestSection";
import { StatelessSection } from "./sections/StatelessSection";
import { ClientServerSection } from "./sections/ClientServerSection";
import { CacheableSection } from "./sections/CacheableSection";
import { LayeredSection } from "./sections/LayeredSection";
import { UniformInterfaceSection } from "./sections/UniformInterfaceSection";
import { CodeOnDemandSection } from "./sections/CodeOnDemandSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function RestPrincipiosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <IntroRestSection />
      <StatelessSection />
      <ClientServerSection />
      <CacheableSection />
      <LayeredSection />
      <UniformInterfaceSection />
      <CodeOnDemandSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
