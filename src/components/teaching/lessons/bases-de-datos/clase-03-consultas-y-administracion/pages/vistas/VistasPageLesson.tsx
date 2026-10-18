import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CreateViewSection } from "../../sections/CreateViewSection";
import { VistaProyeccionSeguraSection } from "../../sections/VistaProyeccionSeguraSection";

type Props = { locale: string };

export default function VistasPageLesson({ locale: _locale }: Props) {
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
      <CreateViewSection />
      <VistaProyeccionSeguraSection />
    </ClassPageLayout>
  );
}
