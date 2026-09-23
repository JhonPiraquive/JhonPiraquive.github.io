import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CompruebaTuComprensionSection as CompruebaAbstraccionSection } from "../abstraccion-clases-abstractas-interfaces/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaPolimorfismoSection } from "../polimorfismo/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaSolidSection } from "../solid-principios/sections/CompruebaTuComprensionSection";
import { CompruebaTuComprensionSection as CompruebaModularidadSection } from "../modularidad-cohesion-acoplamiento/sections/CompruebaTuComprensionSection";
import { PracticaGuiadaSection } from "../../sections/PracticaGuiadaSection";
import { RetoIntegradorSection } from "../../sections/RetoIntegradorSection";
import { MiniquizFinalSection } from "../../sections/MiniquizFinalSection";
import { CierreSection } from "../../sections/CierreSection";

type Props = { locale: string };

export default function PracticaYCierrePageLesson({ locale: _locale }: Props) {
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
      <CompruebaAbstraccionSection />
      <CompruebaPolimorfismoSection />
      <CompruebaSolidSection />
      <CompruebaModularidadSection />
      <PracticaGuiadaSection />
      <RetoIntegradorSection />
      <MiniquizFinalSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
