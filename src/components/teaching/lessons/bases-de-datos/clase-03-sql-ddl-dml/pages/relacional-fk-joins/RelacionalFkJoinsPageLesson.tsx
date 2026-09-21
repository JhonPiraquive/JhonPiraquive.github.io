import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsBdRelacionalSection } from "../../sections/QueEsBdRelacionalSection";
import { RelacionalVsErSection } from "../../sections/RelacionalVsErSection";
import { CardinalidadPkFkSection } from "../../sections/CardinalidadPkFkSection";
import { CreateTableConstraintSection } from "../../sections/CreateTableConstraintSection";
import { JoinsSection } from "../../sections/JoinsSection";
import { ScriptErroresCasosSection } from "../../sections/ScriptErroresCasosSection";

type Props = { locale: string };

export default function RelacionalFkJoinsPageLesson({ locale }: Props) {
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
      <QueEsBdRelacionalSection />
      <RelacionalVsErSection />
      <CardinalidadPkFkSection />
      <CreateTableConstraintSection />
      <JoinsSection />
      <ScriptErroresCasosSection />
    </ClassPageLayout>
  );
}
