import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HorizonteSection } from "../../sections/HorizonteSection";
import { RutaDeAprendizajeSection } from "../../sections/RutaDeAprendizajeSection";
import { EjerciciosClase03Section } from "../../sections/EjerciciosClase03Section";
import { MiniquizSection } from "../../sections/MiniquizSection";
import { ExplorarMasSection } from "../../sections/ExplorarMasSection";

type Props = { locale: string };

export default function HorizonteYCierrePageLesson({ locale: _locale }: Props) {
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
      <HorizonteSection />
      <RutaDeAprendizajeSection />
      <EjerciciosClase03Section />
      <MiniquizSection />
      <ExplorarMasSection />
    </ClassPageLayout>
  );
}
