export function PrimaryKeyPkSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Llave primaria (PK)"}
      </h2>
      <p className="my-4">
        {
          "Identifica de forma única cada fila. Debe ser estable: no uses el nombre del programa como PK si puede cambiar; usa id subrogado y UNIQUE de negocio aparte."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Una PK por tabla (simple o compuesta)."}</li>
        <li>{"No reciclar IDs si el negocio exige historial."}</li>
        <li>{"Toda tabla del diseño relacional necesita identificación clara."}</li>
      </ul>
    </section>
  );
}
