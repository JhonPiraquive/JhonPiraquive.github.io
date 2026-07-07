import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function XmlhttprequestLegadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"XMLHttpRequest (legado) y fetch moderno"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"XMLHttpRequest — solo referencia"}</h3>
      <p className="my-4">
        {
          "XMLHttpRequest (XHR) es la API antigua del navegador. Sigue en código legacy y algunas librerías, pero es más verbosa (`open`, `send`, callbacks `onload` / `onerror`)."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data.title);
  } else {
    console.error("HTTP", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Error de red");
};
xhr.send();`}
      />
      <CompareTable
        headers={["Criterio", "XMLHttpRequest", "fetch"]}
        rows={[
          ["Estilo", "Callbacks (onload, onerror)", "Promises / async/await"],
          ["API", "Verbosa (open, send)", "Más compacta"],
          ["Errores HTTP", "Revisar status manualmente", "Igual: revisar ok / status"],
          ["Uso en PBPEW", "Solo mención legado", "Estándar del curso"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"`fetch(url, options)` — API moderna"}</h3>
      <p className="my-4">
        {
          "`fetch` devuelve una Promise que se resuelve con un objeto `Response` — no con los datos ya parseados. Encaja con promesas y `async/await` de la lección 11."
        }
      </p>
      <p className="my-4 font-semibold">{"Flujo típico:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Llamar `fetch(url, options)`."}</li>
        <li>{"Comprobar `response.ok` o el rango de `status`."}</li>
        <li>{"Leer el cuerpo con `.json()`, `.text()` u otro método (una sola vez por `Response`)."}</li>
        <li>{"Usar los datos en la UI o en lógica."}</li>
      </ol>
      <p className="my-4">
        <strong>{"`response.ok`:"}</strong>
        {" atajo booleano — `true` si `status` está entre 200 y 299."}
      </p>
      <Callout title="Error frecuente — fetch no falla en 404/500">
        {
          "fetch solo rechaza la Promise en errores de red (sin conexión, CORS bloqueado, URL inválida). Un HTTP 404 o 500 sigue resolviendo; debes comprobar response.ok o response.status y lanzar error si hace falta."
        }
      </Callout>

      <h4 className="mt-4 mb-2 font-semibold">{"GET básico con `.then()`"}</h4>
      <CodeFiddle
        language="javascript"
        code={`fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    return response.json();
  })
  .then((todo) => {
    console.log(todo.title);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });`}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"GET con `async/await` (recomendado)"}</h4>
      <CodeFiddle
        language="javascript"
        code={`async function obtenerTodo(id) {
  try {
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/todos/\${id}\`
    );
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("No se pudo cargar el todo:", error);
    return null;
  }
}

obtenerTodo(1).then((todo) => {
  if (todo) console.log(todo.title);
});`}
      />
      <StepReveal
        title="Flujo fetch GET"
        steps={[
          {
            title: "1. Evento del usuario",
            content: "El usuario hace clic en un botón; se dispara un handler async.",
          },
          {
            title: "2. fetch sale del navegador",
            content: "await fetch(url) envía la petición HTTP GET al servidor.",
          },
          {
            title: "3. Servidor responde",
            content: "Llega un Response con status 200 y cuerpo JSON en texto.",
          },
          {
            title: "4. Validar y parsear",
            content: "Comprueba response.ok; luego const datos = await response.json().",
          },
          {
            title: "5. Actualizar DOM",
            content: "Pinta datos.title en un elemento sin recargar la página.",
          },
        ]}
      />
      <CodeChallenge
        title="Completa el código — GET con fetch"
        template={`async function getTodo(id) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  if (!res.{{ok}}) throw new Error("HTTP " + res.status);
  return await res.{{json}}();
}`}
        blanks={[
          { id: "ok", answer: "ok", placeholder: "atajo 200–299" },
          { id: "json", answer: "json", placeholder: "parsear JSON" },
        ]}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"POST con JSON y cabeceras"}</h4>
      <p className="my-4">
        {
          "GET pide datos (sin cuerpo en la práctica didáctica). POST envía datos al servidor con `body` y suele usar `Content-Type: application/json`."
        }
      </p>
      <CompareTable
        headers={["", "GET", "POST"]}
        rows={[
          ["Uso típico", "Leer / listar", "Crear / enviar formulario"],
          ["Cuerpo", "No (en práctica PBPEW)", "Sí (JSON.stringify)"],
          ["Cabecera frecuente", "Accept: application/json", "Content-Type: application/json"],
        ]}
      />
      <CodeFiddle
        language="http"
        code={`POST /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Content-Type: application/json

{"title":"Hola","body":"Mundo","userId":1}`}
      />
      <CodeFiddle
        language="javascript"
        code={`async function crearPost(titulo, cuerpo) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al crear: " + response.status);
  }

  const creado = await response.json();
  console.log("ID asignado (simulado):", creado.id);
  return creado;
}`}
      />
      <Callout title="POST sin stringify no funciona">
        {
          "Enviar body: { email, mensaje } sin JSON.stringify produce cuerpo inválido. Serializa con JSON.stringify y declara Content-Type: application/json."
        }
      </Callout>
      <CodeChallenge
        title="Completa el código — POST con JSON"
        template={`await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/{{json-type}}" },
  body: JSON.{{stringify}}({ nombre: "Ana" })
});`}
        blanks={[
          { id: "json-type", answer: "json", placeholder: "tipo MIME" },
          { id: "stringify", answer: "stringify", placeholder: "serializar" },
        ]}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"Manejo de errores"}</h4>
      <p className="my-4">{"Distingue tres tipos de fallo:"}</p>
      <CompareTable
        headers={["Tipo", "Cuándo ocurre", "Cómo detectarlo"]}
        rows={[
          ["Red / CORS", "Sin conexión, origen bloqueado", "`fetch` rechaza → `catch`"],
          ["HTTP no exitoso", "404, 401, 500", "`!response.ok` → lanzar error manual"],
          ["JSON inválido", "Cuerpo no es JSON válido", "`response.json()` lanza en `catch`"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  F["await fetch(url)"]
  F -->|rechaza| R["Error de red / CORS"]
  F -->|resuelve| OK{"response.ok?"}
  OK -->|No| H["throw Error HTTP status"]
  OK -->|Sí| J["await response.json()"]
  J -->|falla parse| P["Error JSON inválido"]
  J -->|ok| D["Usar datos"]
  R --> M["Mostrar mensaje al usuario"]
  H --> M
  P --> M`}
      />
      <CodeFiddle
        language="javascript"
        code={`const tituloEl = document.querySelector("#titulo-todo");
const boton = document.querySelector("#cargar");

boton.addEventListener("click", async () => {
  tituloEl.textContent = "Cargando…";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (!data.title) throw new Error("Respuesta sin título");
    tituloEl.textContent = data.title;
  } catch (e) {
    tituloEl.textContent = "Error al cargar datos";
    console.error(e);
  }
});`}
      />
      <PracticeExercise
        prompt="Explica por qué fetch puede resolver con response.status === 404 sin entrar en .catch() si no lanzas error manualmente."
        hints={["¿Qué rechaza fetch?", "¿Un 404 es una respuesta HTTP válida?"]}
        expectedKeywords={["red", "ok", "comprobar", "404"]}
        successMessage="Correcto. fetch solo rechaza en fallos de red; un 404 es una Response válida con ok === false. Hay que comprobar ok o status."
      />

      <h4 className="mt-4 mb-2 font-semibold">{"CORS y origen"}</h4>
      <p className="my-4">
        {
          "CORS (Cross-Origin Resource Sharing) es una política del navegador. Una página en `https://mi-sitio.com` solo puede leer la respuesta de `fetch` a otro origen (dominio o puerto distinto) si el servidor destino envía cabeceras que lo permiten (`Access-Control-Allow-Origin`)."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph mismo [Mismo origen — sin CORS extra]
    A["https://app.com"] --> B["https://app.com/api"]
  end
  subgraph cruzado [Origen cruzado — servidor debe permitir]
    C["https://app.com"] --> D["https://api.otro.com"]
    D --> H["Access-Control-Allow-Origin"]
  end`}
      />
      <Callout title="Demos locales">
        {
          "Abrir HTML como file:// o sin servidor estático puede romper peticiones. Usa npx serve, Live Server o similar. Para practicar, jsonplaceholder.typicode.com permite CORS."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Qué es CORS y quién debe permitirlo: el navegador del usuario, tu JavaScript o el servidor de la API?"
        hints={["¿Quién envía Access-Control-Allow-Origin?", "¿El navegador bloquea o el script?"]}
        expectedKeywords={["servidor", "origen", "navegador"]}
        successMessage="Correcto. CORS lo controla el navegador según cabeceras del servidor de la API; tu JS no puede saltárselo."
      />
    </section>
  );
}
