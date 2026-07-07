import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { IfElseIfElseSection } from "./sections/IfElseIfElseSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { OperadoresAritmeticosSection } from "./sections/OperadoresAritmeticosSection";
import { OperadoresLogicosSection } from "./sections/OperadoresLogicosSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { SwitchSection } from "./sections/SwitchSection";

type Props = { locale: string };

export default function OperadoresYDecisionesLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <OperadoresAritmeticosSection />
      <OperadoresLogicosSection />
      <IfElseIfElseSection />
      <SwitchSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
