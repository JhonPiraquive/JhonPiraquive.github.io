export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"AJAX"}</strong>
          {
            " es el patrón de pedir datos en segundo plano y actualizar el DOM sin recarga completa; hoy las respuestas suelen ser JSON."
          }
        </li>
        <li>
          <strong>{"`fetch`"}</strong>
          {" devuelve una Promise con `Response`; comprueba "}
          <strong>{"`response.ok`"}</strong>
          {" antes de "}
          <strong>{"`await response.json()`"}</strong>
          .
        </li>
        <li>
          <strong>{"POST con JSON"}</strong>
          {" requiere `JSON.stringify` en `body` y cabecera "}
          <strong>{"`Content-Type: application/json`"}</strong>
          .
        </li>
        <li>
          <strong>{"Errores:"}</strong>
          {" red (catch), HTTP (`!ok`), parseo JSON (catch tras `.json()`). La UI debe mostrar mensaje claro."}
        </li>
        <li>
          <strong>{"XMLHttpRequest"}</strong>
          {" es legado; en proyectos nuevos usa "}
          <strong>{"fetch"}</strong>
          {" con `async/await`."}
        </li>
        <li>
          <strong>{"CORS"}</strong>
          {" lo resuelve el servidor de la API; usa servidor local y APIs públicas de práctica."}
        </li>
        <li>
          <strong>{"Cierre del track núcleo:"}</strong>
          {
            " ya puedes combinar DOM, eventos, asincronía y datos remotos — base para los proyectos PBPEW."
          }
        </li>
      </ul>
    </section>
  );
}
