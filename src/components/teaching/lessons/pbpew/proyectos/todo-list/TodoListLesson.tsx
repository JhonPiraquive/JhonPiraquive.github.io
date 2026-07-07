import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ArquitecturaSection } from "./sections/ArquitecturaSection";
import { CasosRealesSection } from "./sections/CasosRealesSection";
import { CierreSection } from "./sections/CierreSection";
import { EstructuraHtmlSection } from "./sections/EstructuraHtmlSection";
import { FiltrosSection } from "./sections/FiltrosSection";
import { FormularioYEstadoSection } from "./sections/FormularioYEstadoSection";
import { IntroduccionEstadoSection } from "./sections/IntroduccionEstadoSection";
import { ModeloDatosSection } from "./sections/ModeloDatosSection";
import { ObjetivosAprendizajeSection } from "./sections/ObjetivosAprendizajeSection";
import { PersistenciaOpcionalSection } from "./sections/PersistenciaOpcionalSection";
import { PrerrequisitosSection } from "./sections/PrerrequisitosSection";
import { PuenteApiSection } from "./sections/PuenteApiSection";
import { RenderYDelegacionSection } from "./sections/RenderYDelegacionSection";
import { RetoSection } from "./sections/RetoSection";
import { TodoListDemoSection } from "./sections/TodoListDemoSection";

type Props = { locale: string };

export default function TodoListLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosAprendizajeSection />
      <PrerrequisitosSection />
      <IntroduccionEstadoSection />
      <TodoListDemoSection />
      <ArquitecturaSection />
      <CasosRealesSection />
      <ModeloDatosSection />
      <EstructuraHtmlSection />
      <FormularioYEstadoSection />
      <RenderYDelegacionSection />
      <FiltrosSection />
      <PersistenciaOpcionalSection />
      <PuenteApiSection />
      <RetoSection />
      <CierreSection />
    </LessonLayout>
  );
}
