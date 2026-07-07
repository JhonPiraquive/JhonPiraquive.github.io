import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { InstalacionSoSection } from "../../sections/InstalacionSoSection";
import { BiosParticionesSection } from "../../sections/BiosParticionesSection";

type Props = { locale: string };

export default function InstalacionConfiguracionPageLesson({ locale }: Props) {
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
      <InstalacionSoSection />
      <BiosParticionesSection />
    </ClassPageLayout>
  );
}
