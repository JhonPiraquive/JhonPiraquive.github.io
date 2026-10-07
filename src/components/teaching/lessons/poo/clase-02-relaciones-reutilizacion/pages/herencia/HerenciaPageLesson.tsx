import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HerenciaQueEsYSection } from "./sections/HerenciaQueEsYSection";
import { CuandoNoUsarHerenciaSection } from "./sections/CuandoNoUsarHerenciaSection";
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
</ClassPageLayout>
  );
}
