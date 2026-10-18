import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"La historia motiva el problema; el SGBD es la solución operativa."}</li>
        <li>{"Motor, GUI y CLI son cosas distintas: el motor persiste los datos y los clientes los consultan."}</li>
        <li>{"Tabla, campo, registro y valor forman el abecedario del diseño."}</li>
        <li>{"Se diseña antes de crear: modelo conceptual, lógico y físico, y el ER decide dónde vive cada llave."}</li>
      </ol>
      <p className="my-4">{"La clase 2 convierte ese diseño en un esquema SQL: normalización, tipos, llaves, CREATE TABLE e INSERT."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/bases-de-datos/clase-02-del-diseno-al-esquema/redundancia-y-dependencia-funcional" className="clay-button">
          {"Continuar a la clase 2: del diseño al esquema en SQL"}
        </Link>
      </p>
    </section>
  );
}
