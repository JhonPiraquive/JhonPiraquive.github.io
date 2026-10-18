import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ProteccionDeDatosIdeaSection } from "./sections/ProteccionDeDatosIdeaSection";
import { CookiesSegurasLoEsencialSection } from "./sections/CookiesSegurasLoEsencialSection";
import { JwtTokenExplicadoSinSection } from "./sections/JwtTokenExplicadoSinSection";
import { EjemploRealHistoriaSection } from "./sections/EjemploRealHistoriaSection";
import { EjemploTecnicoQueDebeSection } from "./sections/EjemploTecnicoQueDebeSection";
import { DiagramaMermaidSection } from "./sections/DiagramaMermaidSection";

type Props = { locale: string };

export default function ProteccionDatosCookiesYJwtPageLesson({ locale: _locale }: Props) {
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
      <ProteccionDeDatosIdeaSection />
      <CookiesSegurasLoEsencialSection />
      <JwtTokenExplicadoSinSection />
      <EjemploRealHistoriaSection />
      <EjemploTecnicoQueDebeSection />
      <DiagramaMermaidSection />
    </ClassPageLayout>
  );
}
