export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">{"Recuerda el arco completo del relato:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Archivos planos → duplicidad e inconsistencia; dependencia física."}</li>
        <li>{"IMS / CODASYL → velocidad con navegación; poca independencia."}</li>
        <li>{"Codd 1970 → relaciones + independencia de datos (no SQL todavía)."}</li>
        <li>{"System R / INGRES / Oracle → SQL implementable y comercial."}</li>
        <li>{"Imperio relacional → estándar de industria + ER Chen."}</li>
        <li>{"NoSQL → escala y flexibilidad cuando el patrón lo pide."}</li>
        <li>{"Hoy → convergencia: cloud, NewSQL, vectores; elige por garantías, no por hype."}</li>
      </ol>
      <p className="my-4">
        {
          "La pregunta al cerrar: ¿qué problema resuelve cada pieza y qué garantías exige el dominio? Si respondes solo con “lo que usa Netflix”, saltas etapas del relato."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "clase-02 — Fundamentos, motores y estructura: de la historia al vocabulario operativo (BD vs SGBD, motores, tablas y campos)."
        }
      </p>
    </section>
  );
}
