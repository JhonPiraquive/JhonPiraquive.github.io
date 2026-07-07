import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { FtpSection } from "../../sections/FtpSection";
import { ConfiguracionServidorFtpSection } from "../../sections/ConfiguracionServidorFtpSection";
import { ClientesFtpSection } from "../../sections/ClientesFtpSection";
import { TransferenciaArchivosSection } from "../../sections/TransferenciaArchivosSection";
import { AdministracionRemotaArchivosSection } from "../../sections/AdministracionRemotaArchivosSection";
import { ComparativaProtocolosTransferenciaSection } from "../../sections/ComparativaProtocolosTransferenciaSection";

type Props = { locale: string };

export default function TransferenciaArchivosPageLesson({ locale }: Props) {
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
      <FtpSection />
      <ConfiguracionServidorFtpSection />
      <ClientesFtpSection />
      <TransferenciaArchivosSection />
      <AdministracionRemotaArchivosSection />
      <ComparativaProtocolosTransferenciaSection />
    </ClassPageLayout>
  );
}
