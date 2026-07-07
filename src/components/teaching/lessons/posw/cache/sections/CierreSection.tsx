export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado caché web: tipos, Redis cache-aside, headers HTTP y cuándo invalidar. La caché acelera pero exige disciplina en invalidación."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Mide el Hit Rate — sin métricas no sabes si el caché ayuda o solo complica."}</li>
        <li>{"Nunca cachees tokens ni datos de usuario en CDN pública sin private/no-store."}</li>
        <li>{"Invalida al escribir — TTL solo no basta para inventario o precios críticos."}</li>
        <li>{"Assets con hash → immutable — caché larga sin riesgo de versión vieja."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"rest-principios"}</code>
        {" — el constraint Cacheable en REST."}
      </p>
    </section>
  );
}
