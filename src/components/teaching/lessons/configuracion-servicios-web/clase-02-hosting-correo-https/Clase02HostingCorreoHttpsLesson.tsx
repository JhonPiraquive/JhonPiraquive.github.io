import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { HostingSection } from "./sections/HostingSection";
import { PublicacionSitioSection } from "./sections/PublicacionSitioSection";
import { LogsNginxPermisosSection } from "./sections/LogsNginxPermisosSection";
import { HttpHttpsSection } from "./sections/HttpHttpsSection";
import { SslTlsSection } from "./sections/SslTlsSection";
import { ProtocolosHttpsSection } from "./sections/ProtocolosHttpsSection";
import { CorreoCorporativoSection } from "./sections/CorreoCorporativoSection";
import { CuentasCorporativasSection } from "./sections/CuentasCorporativasSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizSection } from "./sections/MiniquizSection";

type Props = { locale: string };

export default function Clase02HostingCorreoHttpsLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <HostingSection />
      <PublicacionSitioSection />
      <LogsNginxPermisosSection />
      <HttpHttpsSection />
      <SslTlsSection />
      <ProtocolosHttpsSection />
      <CorreoCorporativoSection />
      <CuentasCorporativasSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizSection />
    </LessonLayout>
  );
}
