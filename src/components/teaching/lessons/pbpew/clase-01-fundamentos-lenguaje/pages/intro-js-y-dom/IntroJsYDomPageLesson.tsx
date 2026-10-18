import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsJavascriptSection } from "./sections/QueEsJavascriptSection";
import { CaracteristicasPrincipalesSection } from "./sections/CaracteristicasPrincipalesSection";
import { ParaQueSeUsaSection } from "./sections/ParaQueSeUsaSection";
import { HistoriaBreveYVideoSection } from "./sections/HistoriaBreveYVideoSection";
import { QueEsElDomSection } from "./sections/QueEsElDomSection";

type Props = { locale: string };

export default function IntroJsYDomPageLesson({ locale: _locale }: Props) {
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
      <QueEsJavascriptSection />
      <CaracteristicasPrincipalesSection />
      <ParaQueSeUsaSection />
      <HistoriaBreveYVideoSection />
      <QueEsElDomSection />
    </ClassPageLayout>
  );
}
