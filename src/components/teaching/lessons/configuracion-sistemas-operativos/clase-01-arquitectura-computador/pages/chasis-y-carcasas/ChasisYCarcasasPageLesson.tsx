import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { ArquitecturaComputadorSection } from "../../sections/ArquitecturaComputadorSection";
import { ChasisCarcasasSection } from "../../sections/ChasisCarcasasSection";
import { RefrigeracionSection } from "../../sections/RefrigeracionSection";

type Props = { locale: string };

export default function ChasisYCarcasasPageLesson({ locale }: Props) {
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
      <ArquitecturaComputadorSection />
      <ChasisCarcasasSection />
      <RefrigeracionSection />
    </ClassPageLayout>
  );
}
