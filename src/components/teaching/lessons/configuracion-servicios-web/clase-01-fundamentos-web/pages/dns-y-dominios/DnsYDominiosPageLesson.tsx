import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { DnsSection } from "../../sections/DnsSection";
import { DominioSubdominioSection } from "../../sections/DominioSubdominioSection";
import { TiposRegistrosDnsSection } from "../../sections/TiposRegistrosDnsSection";

type Props = { locale: string };

export default function DnsYDominiosPageLesson({ locale }: Props) {
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
      <DnsSection />
      <DominioSubdominioSection />
      <TiposRegistrosDnsSection />
    </ClassPageLayout>
  );
}
