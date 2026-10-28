import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ArchivosDeInstruccionesSection } from "../../sections/ArchivosDeInstruccionesSection";
import { ComandosYSkillsSection } from "../../sections/ComandosYSkillsSection";
import { McpSection } from "../../sections/McpSection";
import { HooksYPluginsSection } from "../../sections/HooksYPluginsSection";

type Props = { locale: string };

export default function ExtenderUnAgentePageLesson({ locale: _locale }: Props) {
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
      <ArchivosDeInstruccionesSection />
      <ComandosYSkillsSection />
      <McpSection />
      <HooksYPluginsSection />
    </ClassPageLayout>
  );
}
