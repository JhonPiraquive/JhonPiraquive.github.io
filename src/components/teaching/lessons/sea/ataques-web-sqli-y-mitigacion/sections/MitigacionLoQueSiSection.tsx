export function MitigacionLoQueSiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Mitigación (lo que sí funciona)"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Consultas parametrizadas / prepared statements (primera línea de defensa)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Validación de entrada por tipo, longitud y formato (defensa adicional)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Mínimo privilegio en la cuenta de BD (limita impacto)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Manejo seguro de errores (no filtrar detalles)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Monitoreo y alertas (patrones de intentos)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Pruebas y revisión de código en rutas críticas."}</li>
      </ul>
    </section>
  );
}
