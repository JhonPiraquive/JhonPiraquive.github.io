import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RamSection } from "../../sections/RamSection";
import { RomBiosSection } from "../../sections/RomBiosSection";

type Props = { locale: string };

export default function MemoriaRamRomPageLesson({ locale }: Props) {
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
      <RamSection />
      <RomBiosSection />
    </ClassPageLayout>
  );
}
