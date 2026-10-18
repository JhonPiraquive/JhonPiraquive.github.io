import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/pbpew/${LEGACY_CLASS_REDIRECTS["03-variables-y-tipos"]}`;

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
