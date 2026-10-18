import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque completa un fragmento de código de las páginas de la clase. Los huecos se rellenan con la palabra o la expresión que falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Asincronía: temporizadores, promesas y async/await"}</h3>
      <CodeChallenge
        title="Completar esperar y el encadenamiento"
        template={`function esperar(ms) {
  return new Promise((resolve) => {{blank1}}(resolve, ms));
}

esperar(500)
  .then(() => console.log("uno"))
  .then(() => esperar(500))
  .then(() => console.log({{blank2}}));`}
        blanks={[
          { id: "blank1", answer: "setTimeout", placeholder: "temporizador" },
          { id: "blank2", answer: '"dos"', placeholder: "segundo mensaje" },
        ]}
      />
      <CodeChallenge
        title="Completar la cadena fetch"
        template={`fetch("/api/user")
  .{{blank1}}(r => r.json())
  .{{blank2}}(user => console.log(user.nombre))
  .{{blank3}}(err => console.error(err));`}
        blanks={[
          { id: "blank1", answer: "then", placeholder: "primer paso" },
          { id: "blank2", answer: "then", placeholder: "segundo paso" },
          { id: "blank3", answer: "catch", placeholder: "errores" },
        ]}
      />
      <CodeChallenge
        title="Completar async y await"
        template={`{{blank1}} function leer() {
  try {
    const res = {{blank2}} fetch("/api");
    const data = await res.json();
  } catch (e) {
    console.error(e);
  }
}`}
        blanks={[
          { id: "blank1", answer: "async", placeholder: "palabra clave función" },
          { id: "blank2", answer: "await", placeholder: "esperar promesa" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"AJAX y la API fetch"}</h3>
      <CodeChallenge
        title="Completar el código — GET con fetch"
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
      <CodeChallenge
        title="Completar el código — POST con JSON"
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
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Proyecto: calculadora interactiva"}</h3>
      <CodeChallenge
        title="Completar la inicialización del estado"
        template={`let operandoActual = "{{blank1}}";
let operandoAnterior = "{{blank2}}";
let operadorPendiente = {{blank3}};
let esperandoNuevoOperando = {{blank4}};`}
        blanks={[
          { id: "blank1", answer: "0", placeholder: "valor inicial en pantalla" },
          { id: "blank2", answer: '""', placeholder: "sin operando guardado" },
          { id: "blank3", answer: "null", placeholder: "sin operación pendiente" },
          { id: "blank4", answer: "false", placeholder: "aún no esperamos nuevo dígito" },
        ]}
      />
      <CodeChallenge
        title="Completar las ramas del switch en calcular"
        template={`function calcular(a, operador, b) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return { ok: false, mensaje: "Error" };
  }
  if (operador === "/" && y === 0) {
    return { ok: false, mensaje: "División por cero" };
  }
  let resultado;
  switch (operador) {
    case "+":
      resultado = x {{blank1}} y;
      break;
    case "-":
      resultado = x {{blank2}} y;
      break;
    case "*":
      resultado = x {{blank3}} y;
      break;
    case "/":
      resultado = x {{blank4}} y;
      break;
    default:
      return { ok: false, mensaje: "Error" };
  }
  return { ok: true, valor: resultado };
}`}
        blanks={[
          { id: "blank1", answer: "+", placeholder: "suma" },
          { id: "blank2", answer: "-", placeholder: "resta" },
          { id: "blank3", answer: "*", placeholder: "multiplicación" },
          { id: "blank4", answer: "/", placeholder: "división" },
        ]}
      />
      <CodeChallenge
        title="Completar el listener con delegación"
        template={`const teclado = document.querySelector(".teclado");
teclado.addEventListener("{{blank1}}", (event) => {
  const boton = event.target.{{blank2}}("button");
  if (!boton) return;
  const accion = boton.dataset.{{blank3}};
  if (accion === "digit") manejarDigito(boton.dataset.value);
});`}
        blanks={[
          { id: "blank1", answer: "click", placeholder: "evento de ratón" },
          { id: "blank2", answer: "closest", placeholder: "sube al botón padre" },
          { id: "blank3", answer: "action", placeholder: "atributo data-action" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Proyecto: lista de tareas"}</h3>
      <CodeChallenge
        title="eliminarPorId con filter"
        template={`const tareas = [{ id: 1, texto: "A", completada: false }];

function eliminarPorId(id) {
  return tareas.{{blank1}}(t => t.id !== id);
}

console.log(eliminarPorId(1)); // []`}
        blanks={[
          { id: "blank1", answer: "filter", placeholder: "método que devuelve nuevo array" },
        ]}
      />
      <CodeChallenge
        title="Completar preventDefault"
        template={`form.addEventListener("submit", (e) => {
  e.{{blank1}}();
  agregarTarea(input.value);
});`}
        blanks={[{ id: "blank1", answer: "preventDefault", placeholder: "evita recarga" }]}
      />
      <CodeChallenge
        title="Completar JSON.stringify"
        template={`localStorage.setItem("tareas", JSON.{{blank1}}(tareas));`}
        blanks={[{ id: "blank1", answer: "stringify", placeholder: "serializar array" }]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Proyecto: ajedrez en el navegador"}</h3>
      <CodeChallenge
        title="Colocar los reyes en la matriz"
        template={`const tablero = Array.from({ length: 8 }, () => Array(8).fill(null));
tablero[{{blank1}}][4] = "wK";
tablero[{{blank2}}][4] = "bK";`}
        blanks={[
          { id: "blank1", answer: "7", placeholder: "fila rey blanco" },
          { id: "blank2", answer: "0", placeholder: "fila rey negro" },
        ]}
      />
      <CodeChallenge
        title="Completar el alternado de turno"
        template={`estado.turno = estado.turno === "w" ? {{blank1}} : {{blank2}};`}
        blanks={[
          { id: "blank1", answer: '"b"', placeholder: "turno negro" },
          { id: "blank2", answer: '"w"', placeholder: "turno blanco" },
        ]}
      />
      <CodeChallenge
        title="Validación del rey"
        template={`if (tipo === "K") return df <= {{blank1}} && dc <= {{blank2}};`}
        blanks={[
          { id: "blank1", answer: "1", placeholder: "máx filas" },
          { id: "blank2", answer: "1", placeholder: "máx columnas" },
        ]}
      />
    </section>
  );
}
