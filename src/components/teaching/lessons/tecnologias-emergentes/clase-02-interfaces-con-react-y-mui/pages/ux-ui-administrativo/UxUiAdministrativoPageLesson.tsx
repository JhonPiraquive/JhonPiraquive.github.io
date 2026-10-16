import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PrincipiosUxSection } from "../../sections/PrincipiosUxSection";
import { EstadosDeInterfazSection } from "../../sections/EstadosDeInterfazSection";
import { AccesibilidadSection } from "../../sections/AccesibilidadSection";

type Props = { locale: string };

export default function UxUiAdministrativoPageLesson({ locale: _locale }: Props) {
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
      <PrincipiosUxSection />
      <EstadosDeInterfazSection />
      <AccesibilidadSection />
    </ClassPageLayout>
  );
}
