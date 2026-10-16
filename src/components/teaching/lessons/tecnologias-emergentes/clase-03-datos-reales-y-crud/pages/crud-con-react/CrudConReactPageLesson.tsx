import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ListarDatosSection } from "../../sections/ListarDatosSection";
import { CrearYEditarSection } from "../../sections/CrearYEditarSection";
import { EliminarYNavegarSection } from "../../sections/EliminarYNavegarSection";

type Props = { locale: string };

export default function CrudConReactPageLesson({ locale: _locale }: Props) {
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
      <ListarDatosSection />
      <CrearYEditarSection />
      <EliminarYNavegarSection />
    </ClassPageLayout>
  );
}
