import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { XamppSection } from "./sections/XamppSection";
import { HelloPhpSection } from "./sections/HelloPhpSection";
import { DockerConceptosSection } from "./sections/DockerConceptosSection";
import { DockerComandosSection } from "./sections/DockerComandosSection";
import { ComparativaSection } from "./sections/ComparativaSection";
import { ReactDockerSection } from "./sections/ReactDockerSection";

type Props = { locale: string };

export default function HerramientasDesarrolloPageLesson({ locale: _locale }: Props) {
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
      <XamppSection />
      <HelloPhpSection />
      <DockerConceptosSection />
      <DockerComandosSection />
      <ComparativaSection />
      <ReactDockerSection />
    </ClassPageLayout>
  );
}
