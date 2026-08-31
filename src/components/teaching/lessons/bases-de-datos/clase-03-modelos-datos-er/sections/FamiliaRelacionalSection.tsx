export function FamiliaRelacionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familia relacional (contexto de diseño)"}
      </h2>
      <p className="my-4">
        {
          "Tablas + PK/FK + SQL. Encaja cuando el diseño pide integridad, matrículas, facturas o inventario. El núcleo de Rutas Digitales es relacional: no recontamos aquí la historia de la clase 01."
        }
      </p>
      <p className="my-4">
        {
          "Al diseñar: entidades claras, cardinalidad honesta y FKs en el motor — no solo “en la app”."
        }
      </p>
    </section>
  );
}
