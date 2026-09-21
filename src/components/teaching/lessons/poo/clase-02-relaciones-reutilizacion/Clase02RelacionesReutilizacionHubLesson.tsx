import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { CLASE_02, getClassFirstPageSlug } from "../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/poo/${getClassFirstPageSlug(CLASE_02)}`;

export default function Clase02RelacionesReutilizacionHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
