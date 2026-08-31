export function RelacionalVsErSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Del dibujo ER a la consulta"}
      </h2>
      <p className="my-4">
        {
          "El ER describe entidades y relaciones; el SQL operativo usa tablas, PK/FK y JOIN. Vimos la FK en el diagrama; ahora escribes ON i.programa_id = p.id."
        }
      </p>
    </section>
  );
}
