import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "../../sections/ObjetivosSection";
import { HostingSection } from "../../sections/HostingSection";
import { PublicacionSitioSection } from "../../sections/PublicacionSitioSection";
import { LogsNginxPermisosSection } from "../../sections/LogsNginxPermisosSection";

type Props = { locale: string };

export default function HostingYPublicacionPageLesson({ locale }: Props) {
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
      <ObjetivosSection />
      <HostingSection />
      <PublicacionSitioSection />
      <LogsNginxPermisosSection />
    </ClassPageLayout>
  );
}
