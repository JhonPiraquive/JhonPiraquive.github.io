import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function QueEsAjaxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es AJAX?"}</h2>
      <p className="my-4">
        <strong>{"AJAX"}</strong>
        {
          " (Asynchronous JavaScript And XML) es un patrón, no una librería: usar JavaScript para enviar peticiones HTTP en segundo plano y actualizar solo la zona del DOM que hace falta, sin recargar toda la página. El nombre menciona XML por historia; hoy casi todo es JSON."
        }
      </p>
      <p className="my-4">{"Una petición HTTP en el navegador incluye:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"URL"}</strong>
          {" del recurso."}
        </li>
        <li>
          <strong>{"Método:"}</strong>
          {" `GET` (leer), `POST` (enviar/crear), etc."}
        </li>
        <li>
          <strong>{"Cabeceras (`headers`):"}</strong>
          {" metadatos como `Content-Type` o `Accept`."}
        </li>
        <li>
          <strong>{"Cuerpo (`body`):"}</strong>
          {" en `POST`/`PUT`, los datos enviados (texto o JSON serializado)."}
        </li>
      </ul>
      <p className="my-4">
        {
          "El servidor responde con un código de estado (`200`, `404`, `500`…) y un cuerpo (JSON, HTML, texto)."
        }
      </p>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant UI as Página / DOM
  participant JS as JavaScript
  participant API as Servidor API

  U->>UI: Clic "Cargar datos"
  UI->>JS: handler async
  JS->>API: fetch GET /todos/1
  API-->>JS: 200 + JSON
  JS->>JS: response.ok + response.json()
  JS->>UI: actualiza #titulo
  UI-->>U: ve título sin recargar`}
      />
      <Callout title="AJAX ≠ fetch">
        {
          "AJAX es el enfoque (datos en segundo plano + actualización parcial). fetch y XMLHttpRequest son herramientas para implementarlo. En código nuevo del curso: usar fetch."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Por qué AJAX mejoró la experiencia frente a recargar la página entera al enviar un formulario?"
        hints={["Piensa en qué parte de la pantalla cambia", "¿Qué percibe el usuario: parpadeo o fluidez?"]}
        expectedKeywords={["actualizar", "recargar", "parte", "rápido"]}
        successMessage="Correcto. Solo se actualiza la zona necesaria; menos parpadeo y sensación de mayor velocidad."
      />
    </section>
  );
}
