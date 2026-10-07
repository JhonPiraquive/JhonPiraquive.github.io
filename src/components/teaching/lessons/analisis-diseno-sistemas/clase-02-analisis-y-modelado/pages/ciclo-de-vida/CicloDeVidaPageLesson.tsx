import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsElCicloSection } from "../../sections/QueEsElCicloSection";
import { FasesDelCicloSection } from "../../sections/FasesDelCicloSection";

type Props = { locale: string };

export default function CicloDeVidaPageLesson({ locale: _locale }: Props) {
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
      <QueEsElCicloSection />
      <FasesDelCicloSection />
    </ClassPageLayout>
  );
}
