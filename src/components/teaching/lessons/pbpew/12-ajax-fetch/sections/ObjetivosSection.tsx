export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Explicar"}</strong>
          {" qué es AJAX y por qué permite actualizar parte de la página sin recargarla completa."}
        </li>
        <li>
          <strong>{"Realizar"}</strong>
          {" peticiones HTTP con `fetch`, "}
          <strong>{"comprobando"}</strong>
          {" `response.ok` antes de parsear el cuerpo."}
        </li>
        <li>
          <strong>{"Leer"}</strong>
          {" respuestas JSON con `await response.json()` y "}
          <strong>{"enviar"}</strong>
          {" objetos en POST con `JSON.stringify` y cabecera `Content-Type: application/json`."}
        </li>
        <li>
          <strong>{"Distinguir"}</strong>
          {" errores de red, códigos HTTP no exitosos y JSON inválido, "}
          <strong>{"mostrando"}</strong>
          {" mensajes claros en la UI."}
        </li>
        <li>
          <strong>{"Integrar"}</strong>
          {" `fetch` con DOM y eventos (`async/await`, `try/catch`) para cargar y mostrar datos remotos."}
        </li>
        <li>
          <strong>{"Reconocer"}</strong>
          {" XMLHttpRequest como API legada y CORS como restricción del navegador entre orígenes distintos."}
        </li>
      </ul>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        <strong>{"Prerrequisitos:"}</strong>
      </p>
      <ul className="my-4 list-disc pl-6 text-sm text-[var(--color-neutral-mid)]">
        <li>
          <strong>{"Lección 07 (`07-arrays-json-objetos`):"}</strong>
          {" objetos literales, `JSON.stringify` y `JSON.parse`."}
        </li>
        <li>
          <strong>{"Lección 10 (`10-dom-y-eventos`):"}</strong>
          {" seleccionar nodos, `addEventListener`, actualizar `textContent`."}
        </li>
        <li>
          <strong>{"Lección 11 (`11-asincronia`):"}</strong>
          {" Promises, `.then()` / `.catch()`, `async` / `await`, `try/catch`."}
        </li>
        <li>{"Servidor local o extensión Live Server para evitar problemas con `file://` en demos de red."}</li>
        <li>
          {"Conexión a internet para practicar con "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            className="text-[var(--color-secondary)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"jsonplaceholder.typicode.com"}
          </a>
          .
        </li>
      </ul>
    </section>
  );
}
