export function CardinalidadPkFkSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Recordatorio breve: padres y tipos"}
      </h2>
      <p className="my-4">
        {
          "Al crear FK: primero la tabla padre; PK y FK del mismo tipo. El resto del diseño (cardinalidad 1:N) ya lo resolviste en clase 03."
        }
      </p>
    </section>
  );
}
