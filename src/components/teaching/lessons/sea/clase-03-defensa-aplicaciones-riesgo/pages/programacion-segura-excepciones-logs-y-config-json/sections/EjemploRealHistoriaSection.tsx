export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “El error que filtró todo”. En producción, una app muestra un stack trace completo cuando falla una consulta. Ese error incluye rutas del servidor y fragmentos de la consulta. Un atacante aprende la estructura interna y acelera ataques. Con manejo correcto, el usuario vería “Ocurrió un problema, intenta más tarde”, y el equipo vería el detalle en logs internos con request_id."}</p>
    </section>
  );
}
