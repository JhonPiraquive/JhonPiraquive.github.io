import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HerenciaQueEsYSection } from "./sections/HerenciaQueEsYSection";
import { CuandoNoUsarHerenciaSection } from "./sections/CuandoNoUsarHerenciaSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function HerenciaPageLesson({ locale: _locale }: Props) {
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
      <HerenciaQueEsYSection />
      <CuandoNoUsarHerenciaSection />
      <ResumenSection />
      <CierreSection />
    </ClassPageLayout>
  );
}
