import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_ALIASES } from "../../legacy-aliases";

type Props = { locale: string };

const TARGET = `/teaching/tecnologias-emergentes/${LEGACY_ALIASES["clase-01-fundamentos/objetos-arrays-y-modulos"]}`;

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
