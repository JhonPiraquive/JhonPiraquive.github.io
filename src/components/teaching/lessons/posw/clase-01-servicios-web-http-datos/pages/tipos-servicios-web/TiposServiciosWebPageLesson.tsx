import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SoapSection } from "./sections/SoapSection";
import { RestSection } from "./sections/RestSection";
import { GraphqlSection } from "./sections/GraphqlSection";
import { GrpcWebsocketsSection } from "./sections/GrpcWebsocketsSection";
import { ComparativaTiposSection } from "./sections/ComparativaTiposSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function TiposServiciosWebPageLesson({ locale: _locale }: Props) {
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
      <SoapSection />
      <RestSection />
      <GraphqlSection />
      <GrpcWebsocketsSection />
      <ComparativaTiposSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
