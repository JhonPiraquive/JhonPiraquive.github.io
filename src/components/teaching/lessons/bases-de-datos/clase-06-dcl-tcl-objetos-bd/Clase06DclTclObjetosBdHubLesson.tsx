import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { CLASE_06, getClassFirstPageSlug } from "../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/bases-de-datos/${getClassFirstPageSlug(CLASE_06)}`;

export default function Clase06DclTclObjetosBdHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
