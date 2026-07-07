import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueEsLaProgramacionSection } from "./sections/QueEsLaProgramacionSection";
import { QueEsUnObjetoSection } from "./sections/QueEsUnObjetoSection";
import { QueEsUnaClaseSection } from "./sections/QueEsUnaClaseSection";
import { QueEsUnaInstanciaSection } from "./sections/QueEsUnaInstanciaSection";
import { QueEsUnConstructorSection } from "./sections/QueEsUnConstructorSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function FundamentosLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueEsLaProgramacionSection />
      <QueEsUnObjetoSection />
      <QueEsUnaClaseSection />
      <QueEsUnaInstanciaSection />
      <QueEsUnConstructorSection />
      <CompruebaTuComprensionSection />
      <ResumenSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
