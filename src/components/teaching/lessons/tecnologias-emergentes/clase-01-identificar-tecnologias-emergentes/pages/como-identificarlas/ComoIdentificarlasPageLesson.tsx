import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SenalesSection } from "../../sections/SenalesSection";
import { FuentesDeVigilanciaSection } from "../../sections/FuentesDeVigilanciaSection";
import { RadarTecnologicoSection } from "../../sections/RadarTecnologicoSection";
import { FichaDeAnalisisSection } from "../../sections/FichaDeAnalisisSection";

type Props = { locale: string };

export default function ComoIdentificarlasPageLesson({ locale: _locale }: Props) {
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
      <SenalesSection />
      <FuentesDeVigilanciaSection />
      <RadarTecnologicoSection />
      <FichaDeAnalisisSection />
    </ClassPageLayout>
  );
}
