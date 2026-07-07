import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDeAprendizajeSection } from "./sections/ObjetivosDeAprendizajeSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { ProteccionDeDatosIdeaSection } from "./sections/ProteccionDeDatosIdeaSection";
import { CookiesSegurasLoEsencialSection } from "./sections/CookiesSegurasLoEsencialSection";
import { JwtTokenExplicadoSinSection } from "./sections/JwtTokenExplicadoSinSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueDebeSection } from "./sections/EjemploTecnicoQueDebeSection";
import { CasoInteractivoSection } from "./sections/CasoInteractivoSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";
import { RetoInteractivoSinCodigoSection } from "./sections/RetoInteractivoSinCodigoSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function ProteccionDatosCookiesYJwtLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDeAprendizajeSection />
      <PrerrequisitosSection />
      <ProteccionDeDatosIdeaSection />
      <CookiesSegurasLoEsencialSection />
      <JwtTokenExplicadoSinSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueDebeSection />
      <CasoInteractivoSection />
      <DiagramaMermaidSection />
      <RetoInteractivoSinCodigoSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
