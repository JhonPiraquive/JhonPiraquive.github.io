import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { RutasBasicasSection } from "../../sections/RutasBasicasSection";
import { LayoutsYAnidadasSection } from "../../sections/LayoutsYAnidadasSection";
import { NavegacionYParametrosSection } from "../../sections/NavegacionYParametrosSection";

type Props = { locale: string };

export default function ReactRouterPageLesson({ locale: _locale }: Props) {
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
      <RutasBasicasSection />
      <LayoutsYAnidadasSection />
      <NavegacionYParametrosSection />
    </ClassPageLayout>
  );
}
