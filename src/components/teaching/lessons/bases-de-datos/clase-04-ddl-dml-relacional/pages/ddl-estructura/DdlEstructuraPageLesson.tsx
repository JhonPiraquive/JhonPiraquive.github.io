import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { IntroFlujoDdlDmlJoinSection } from "../../sections/IntroFlujoDdlDmlJoinSection";
import { DdlVsDmlSection } from "../../sections/DdlVsDmlSection";
import { QueEsDdlSection } from "../../sections/QueEsDdlSection";
import { CreateDropDatabaseSection } from "../../sections/CreateDropDatabaseSection";
import { CreateDropAlterTableSection } from "../../sections/CreateDropAlterTableSection";
import { AutoIncrementSection } from "../../sections/AutoIncrementSection";

type Props = { locale: string };

export default function DdlEstructuraPageLesson({ locale }: Props) {
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
      <IntroFlujoDdlDmlJoinSection />
      <DdlVsDmlSection />
      <QueEsDdlSection />
      <CreateDropDatabaseSection />
      <CreateDropAlterTableSection />
      <AutoIncrementSection />
    </ClassPageLayout>
  );
}
