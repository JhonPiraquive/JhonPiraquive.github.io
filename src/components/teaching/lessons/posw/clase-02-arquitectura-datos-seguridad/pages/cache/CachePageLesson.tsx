import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { QueEsCacheSection } from "./sections/QueEsCacheSection";
import { TiposCacheSection } from "./sections/TiposCacheSection";
import { TecnologiasCacheSection } from "./sections/TecnologiasCacheSection";
import { HeadersCacheSection } from "./sections/HeadersCacheSection";
import { CuandoUsarCacheSection } from "./sections/CuandoUsarCacheSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function CachePageLesson({ locale: _locale }: Props) {
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
      <QueEsCacheSection />
      <TiposCacheSection />
      <TecnologiasCacheSection />
      <HeadersCacheSection />
      <CuandoUsarCacheSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
