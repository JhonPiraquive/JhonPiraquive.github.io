export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Un bucle repite un bloque; cada iteración debe avanzar hacia una salida clara."}
        </li>
        <li>
          <strong>{"for"}</strong>{" → rango o contador conocido · "}
          <strong>{"while"}</strong>{" → condición abierta · "}
          <strong>{"do...while"}</strong>{" → al menos una ejecución."}
        </li>
        <li>
          <strong>{"break"}</strong>{" termina el bucle · "}
          <strong>{"continue"}</strong>{" salta a la siguiente iteración."}
        </li>
        <li>
          {"Bucle infinito = condición que nunca cambia; puede congelar la pestaña — siempre incrementa contadores o usa break."}
        </li>
        <li>
          <strong>{"try/catch/finally"}</strong>{" atrapa errores runtime; "}
          <strong>{"throw new Error(...)"}</strong>{" valida reglas de negocio."}
        </li>
        <li>
          {
            "En PBPEW el foco es atrapar, loguear y no tumbar toda la UI; combina validación preventiva (if) con recuperación (catch)."
          }
        </li>
        <li>
          <strong>{"Preview lección 06:"}</strong>{" los bucles envolverán llamadas a funciones y callbacks (`repetir(n, fn)`)."}
        </li>
      </ul>
    </section>
  );
}
