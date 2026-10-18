import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroduccionEstadoSection } from "./sections/IntroduccionEstadoSection";
import { TodoListDemoSection } from "./sections/TodoListDemoSection";
import { ArquitecturaSection } from "./sections/ArquitecturaSection";
import { CasosRealesSection } from "./sections/CasosRealesSection";
import { ModeloDatosSection } from "./sections/ModeloDatosSection";
import { EstructuraHtmlSection } from "./sections/EstructuraHtmlSection";
import { FormularioYEstadoSection } from "./sections/FormularioYEstadoSection";
import { RenderYDelegacionSection } from "./sections/RenderYDelegacionSection";
import { FiltrosSection } from "./sections/FiltrosSection";
import { PersistenciaOpcionalSection } from "./sections/PersistenciaOpcionalSection";
import { PuenteApiSection } from "./sections/PuenteApiSection";

type Props = { locale: string };

export default function TodoListPageLesson({ locale: _locale }: Props) {
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
    </ClassPageLayout>
  );
}
