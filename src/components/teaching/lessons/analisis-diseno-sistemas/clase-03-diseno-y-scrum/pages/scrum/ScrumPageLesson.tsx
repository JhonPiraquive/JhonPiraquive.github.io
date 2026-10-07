import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MarcoYRolesScrumSection } from "../../sections/MarcoYRolesScrumSection";
import { EventosScrumSection } from "../../sections/EventosScrumSection";
import { ArtefactosEHistoriasSection } from "../../sections/ArtefactosEHistoriasSection";

type Props = { locale: string };

export default function ScrumPageLesson({ locale: _locale }: Props) {
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
      <MarcoYRolesScrumSection />
      <EventosScrumSection />
      <ArtefactosEHistoriasSection />
    </ClassPageLayout>
  );
}
