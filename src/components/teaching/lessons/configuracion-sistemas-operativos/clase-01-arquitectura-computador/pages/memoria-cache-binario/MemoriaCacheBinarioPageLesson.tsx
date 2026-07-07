import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MemoriaCacheSection } from "../../sections/MemoriaCacheSection";
import { BinarioAsciiSection } from "../../sections/BinarioAsciiSection";
import { BusDatosSection } from "../../sections/BusDatosSection";

type Props = { locale: string };

export default function MemoriaCacheBinarioPageLesson({ locale }: Props) {
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
      <MemoriaCacheSection />
      <BinarioAsciiSection />
      <BusDatosSection />
    </ClassPageLayout>
  );
}
