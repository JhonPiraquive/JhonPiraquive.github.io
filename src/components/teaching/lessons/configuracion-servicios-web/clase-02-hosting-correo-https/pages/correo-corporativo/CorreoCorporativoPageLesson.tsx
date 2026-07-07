import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CorreoCorporativoSection } from "../../sections/CorreoCorporativoSection";
import { CuentasCorporativasSection } from "../../sections/CuentasCorporativasSection";

type Props = { locale: string };

export default function CorreoCorporativoPageLesson({ locale }: Props) {
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
      <CorreoCorporativoSection />
      <CuentasCorporativasSection />
    </ClassPageLayout>
  );
}
