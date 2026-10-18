import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/posw/${LEGACY_CLASS_REDIRECTS["react"]}`;

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
