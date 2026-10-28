import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DefinicionSection } from "../../sections/DefinicionSection";
import { AtributosSection } from "../../sections/AtributosSection";
import { EmergenteVsModaSection } from "../../sections/EmergenteVsModaSection";

type Props = { locale: string };

export default function QueEsUnaTecnologiaEmergentePageLesson({ locale: _locale }: Props) {
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
      <DefinicionSection />
      <AtributosSection />
      <EmergenteVsModaSection />
    </ClassPageLayout>
  );
}
