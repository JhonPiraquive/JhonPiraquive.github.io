import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { IntroCursoSection } from "./sections/IntroCursoSection";
import { CalendarioSection } from "./sections/CalendarioSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { NavegacionClasesSection } from "./sections/NavegacionClasesSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { CierreHubSection } from "./sections/CierreHubSection";

type Props = { locale: string };

export default function ConfiguracionServiciosWebLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <IntroCursoSection />
      <CalendarioSection />
      <PrerrequisitosSection />
      <NavegacionClasesSection />
      <ObjetivosSection />
      <CierreHubSection />
    </LessonLayout>
  );
}
