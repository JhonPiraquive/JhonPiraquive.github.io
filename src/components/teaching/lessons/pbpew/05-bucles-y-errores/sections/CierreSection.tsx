export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de bucles y manejo de errores en JavaScript. Estas estructuras evitan duplicar código, controlan repeticiones con límites claros y permiten que un fallo puntual no deje la interfaz muerta."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"for"}</strong>{" cuando conoces el rango · "}
          <strong>{"while"}</strong>{" para condiciones abiertas · "}
          <strong>{"do...while"}</strong>{" cuando necesitas al menos una ejecución."}
        </li>
        <li>
          <strong>{"break"}</strong>{" sale del bucle · "}
          <strong>{"continue"}</strong>{" salta a la siguiente vuelta — no los intercambies."}
        </li>
        <li>{"Todo bucle necesita salida; los infinitos son incidentes reales en producción."}</li>
        <li>
          <strong>{"try/catch/finally"}</strong>{" + "}
          <strong>{"throw new Error(...)"}</strong>{" para validar y recuperarte sin detener todo el script."}
        </li>
        <li>
          {"Combina bucles con if y operadores de la lección 04 para filtrar (continue) o parar (break)."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "lección 06-funciones-y-callbacks — funciones llamadas desde bucles, callbacks y el patrón repetir(n, fn)."
        }
      </p>
    </section>
  );
}
