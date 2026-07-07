import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { CierreSection } from "./sections/CierreSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { MiniquizSection } from "./sections/MiniquizSection";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { QueEsUnaVariableSection } from "./sections/QueEsUnaVariableSection";
import { ResumenSection } from "./sections/ResumenSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { TiposDeDatosPrincipalesSection } from "./sections/TiposDeDatosPrincipalesSection";
import { VarLetYConstSection } from "./sections/VarLetYConstSection";

type Props = { locale: string };

export default function VariablesYTiposLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <QueEsUnaVariableSection />
      <VarLetYConstSection />
      <TiposDeDatosPrincipalesSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
