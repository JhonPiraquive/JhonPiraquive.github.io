import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ValidacionManualSection } from "../../sections/ValidacionManualSection";
import { ReactHookFormZodSection } from "../../sections/ReactHookFormZodSection";
import { ValidarEnElServidorSection } from "../../sections/ValidarEnElServidorSection";

type Props = { locale: string };

export default function FormulariosYValidacionPageLesson({ locale: _locale }: Props) {
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
      <ValidacionManualSection />
      <ReactHookFormZodSection />
      <ValidarEnElServidorSection />
    </ClassPageLayout>
  );
}
