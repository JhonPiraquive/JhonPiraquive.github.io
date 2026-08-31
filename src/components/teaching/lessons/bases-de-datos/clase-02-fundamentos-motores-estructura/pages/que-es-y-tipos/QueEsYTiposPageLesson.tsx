import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroMapaOperativoSection } from "../../sections/IntroMapaOperativoSection";
import { QueEsBdSection } from "../../sections/QueEsBdSection";
import { SgbdSection } from "../../sections/SgbdSection";
import { RelacionalesSection } from "../../sections/RelacionalesSection";
import { NosqlTiposSection } from "../../sections/NosqlTiposSection";

type Props = { locale: string };

export default function QueEsYTiposPageLesson({ locale }: Props) {
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
      <IntroMapaOperativoSection />
      <QueEsBdSection />
      <SgbdSection />
      <RelacionalesSection />
      <NosqlTiposSection />
    </ClassPageLayout>
  );
}
