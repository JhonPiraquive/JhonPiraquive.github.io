import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function FetchEnLaPracticaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">fetch: hacer las peticiones</h2>
      <p className="my-4">
        <code>fetch</code> es la función que el navegador trae incorporada para hacer peticiones HTTP. No necesitas instalar
        nada. Recibe la dirección y, opcionalmente, un objeto con el método, las cabeceras y el cuerpo. Devuelve una
        promesa, así que lo usas con <code>await</code>.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un GET paso a paso</h3>
      <CodeFiddle
        language="javascript"
        title="Leer la lista de materias"
        code={`async function obtenerMaterias() {
  const respuesta = await fetch("http://localhost:3001/materias");   // 1. enviar la petición

  if (!respuesta.ok) {                                                  // 2. revisar el estado HTTP
    throw new Error(\`El servidor respondió \${respuesta.status}\`);
  }

  const datos = await respuesta.json();                                 // 3. convertir el cuerpo de JSON a objeto
  return datos;
}`}
      />
      <Callout title="La trampa más importante de fetch" variant="callout-danger">
        <p className="mb-0">
          <code>fetch</code> solo rechaza la promesa cuando falla la red (no hay conexión, el servidor está apagado). Si el
          servidor responde 404 o 500, la promesa <strong>se cumple</strong> normalmente. Por eso siempre debes revisar{" "}
          <code>respuesta.ok</code> (verdadero para códigos 200 a 299) y lanzar tú el error. Sin esa revisión, tu código
          tratará un error del servidor como si fueran datos válidos.
        </p>
      </Callout>
      <p className="my-4">
        Fíjate también que son <strong>dos esperas</strong>: una para recibir la respuesta y otra para leer su cuerpo con{" "}
        <code>.json()</code>, porque el cuerpo puede llegar por partes.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">POST, PUT y DELETE</h3>
      <CodeFiddle
        language="javascript"
        title="Crear, actualizar y eliminar"
        code={`const RUTA = "http://localhost:3001/materias";

// Crear
async function crearMateria(materia) {
  const respuesta = await fetch(RUTA, {
    method: "POST",
    headers: { "Content-Type": "application/json" },   // avisa que el cuerpo es JSON
    body: JSON.stringify(materia),                      // el objeto se convierte a texto
  });
  if (!respuesta.ok) throw new Error(\`No se pudo crear (\${respuesta.status})\`);
  return respuesta.json();
}

// Actualizar
async function actualizarMateria(id, materia) {
  const respuesta = await fetch(\`\${RUTA}/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(materia),
  });
  if (!respuesta.ok) throw new Error(\`No se pudo actualizar (\${respuesta.status})\`);
  return respuesta.json();
}

// Eliminar
async function eliminarMateria(id) {
  const respuesta = await fetch(\`\${RUTA}/\${id}\`, { method: "DELETE" });
  if (!respuesta.ok) throw new Error(\`No se pudo eliminar (\${respuesta.status})\`);
  // Algunas APIs responden 204 sin cuerpo: no llames a respuesta.json() en ese caso
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">No repitas el mismo código: un archivo para la API</h3>
      <p className="my-4">
        Escribir fetch, la revisión de <code>ok</code> y las cabeceras en cada componente es repetitivo y propenso a errores.
        La buena práctica es concentrar todo en un archivo y que los componentes solo llamen funciones con nombres claros.
        Además, si la dirección de la API cambia, la cambias en un solo lugar.
      </p>
      <CodeFiddle
        language="javascript"
        title="src/api/cliente.js"
        code={`const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Un error propio que conserva el código HTTP
export class ErrorDeApi extends Error {
  constructor(mensaje, estado, detalle) {
    super(mensaje);
    this.name = "ErrorDeApi";
    this.estado = estado;
    this.detalle = detalle;   // lo que explicó el servidor, por ejemplo errores por campo
  }
}

async function solicitar(ruta, { metodo = "GET", cuerpo, signal } = {}) {
  const respuesta = await fetch(\`\${BASE_URL}\${ruta}\`, {
    method: metodo,
    headers: cuerpo ? { "Content-Type": "application/json" } : undefined,
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
    signal,
  });

  // 204: salió bien y no hay cuerpo
  const datos = respuesta.status === 204 ? null : await respuesta.json().catch(() => null);

  if (!respuesta.ok) {
    throw new ErrorDeApi(\`La petición falló (\${respuesta.status})\`, respuesta.status, datos);
  }
  return datos;
}

export const api = {
  listar: (recurso, signal) => solicitar(\`/\${recurso}\`, { signal }),
  obtener: (recurso, id, signal) => solicitar(\`/\${recurso}/\${id}\`, { signal }),
  crear: (recurso, cuerpo) => solicitar(\`/\${recurso}\`, { metodo: "POST", cuerpo }),
  actualizar: (recurso, id, cuerpo) => solicitar(\`/\${recurso}/\${id}\`, { metodo: "PUT", cuerpo }),
  eliminar: (recurso, id) => solicitar(\`/\${recurso}/\${id}\`, { metodo: "DELETE" }),
};`}
      />
      <CodeFiddle
        language="javascript"
        title="Cómo se usa desde un componente"
        code={`import { api } from "../api/cliente.js";

const materias = await api.listar("materias");
await api.crear("materias", { codigo: "SIS101", nombre: "Programación web", creditos: 3 });
await api.eliminar("materias", "7");`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cancelar una petición</h3>
      <p className="my-4">
        Si el usuario sale de la pantalla antes de que la respuesta llegue, no tiene sentido terminar el trabajo. Con{" "}
        <code>AbortController</code> creas una señal que le pasas a fetch; al llamar a <code>abort()</code> la petición se
        cancela y fetch lanza un error de tipo <code>AbortError</code>, que debes ignorar.
      </p>
      <CodeFiddle
        language="javascript"
        title="Cancelar con AbortController"
        code={`const controlador = new AbortController();

fetch("http://localhost:3001/materias", { signal: controlador.signal })
  .then((r) => r.json())
  .catch((error) => {
    if (error.name === "AbortError") return;   // se canceló a propósito: no es un error real
    console.error(error);
  });

controlador.abort();   // cancela`}
      />

      <CompareTable
        title="Resumen: errores de red frente a errores HTTP"
        headers={["Qué ocurrió", "¿fetch rechaza la promesa?", "Cómo lo detectas"]}
        rows={[
          ["No hay internet o el servidor está apagado", "Sí (TypeError)", "catch"],
          ["El servidor responde 404, 400 o 500", "No", "if (!respuesta.ok)"],
          ["La petición se canceló con abort()", "Sí (AbortError)", "catch, comparando error.name"],
          ["El cuerpo no es JSON válido", "Sí, al llamar a .json()", "catch"],
        ]}
      />

      <PracticeExercise
        title="Encuentra el fallo"
        prompt="Este código muestra 'Guardado' aunque el servidor responda 500: const r = await fetch(url, opciones); const datos = await r.json(); mostrar('Guardado'). ¿Qué falta?"
        hints={["fetch no rechaza por un 500", "Hay una propiedad de la respuesta que indica si el estado es exitoso"]}
        expectedKeywords={["ok", "respuesta.ok", "r.ok", "status"]}
        successMessage="Exacto: hay que comprobar r.ok y lanzar un error antes de mostrar el mensaje de éxito."
      />
    </section>
  );
}
