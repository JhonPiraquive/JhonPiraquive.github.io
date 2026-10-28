import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PorQueJavascriptSection } from "../../sections/PorQueJavascriptSection";
import { HerramientasBaseSection } from "../../sections/HerramientasBaseSection";
import { QueEsUnaLibreriaSection } from "../../sections/QueEsUnaLibreriaSection";
import { NpmYPackageJsonSection } from "../../sections/NpmYPackageJsonSection";

type Props = { locale: string };

export default function EntornoYLibreriasPageLesson({ locale: _locale }: Props) {
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
      <PorQueJavascriptSection />
      <HerramientasBaseSection />
      <QueEsUnaLibreriaSection />
      <NpmYPackageJsonSection />
    </ClassPageLayout>
  );
}
