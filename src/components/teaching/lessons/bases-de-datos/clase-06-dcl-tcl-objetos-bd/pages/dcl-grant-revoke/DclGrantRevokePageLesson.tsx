import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsDclSection } from "../../sections/QueEsDclSection";
import { UsuariosRolesSection } from "../../sections/UsuariosRolesSection";
import { GrantSection } from "../../sections/GrantSection";
import { RevokeSection } from "../../sections/RevokeSection";

type Props = { locale: string };

export default function DclGrantRevokePageLesson({ locale: _locale }: Props) {
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
      <QueEsDclSection />
      <UsuariosRolesSection />
      <GrantSection />
      <RevokeSection />
    </ClassPageLayout>
  );
}
