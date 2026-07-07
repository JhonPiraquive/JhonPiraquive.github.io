import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: mini panel de tareas remotas"}
      </h2>
      <p className="my-4 font-semibold">{"«Mini panel de tareas remotas»"}</p>
      <p className="my-4">{"En una página HTML con servidor local:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "UI: input `#nuevo-titulo`, botón «Añadir», lista `#lista-tareas`, zona `#estado` para mensajes (cargando / error)."
          }
        </li>
        <li>
          {
            "Cargar al inicio: `GET https://jsonplaceholder.typicode.com/todos?_limit=5` — pinta cada `title` en `#lista-tareas` como `<li>`. Muestra «Cargando…» mientras tanto."
          }
        </li>
        <li>
          {
            "Añadir: al clic, `POST` a `https://jsonplaceholder.typicode.com/todos` con `title` del input, `completed: false`, `userId: 1`; cabeceras y `JSON.stringify` correctos. Al éxito, añade el título a la lista y limpia el input."
          }
        </li>
        <li>
          {
            "Errores: si `!response.ok` o fallo de red, escribe en `#estado` un mensaje claro (no dejes la lista vacía sin explicación)."
          }
        </li>
        <li>
          {
            "Async: implementa con `async/await` y una función `async function cargarTareas()` reutilizable."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: GET y POST con `fetch`, comprobación de `ok`, JSON parseado, manejo de errores visible, DOM actualizado sin recargar. Sin jQuery ni librerías HTTP externas."
        }
      </p>
      <CodeFiddle
        language="html"
        title="Esqueleto HTML"
        code={`<input id="nuevo-titulo" type="text" placeholder="Nueva tarea" />
<button id="btn-anadir">Añadir</button>
<ul id="lista-tareas"></ul>
<p id="estado"></p>`}
      />
      <CodeFiddle
        language="javascript"
        title="Esqueleto — completa POST y listener"
        code={`async function cargarTareas() {
  const lista = document.querySelector("#lista-tareas");
  const estado = document.querySelector("#estado");
  lista.innerHTML = "";
  estado.textContent = "Cargando…";
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    if (!res.ok) throw new Error("HTTP " + res.status);
    const tareas = await res.json();
    estado.textContent = "";
    tareas.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.title;
      lista.appendChild(li);
    });
  } catch (e) {
    estado.textContent = "Error al cargar tareas";
    console.error(e);
  }
}

// Completa: listener en #btn-anadir con POST y actualización de lista`}
      />
      <PracticeExercise
        prompt="Implementa el reto «Mini panel de tareas remotas»: cargarTareas con GET, POST al añadir, mensajes en #estado y lista en DOM. Pega tu código o describe cómo manejas ok y errores."
        hints={[
          "cargarTareas() al cargar la página",
          "POST: method, headers Content-Type, body JSON.stringify",
          "if (!res.ok) throw antes de res.json()",
          "try/catch en ambas operaciones",
        ]}
        expectedKeywords={["fetch", "POST", "ok", "json"]}
        successMessage="Excelente. Has integrado GET, POST, validación HTTP, JSON y actualización del DOM sin recargar la página."
        rows={12}
      />
    </section>
  );
}
