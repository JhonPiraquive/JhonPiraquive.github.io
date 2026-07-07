import { LessonLayout } from "@/components/teaching/LessonLayout";
import { meta } from "./lesson-meta";
import { ObjetivosDelTemaSection } from "./sections/ObjetivosDelTemaSection";
import { QueSonHeadersSection } from "./sections/QueSonHeadersSection";
import { RequestHeadersSection } from "./sections/RequestHeadersSection";
import { ResponseHeadersSection } from "./sections/ResponseHeadersSection";
import { CorsSection } from "./sections/CorsSection";
import { SeguridadHeadersSection } from "./sections/SeguridadHeadersSection";
import { ResumenSection } from "./sections/ResumenSection";
import { CompruebaTuComprensionSection } from "./sections/CompruebaTuComprensionSection";
import { RetoIntegradorSection } from "./sections/RetoIntegradorSection";
import { CierreSection } from "./sections/CierreSection";
import { MiniquizFinalSection } from "./sections/MiniquizFinalSection";

type Props = { locale: string };

export default function HttpHeadersLesson({ locale }: Props) {
  return (
    <LessonLayout
      title={meta.title}
      track={meta.track}
      locale={locale}
      prev={meta.prev}
      next={meta.next}
    >
      <ObjetivosDelTemaSection />
      <QueSonHeadersSection />
      <RequestHeadersSection />
      <ResponseHeadersSection />
      <CorsSection />
      <SeguridadHeadersSection />
      <ResumenSection />
      <CompruebaTuComprensionSection />
      <RetoIntegradorSection />
      <CierreSection />
      <MiniquizFinalSection />
    </LessonLayout>
  );
}
