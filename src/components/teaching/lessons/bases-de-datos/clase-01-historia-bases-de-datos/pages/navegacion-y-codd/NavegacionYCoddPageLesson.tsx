import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { NavegacionalSection } from "../../sections/NavegacionalSection";
import { ModeloRelacionalCoddSection } from "../../sections/ModeloRelacionalCoddSection";

type Props = { locale: string };

export default function NavegacionYCoddPageLesson({ locale }: Props) {
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
      <NavegacionalSection />
      <ModeloRelacionalCoddSection />
    </ClassPageLayout>
  );
}
