import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { CLASE_05, getClassFirstPageSlug } from "../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/bases-de-datos/${getClassFirstPageSlug(CLASE_05)}`;

export default function Clase05NormalizacionEsquemasHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
