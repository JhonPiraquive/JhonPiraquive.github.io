import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { AdvertenciaUpdateDeleteSection } from "../../sections/AdvertenciaUpdateDeleteSection";
import { UpdateSection } from "../../sections/UpdateSection";
import { DeleteSection } from "../../sections/DeleteSection";

type Props = { locale: string };

export default function UpdateDeletePageLesson({ locale }: Props) {
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
      <AdvertenciaUpdateDeleteSection />
      <UpdateSection />
      <DeleteSection />
    </ClassPageLayout>
  );
}
