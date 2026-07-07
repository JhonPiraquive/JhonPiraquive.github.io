import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ConsolaLinuxSection } from "../../sections/ConsolaLinuxSection";
import { ConsolaWindowsSection } from "../../sections/ConsolaWindowsSection";
import { RutasSection } from "../../sections/RutasSection";

type Props = { locale: string };

export default function ConsolaComandosPageLesson({ locale }: Props) {
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
      <ConsolaLinuxSection />
      <ConsolaWindowsSection />
      <RutasSection />
    </ClassPageLayout>
  );
}
