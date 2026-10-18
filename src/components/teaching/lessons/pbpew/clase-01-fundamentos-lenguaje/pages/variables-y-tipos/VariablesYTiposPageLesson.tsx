import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsUnaVariableSection } from "./sections/QueEsUnaVariableSection";
import { VarLetYConstSection } from "./sections/VarLetYConstSection";
import { TiposDeDatosPrincipalesSection } from "./sections/TiposDeDatosPrincipalesSection";

type Props = { locale: string };

export default function VariablesYTiposPageLesson({ locale: _locale }: Props) {
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
      <QueEsUnaVariableSection />
      <VarLetYConstSection />
      <TiposDeDatosPrincipalesSection />
    </ClassPageLayout>
  );
}
