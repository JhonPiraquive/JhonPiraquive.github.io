import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque completa un fragmento de código de las páginas de la clase. Los huecos se rellenan con la palabra o la expresión que falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Arrays, JSON y objetos"}</h3>
      <CodeChallenge
        title="Completar el código — duplicar con map"
        template={`const numeros = [3, 5, 7];
const dobles = numeros.___((n) => n * 2);
console.log(dobles); // [6, 10, 14]`}
        blanks={[{ id: "blank1", answer: "map", placeholder: "método de transformación" }]}
      />
      <CodeChallenge
        title="Completar el código — parsear JSON"
        template={`const {{blank1}} = JSON.{{blank2}}('{"ok":true}');
console.log(obj.ok); // true`}
        blanks={[
          { id: "blank1", answer: "obj", placeholder: "nombre de variable" },
          { id: "blank2", answer: "parse", placeholder: "método JSON" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Ámbito, this y clases"}</h3>
      <CodeChallenge
        title="Completar el código: ámbito de bloque"
        template={`if (true) {
  {{blank1}} x = 10;
}
// console.log(x) → ReferenceError si usaste let/const`}
        blanks={[{ id: "blank1", answer: "let", placeholder: "let o const (no var)" }]}
      />
      <CodeChallenge
        title="Completar el código: clase Circulo"
        template={`class Circulo {
  constructor(radio) {
    this.radio = {{blank1}};
  }
  diametro() {
    return this.radio * {{blank2}};
  }
}

const c = new Circulo(5);
console.log(c.diametro()); // 10`}
        blanks={[
          { id: "blank1", answer: "radio", placeholder: "parámetro del constructor" },
          { id: "blank2", answer: "2", placeholder: "factor del diámetro" },
        ]}
      />
      <CodeChallenge
        title="Completar la subclase Cuadrado"
        template={`class Cuadrado extends {{blank1}} {
  constructor(lado) {
    {{blank2}}(lado, lado);
  }
}`}
        blanks={[
          { id: "blank1", answer: "Rectangulo", placeholder: "clase padre" },
          { id: "blank2", answer: "super", placeholder: "llamada al constructor padre" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Estructuras de datos"}</h3>
      <CodeChallenge
        title="Completar el Map — inventario"
        template={`const inventario = new Map();
inventario.{{blank1}}("manzana", 10);
inventario.{{blank2}}("pera", 5);

function stock(nombre) {
  return inventario.{{blank3}}(nombre) ?? 0;
}
console.log(stock("manzana")); // 10
console.log(stock("uva"));     // 0`}
        blanks={[
          { id: "blank1", answer: "set", placeholder: "método para guardar" },
          { id: "blank2", answer: "set", placeholder: "método para guardar" },
          { id: "blank3", answer: "get", placeholder: "método para leer" },
        ]}
      />
      <CodeChallenge
        title="Completar el Set — registrar visitas"
        template={`const vistos = new Set();

function registrar(id) {
  if (vistos.{{blank1}}(id)) return false;
  vistos.{{blank2}}(id);
  return true;
}

console.log(registrar(101)); // true
console.log(registrar(101)); // false`}
        blanks={[
          { id: "blank1", answer: "has", placeholder: "¿ya existe?" },
          { id: "blank2", answer: "add", placeholder: "añadir valor" },
        ]}
      />
      <CodeChallenge
        title="Completar la pila — historial de acciones"
        template={`const historial = [];
historial.{{blank1}}("borrador");
historial.{{blank2}}("guardado");
console.log(historial.{{blank3}}()); // "guardado"`}
        blanks={[
          { id: "blank1", answer: "push", placeholder: "apilar" },
          { id: "blank2", answer: "push", placeholder: "apilar" },
          { id: "blank3", answer: "pop", placeholder: "desapilar" },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"DOM y eventos"}</h3>
      <CodeChallenge
        title="Completar el selector"
        template={`const items = document.{{blank1}}(".item");
const app = document.{{blank2}}("#app");

if (app) {
  console.log(app.textContent);
}`}
        blanks={[
          { id: "blank1", answer: "querySelectorAll", placeholder: "todos los .item" },
          { id: "blank2", answer: "querySelector", placeholder: "primer #app" },
        ]}
      />
      <CodeChallenge
        title="Completar la creación de un ítem"
        template={`const lista = document.querySelector("#lista");
const li = document.{{blank1}}("li");
li.{{blank2}} = "Tarea nueva";
lista.{{blank3}}(li);`}
        blanks={[
          { id: "blank1", answer: "createElement", placeholder: "crear nodo" },
          { id: "blank2", answer: "textContent", placeholder: "asignar texto" },
          { id: "blank3", answer: "appendChild", placeholder: "insertar en padre" },
        ]}
      />
      <CodeChallenge
        title="Completar preventDefault"
        template={`form.addEventListener("submit", (e) => {
  e.{{blank1}}();
  console.log("OK");
});`}
        blanks={[{ id: "blank1", answer: "preventDefault", placeholder: "cancelar envío nativo" }]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Proyecto: piedra, papel o tijera"}</h3>
      <CodeChallenge
        title="Estado inicial del marcador"
        template={`const OPCIONES = ["piedra", "papel", "tijera"];

let marcador = {
  victorias: {{blank1}},
  empates: {{blank2}},
  derrotas: {{blank3}}
};`}
        blanks={[
          { id: "blank1", answer: "0", placeholder: "contador inicial" },
          { id: "blank2", answer: "0", placeholder: "contador inicial" },
          { id: "blank3", answer: "0", placeholder: "contador inicial" },
        ]}
      />
      <CodeChallenge
        title="Índice aleatorio seguro"
        template={`function obtenerEleccionCpu(opciones) {
  const indice = Math.{{blank1}}(Math.random() * opciones.{{blank2}});
  return opciones[indice];
}`}
        blanks={[
          { id: "blank1", answer: "floor", placeholder: "redondea hacia abajo" },
          { id: "blank2", answer: "length", placeholder: "tamaño del array" },
        ]}
      />
      <CodeChallenge
        title="Resultado tijera vs papel"
        template={`// determinarGanador("tijera", "papel") debe devolver:
const resultado = determinarGanador("tijera", "papel");
// resultado === "{{blank1}}"`}
        blanks={[{ id: "blank1", answer: "jugador", placeholder: "jugador | cpu | empate" }]}
      />
      <CodeChallenge
        title="Actualizar pantalla con textContent"
        template={`const elMarcador = document.querySelector("#marcador");
elMarcador.{{blank1}} = \`Victorias: \${marcador.victorias}\`;`}
        blanks={[{ id: "blank1", answer: "textContent", placeholder: "propiedad segura para texto" }]}
      />
      <CodeChallenge
        title="Delegación con data-choice"
        template={`contenedor.addEventListener("{{blank1}}", (evento) => {
  const boton = evento.target.closest("[data-choice]");
  if (!boton) return;
  const eleccion = boton.dataset.{{blank2}};
  jugarRonda(eleccion);
});`}
        blanks={[
          { id: "blank1", answer: "click", placeholder: "evento de ratón" },
          { id: "blank2", answer: "choice", placeholder: "atributo data-choice" },
        ]}
      />
      <CodeChallenge
        title="Orden del flujo de una ronda"
        template={`Ordena mentalmente:
1) {{blank1}}
2) CPU elige al azar
3) {{blank2}}
4) Se actualiza #marcador
5) Se muestra mensaje en #resultado`}
        blanks={[
          { id: "blank1", answer: "usuario hace clic", placeholder: "primer paso" },
          { id: "blank2", answer: "se compara jugador vs CPU", placeholder: "antes del marcador" },
        ]}
      />
    </section>
  );
}
