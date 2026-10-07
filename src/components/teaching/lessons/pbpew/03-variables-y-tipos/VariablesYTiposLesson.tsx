import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { QueEsUnaVariableSection } from "./sections/QueEsUnaVariableSection";
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
</LessonLayout>
  );
}
