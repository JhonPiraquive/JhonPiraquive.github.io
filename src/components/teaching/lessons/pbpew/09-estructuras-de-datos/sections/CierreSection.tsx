export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de `Map`, `Set`, pila LIFO y cola FIFO en JavaScript. Estas estructuras amplían arrays y objetos de la lección 7 y conectan con eventos y callbacks de la lección 10."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`Map`"}</strong>
          {" — pares clave-valor con API `.set`/`.get`; claves de cualquier tipo; `.size`."}
        </li>
        <li>
          <strong>{"`Set`"}</strong>
          {" — valores únicos; `[...new Set(arr)]` elimina duplicados."}
        </li>
        <li>
          <strong>{"Pila LIFO"}</strong>
          {" — `push`/`pop`; último en entrar, primero en salir."}
        </li>
        <li>
          <strong>{"Cola FIFO"}</strong>
          {" — `push`/`shift`; primero en entrar, primero en salir."}
        </li>
        <li>
          <strong>{"Objeto vs Map"}</strong>
          {" — JSON fijo vs caché dinámica; no mezcles APIs ni patrones en la misma estructura sin convención clara."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "lección 10-dom-y-eventos — colas de eventos del navegador, listeners y callbacks en el DOM."
        }
      </p>
    </section>
  );
}
