import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ContenedoresSection } from "../../sections/ContenedoresSection";
import { DespliegueContenedorBasicoSection } from "../../sections/DespliegueContenedorBasicoSection";

type Props = { locale: string };

export default function ContenedoresDockerPageLesson({ locale }: Props) {
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
      <ContenedoresSection />
      <DespliegueContenedorBasicoSection />
    </ClassPageLayout>
  );
}
