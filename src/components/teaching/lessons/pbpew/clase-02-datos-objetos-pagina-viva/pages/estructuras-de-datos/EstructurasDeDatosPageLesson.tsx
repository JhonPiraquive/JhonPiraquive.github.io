import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MapSection } from "./sections/MapSection";
import { SetSection } from "./sections/SetSection";
import { PilaSection } from "./sections/PilaSection";
import { ColaSection } from "./sections/ColaSection";
import { MapVsObjetoSection } from "./sections/MapVsObjetoSection";

type Props = { locale: string };

export default function EstructurasDeDatosPageLesson({ locale: _locale }: Props) {
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
      <MapSection />
      <SetSection />
      <PilaSection />
      <ColaSection />
      <MapVsObjetoSection />
    </ClassPageLayout>
  );
}
