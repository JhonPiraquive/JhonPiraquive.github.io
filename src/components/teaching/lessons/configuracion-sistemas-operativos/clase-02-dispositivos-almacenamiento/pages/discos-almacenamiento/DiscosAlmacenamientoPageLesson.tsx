import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DiscosAlmacenamientoSection } from "../../sections/DiscosAlmacenamientoSection";
import { DiscoOpticoSection } from "../../sections/DiscoOpticoSection";

type Props = { locale: string };

export default function DiscosAlmacenamientoPageLesson(_props: Props) {
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
      <DiscosAlmacenamientoSection />
      <DiscoOpticoSection />
    </ClassPageLayout>
  );
}
