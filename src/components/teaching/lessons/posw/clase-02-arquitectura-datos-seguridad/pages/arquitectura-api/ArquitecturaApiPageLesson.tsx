import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RestArquitecturaSection } from "./sections/RestArquitecturaSection";
import { SoapArquitecturaSection } from "./sections/SoapArquitecturaSection";
import { GraphqlArquitecturaSection } from "./sections/GraphqlArquitecturaSection";
import { GrpcArquitecturaSection } from "./sections/GrpcArquitecturaSection";
import { PatronesSection } from "./sections/PatronesSection";
import { ComparativaSection } from "./sections/ComparativaSection";

type Props = { locale: string };

export default function ArquitecturaApiPageLesson({ locale: _locale }: Props) {
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
      <RestArquitecturaSection />
      <SoapArquitecturaSection />
      <GraphqlArquitecturaSection />
      <GrpcArquitecturaSection />
      <PatronesSection />
      <ComparativaSection />
    </ClassPageLayout>
  );
}
