import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { UseEffectSection } from "../../sections/UseEffectSection";
import { HooksPropiosSection } from "../../sections/HooksPropiosSection";
import { ContextoSection } from "../../sections/ContextoSection";

type Props = { locale: string };

export default function EfectosYHooksPropiosPageLesson({ locale: _locale }: Props) {
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
      <UseEffectSection />
      <HooksPropiosSection />
      <ContextoSection />
    </ClassPageLayout>
  );
}
