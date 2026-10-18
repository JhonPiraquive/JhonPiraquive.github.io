import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HttpSection } from "./sections/HttpSection";
import { HttpsSection } from "./sections/HttpsSection";
import { SslTlsSection } from "./sections/SslTlsSection";
import { FlujoTlsSection } from "./sections/FlujoTlsSection";
import { ComparativaHttpHttpsSection } from "./sections/ComparativaHttpHttpsSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function ProtocolosSeguridadPageLesson({ locale: _locale }: Props) {
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
      <HttpSection />
      <HttpsSection />
      <SslTlsSection />
      <FlujoTlsSection />
      <ComparativaHttpHttpsSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
