import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MetodoParaAprenderSection } from "../../sections/MetodoParaAprenderSection";
import { AprenderConIaSection } from "../../sections/AprenderConIaSection";
import { VigilanciaPersonalSection } from "../../sections/VigilanciaPersonalSection";

type Props = { locale: string };

export default function AprenderYMantenerseAlDiaPageLesson({ locale: _locale }: Props) {
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
      <MetodoParaAprenderSection />
      <AprenderConIaSection />
      <VigilanciaPersonalSection />
    </ClassPageLayout>
  );
}
