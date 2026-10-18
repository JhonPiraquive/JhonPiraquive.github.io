import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/bases-de-datos/clase-02-del-diseno-al-esquema/dml-insert-select";

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
