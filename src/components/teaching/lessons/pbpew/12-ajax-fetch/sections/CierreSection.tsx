export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado la última lección núcleo del track Programación básica para entornos web (PBPEW): AJAX y fetch. Unes lo aprendido en DOM y eventos (lección 10), asincronía (lección 11) y JSON (lección 7) para hablar con APIs reales desde el navegador."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"AJAX"}</strong>
          {" actualiza solo lo necesario; "}
          <strong>{"fetch"}</strong>
          {" es la API estándar del curso."}
        </li>
        <li>
          <strong>{"`response.ok`"}</strong>
          {" y "}
          <strong>{"`await response.json()`"}</strong>
          {" son obligatorios en el flujo mental; no asumas que un 404 entra en `catch` solo."}
        </li>
        <li>
          <strong>{"POST"}</strong>
          {" exige serialización y cabeceras coherentes con el servidor."}
        </li>
        <li>
          <strong>{"Errores visibles"}</strong>
          {" en la UI evitan pantallas en blanco o «undefined» en producción."}
        </li>
        <li>
          <strong>{"CORS"}</strong>
          {" y "}
          <strong>{"servidor local"}</strong>
          {" son parte del entorno de desarrollo front, no detalles opcionales."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "proyectos del track Programación básica para entornos web (PBPEW) (calculadora, todo-list, piedra-papel-tijera, ajedrez) — aplicarás DOM, eventos, asincronía y fetch en escenarios completos."
        }
      </p>
    </section>
  );
}
