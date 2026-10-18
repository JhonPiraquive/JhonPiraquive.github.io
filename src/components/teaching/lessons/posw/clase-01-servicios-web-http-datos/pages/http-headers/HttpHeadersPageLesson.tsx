import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueSonHeadersSection } from "./sections/QueSonHeadersSection";
import { RequestHeadersSection } from "./sections/RequestHeadersSection";
import { ResponseHeadersSection } from "./sections/ResponseHeadersSection";
import { CorsSection } from "./sections/CorsSection";
import { SeguridadHeadersSection } from "./sections/SeguridadHeadersSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function HttpHeadersPageLesson({ locale: _locale }: Props) {
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
      <QueSonHeadersSection />
      <RequestHeadersSection />
      <ResponseHeadersSection />
      <CorsSection />
      <SeguridadHeadersSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
