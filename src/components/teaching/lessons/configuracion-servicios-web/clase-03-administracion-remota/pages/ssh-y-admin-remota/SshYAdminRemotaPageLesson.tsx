import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SftpSection } from "../../sections/SftpSection";
import { SshSection } from "../../sections/SshSection";
import { DocumentacionConexionSshSection } from "../../sections/DocumentacionConexionSshSection";
import { HerramientasGraficasSshSection } from "../../sections/HerramientasGraficasSshSection";
import { ReconocimientoEntornoSection } from "../../sections/ReconocimientoEntornoSection";
import { HerramientasAdminRemotaSection } from "../../sections/HerramientasAdminRemotaSection";
import { PanelesAdministracionSection } from "../../sections/PanelesAdministracionSection";
import { CasosRealesLatamSection } from "../../sections/CasosRealesLatamSection";

type Props = { locale: string };

export default function SshYAdminRemotaPageLesson({ locale }: Props) {
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
      <SftpSection />
      <SshSection />
      <DocumentacionConexionSshSection />
      <HerramientasGraficasSshSection />
      <ReconocimientoEntornoSection />
      <HerramientasAdminRemotaSection />
      <PanelesAdministracionSection />
      <CasosRealesLatamSection />
    </ClassPageLayout>
  );
}
