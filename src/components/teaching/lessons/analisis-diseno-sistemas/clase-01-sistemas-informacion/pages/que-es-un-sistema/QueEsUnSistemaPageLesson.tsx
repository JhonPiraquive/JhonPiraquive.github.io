import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DefinicionSistemaSection } from "../../sections/DefinicionSistemaSection";
import { EntradaProcesoSalidaSection } from "../../sections/EntradaProcesoSalidaSection";
import { ElementosSistemaSection } from "../../sections/ElementosSistemaSection";

type Props = { locale: string };

export default function QueEsUnSistemaPageLesson({ locale: _locale }: Props) {
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
      <DefinicionSistemaSection />
      <EntradaProcesoSalidaSection />
      <ElementosSistemaSection />
    </ClassPageLayout>
  );
}
