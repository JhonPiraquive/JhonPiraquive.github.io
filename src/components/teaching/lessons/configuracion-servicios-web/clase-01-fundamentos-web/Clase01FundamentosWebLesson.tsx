import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosSection } from "./sections/ObjetivosSection";
import { NavegadoresWebSection } from "./sections/NavegadoresWebSection";
import { Ipv4Section } from "./sections/Ipv4Section";
import { Ipv6Section } from "./sections/Ipv6Section";
import { DnsSection } from "./sections/DnsSection";
import { DominioSubdominioSection } from "./sections/DominioSubdominioSection";
import { ConfigurarDominioSection } from "./sections/ConfigurarDominioSection";
import { DnsHerramientasSection } from "./sections/DnsHerramientasSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function Clase01FundamentosWebLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosSection />
      <NavegadoresWebSection />
      <Ipv4Section />
      <Ipv6Section />
      <DnsSection />
      <DominioSubdominioSection />
      <ConfigurarDominioSection />
      <DnsHerramientasSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
