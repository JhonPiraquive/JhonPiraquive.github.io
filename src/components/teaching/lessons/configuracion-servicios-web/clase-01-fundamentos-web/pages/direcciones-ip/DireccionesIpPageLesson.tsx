import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { Ipv4Section } from "../../sections/Ipv4Section";
import { Ipv6Section } from "../../sections/Ipv6Section";

type Props = { locale: string };

export default function DireccionesIpPageLesson({ locale }: Props) {
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
      <Ipv4Section />
      <Ipv6Section />
    </ClassPageLayout>
  );
}
