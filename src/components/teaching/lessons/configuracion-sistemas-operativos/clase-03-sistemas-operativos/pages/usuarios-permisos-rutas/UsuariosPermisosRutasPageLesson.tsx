import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { UsuariosGruposSection } from "../../sections/UsuariosGruposSection";
import { PermisosRwxSection } from "../../sections/PermisosRwxSection";

type Props = { locale: string };

export default function UsuariosPermisosRutasPageLesson({ locale }: Props) {
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
      <UsuariosGruposSection />
      <PermisosRwxSection />
    </ClassPageLayout>
  );
}
