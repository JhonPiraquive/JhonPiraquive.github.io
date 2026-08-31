import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { CLASE_03, getClassFirstPageSlug } from "../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/bases-de-datos/${getClassFirstPageSlug(CLASE_03)}`;

export default function Clase03ModelosDatosErHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
