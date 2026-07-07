export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Una "}
          <strong>{"estructura de datos"}</strong>
          {" organiza información; en esta lección: `Map`, `Set` y patrones "}
          <strong>{"pila/cola"}</strong>
          {" sobre arrays."}
        </li>
        <li>
          <strong>{"`Map`:"}</strong>
          {" pares clave-valor con `.set`/`.get`; claves de cualquier tipo; `.size`; iterar con `for...of` o `.forEach`, no `for...in`."}
        </li>
        <li>
          <strong>{"`Set`:"}</strong>
          {" valores únicos con `.add`/`.has`; eliminar duplicados con `[...new Set(arr)]`; comparación con `===`."}
        </li>
        <li>
          <strong>{"Pila LIFO:"}</strong>
          {" `push` + `pop` — último en entrar, primero en salir (deshacer, historial)."}
        </li>
        <li>
          <strong>{"Cola FIFO:"}</strong>
          {" `push` + `shift` — primero en entrar, primero en salir (turnos, tickets)."}
        </li>
        <li>
          <strong>{"Objeto vs Map:"}</strong>
          {" objeto para JSON y esquemas fijos; `Map` para cachés dinámicas y claves no string."}
        </li>
        <li>
          <strong>{"Preview lección 10:"}</strong>
          {" colas de eventos del DOM y callbacks encajan con FIFO; historial con pila LIFO."}
        </li>
      </ul>
    </section>
  );
}
