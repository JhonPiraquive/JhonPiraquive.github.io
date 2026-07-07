import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { BreakContinueSection } from "./sections/BreakContinueSection";
import { BucleDoWhileSection } from "./sections/BucleDoWhileSection";
import { BucleForSection } from "./sections/BucleForSection";
import { BucleWhileSection } from "./sections/BucleWhileSection";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { TryCatchSection } from "./sections/TryCatchSection";

type Props = { locale: string };

export default function BuclesYErroresLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <BucleForSection />
      <BucleWhileSection />
      <BucleDoWhileSection />
      <BreakContinueSection />
      <TryCatchSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
