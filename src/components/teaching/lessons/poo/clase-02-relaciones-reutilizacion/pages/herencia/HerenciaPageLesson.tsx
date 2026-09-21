import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { HerenciaQueEsYSection } from "./sections/HerenciaQueEsYSection";
import { CuandoNoUsarHerenciaSection } from "./sections/CuandoNoUsarHerenciaSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function HerenciaPageLesson({ locale: _locale }: Props) {
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
      <ObjetivosDelTemaSection />
      <HerenciaQueEsYSection />
      <CuandoNoUsarHerenciaSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </ClassPageLayout>
  );
}
