import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ConfigurarDominioSection } from "../../sections/ConfigurarDominioSection";
import { DnsHerramientasSection } from "../../sections/DnsHerramientasSection";

type Props = { locale: string };

export default function ConfiguracionDnsPageLesson({ locale }: Props) {
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
      <ConfigurarDominioSection />
      <DnsHerramientasSection />
    </ClassPageLayout>
  );
}
