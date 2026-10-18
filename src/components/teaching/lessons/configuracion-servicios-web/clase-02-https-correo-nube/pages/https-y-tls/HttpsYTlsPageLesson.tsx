import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { HttpHttpsSection } from "../../sections/HttpHttpsSection";
import { SslTlsSection } from "../../sections/SslTlsSection";
import { ProtocolosHttpsSection } from "../../sections/ProtocolosHttpsSection";

type Props = { locale: string };

export default function HttpsYTlsPageLesson({ locale }: Props) {
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
      <HttpHttpsSection />
      <SslTlsSection />
      <ProtocolosHttpsSection />
    </ClassPageLayout>
  );
}
