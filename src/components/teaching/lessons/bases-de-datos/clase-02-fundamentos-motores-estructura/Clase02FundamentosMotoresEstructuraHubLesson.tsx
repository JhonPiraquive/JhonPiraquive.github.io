import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { CLASE_02, getClassFirstPageSlug } from "../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/bases-de-datos/${getClassFirstPageSlug(CLASE_02)}`;

export default function Clase02FundamentosMotoresEstructuraHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
