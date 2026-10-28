import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ClienteServidorSection } from "../../sections/ClienteServidorSection";
import { MetodosYEstadosHttpSection } from "../../sections/MetodosYEstadosHttpSection";
import { ProbarApisSection } from "../../sections/ProbarApisSection";

type Props = { locale: string };

export default function HttpYApisPageLesson({ locale: _locale }: Props) {
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
      <ClienteServidorSection />
      <MetodosYEstadosHttpSection />
      <ProbarApisSection />
    </ClassPageLayout>
  );
}
