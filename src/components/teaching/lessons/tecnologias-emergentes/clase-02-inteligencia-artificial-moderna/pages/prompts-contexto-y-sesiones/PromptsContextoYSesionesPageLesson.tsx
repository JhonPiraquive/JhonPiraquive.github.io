import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MensajesYRolesSection } from "../../sections/MensajesYRolesSection";
import { SesionesSection } from "../../sections/SesionesSection";
import { VentanaDeContextoSection } from "../../sections/VentanaDeContextoSection";
import { MemoriaYRagSection } from "../../sections/MemoriaYRagSection";

type Props = { locale: string };

export default function PromptsContextoYSesionesPageLesson({ locale: _locale }: Props) {
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
      <MensajesYRolesSection />
      <SesionesSection />
      <VentanaDeContextoSection />
      <MemoriaYRagSection />
    </ClassPageLayout>
  );
}
