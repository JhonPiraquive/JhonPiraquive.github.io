import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { NubeSection } from "./sections/NubeSection";
import { ModeloClienteServidorRemotoSection } from "./sections/ModeloClienteServidorRemotoSection";
import { FtpSection } from "./sections/FtpSection";
import { SftpSection } from "./sections/SftpSection";
import { SshSection } from "./sections/SshSection";
import { DocumentacionConexionSshSection } from "./sections/DocumentacionConexionSshSection";
import { HerramientasGraficasSshSection } from "./sections/HerramientasGraficasSshSection";
import { ReconocimientoEntornoSection } from "./sections/ReconocimientoEntornoSection";
import { HerramientasAdminRemotaSection } from "./sections/HerramientasAdminRemotaSection";
import { PanelesAdministracionSection } from "./sections/PanelesAdministracionSection";
import { CasosRealesLatamSection } from "./sections/CasosRealesLatamSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { CierreSection } from "./sections/CierreSection";

type Props = { locale: string };

export default function Clase03AdministracionRemotaLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <NubeSection />
      <ModeloClienteServidorRemotoSection />
      <FtpSection />
      <SftpSection />
      <SshSection />
      <DocumentacionConexionSshSection />
      <HerramientasGraficasSshSection />
      <ReconocimientoEntornoSection />
      <HerramientasAdminRemotaSection />
      <PanelesAdministracionSection />
      <CasosRealesLatamSection />
      <RetoIntegradorSection />
      <CompruebaTuComprensionSection />
      <CierreSection />
    </LessonLayout>
  );
}
