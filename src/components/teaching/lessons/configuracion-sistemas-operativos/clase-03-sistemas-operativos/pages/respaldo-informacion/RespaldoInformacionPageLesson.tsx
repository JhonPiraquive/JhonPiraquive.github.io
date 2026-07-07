import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RespaldoNivelesSection } from "../../sections/RespaldoNivelesSection";

type Props = { locale: string };

export default function RespaldoInformacionPageLesson({ locale }: Props) {
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
      <RespaldoNivelesSection />
    </ClassPageLayout>
  );
}
