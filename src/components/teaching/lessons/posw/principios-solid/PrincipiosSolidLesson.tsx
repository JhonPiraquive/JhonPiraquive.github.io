import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { IntroSolidSection } from "./sections/IntroSolidSection";
import { SrpSection } from "./sections/SrpSection";
import { OcpSection } from "./sections/OcpSection";
import { LspSection } from "./sections/LspSection";
import { IspSection } from "./sections/IspSection";
import { DipSection } from "./sections/DipSection";
import { ResumenSolidSection } from "./sections/ResumenSolidSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function PrincipiosSolidLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <IntroSolidSection />
      <SrpSection />
      <OcpSection />
      <LspSection />
      <IspSection />
      <DipSection />
      <ResumenSolidSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
