import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsClienteServidorSection } from "./sections/QueEsClienteServidorSection";
import { FlujoHttpSection } from "./sections/FlujoHttpSection";
import { ArquitecturasSection } from "./sections/ArquitecturasSection";
import { VariantesSection } from "./sections/VariantesSection";
import { EjemplosRealesSection } from "./sections/EjemplosRealesSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function ModeloClienteServidorPageLesson({ locale: _locale }: Props) {
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
      <QueEsClienteServidorSection />
      <FlujoHttpSection />
      <ArquitecturasSection />
      <VariantesSection />
      <EjemplosRealesSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
