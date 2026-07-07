import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "../../sections/ObjetivosSection";
import { NubeSection } from "../../sections/NubeSection";
import { ModeloClienteServidorRemotoSection } from "../../sections/ModeloClienteServidorRemotoSection";

type Props = { locale: string };

export default function ComputacionEnNubePageLesson({ locale }: Props) {
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
      <NubeSection />
      <ModeloClienteServidorRemotoSection />
    </ClassPageLayout>
  );
}
