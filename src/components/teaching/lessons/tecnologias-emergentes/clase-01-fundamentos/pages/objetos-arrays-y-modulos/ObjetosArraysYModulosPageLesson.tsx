import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetosYDesestructuracionSection } from "../../sections/ObjetosYDesestructuracionSection";
import { ArraysYSusMetodosSection } from "../../sections/ArraysYSusMetodosSection";
import { SpreadYModulosSection } from "../../sections/SpreadYModulosSection";

type Props = { locale: string };

export default function ObjetosArraysYModulosPageLesson({ locale: _locale }: Props) {
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
      <ObjetosYDesestructuracionSection />
      <ArraysYSusMetodosSection />
      <SpreadYModulosSection />
    </ClassPageLayout>
  );
}
