import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DeclaracionDeFuncionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Declaración de función en JavaScript"}
      </h2>
      <p className="my-4">
        {
          "Una función es un bloque de código con nombre (o referencia) que agrupa lógica reutilizable. Evita repetir el mismo código, facilita pruebas y hace el programa más legible."
        }
      </p>
      <p className="my-4">
        <strong>{"Declaración de función:"}</strong>{" el motor la registra antes de ejecutar el bloque (hoisting de la declaración completa). Puedes invocarla antes de su línea en el archivo."}
      </p>
      <p className="my-4">
        <strong>{"Invocar / llamar:"}</strong>{" ejecutar la función con `()` — `saludar(\"Patricia\")`. La expresión `saludar` sin paréntesis es solo la referencia a la función, no la ejecuta."}
      </p>
      <Callout title="Caso real: checkout con total undefined">
        {
          "Un desarrollador escribe function calcularTotal(precio, cantidad) { precio * cantidad; } y el carrito muestra Total: undefined. No hay error en consola — la función corre, pero no devuelve nada. Solución: return precio * cantidad; y usar el valor retornado en quien llama."
        }
      </Callout>
      <StepReveal
        title="Flujo de una llamada con return"
        steps={[
          {
            title: "1. Definición",
            content:
              "function sumar(a, b) { return a + b; } — a y b son parámetros (nombres en la definición).",
          },
          {
            title: "2. Invocación",
            content:
              "const r = sumar(2, 5); — se invoca con argumentos 2 y 5. Dentro de sumar, a vale 2 y b vale 5.",
          },
          {
            title: "3. Cuerpo ejecuta",
            content: "Se evalúa a + b → 7.",
          },
          {
            title: "4. return",
            content:
              "return envía 7 al llamador y termina la función en ese punto. Código después de return en la misma rama no se ejecuta.",
          },
          {
            title: "5. Valor en el llamador",
            content: "El resultado 7 se asigna a r.",
          },
        ]}
      />
      <p className="my-4">{"Sigue el valor desde la invocación hasta el llamador:"}</p>
      <MermaidDiagram
        chart={`flowchart LR
  A["sumar(2, 5)"] --> B["Entra a sumar\\na=2, b=5"]
  B --> C["return a + b"]
  C --> D["Resultado 7\\nal llamador"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`// Declaración — hoisting: puedes llamarla antes de esta línea en el archivo
function saludar(nombre) {
  return \`Hola, \${nombre}\`;
}
console.log(saludar("Patricia")); // "Hola, Patricia"`}
      />
      <CodeFiddle
        language="javascript"
        code={`function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 5)); // 7 — argumentos 2 y 5; a y b son parámetros`}
      />
      <p className="my-4">
        {
          "`return` devuelve un valor al código que llamó la función y termina la ejecución en ese punto. Si una función no tiene `return` o solo `return;`, devuelve `undefined`."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "No confundas return con console.log. console.log muestra en consola; no sustituye a return cuando otra parte del código necesita el valor. function doble(x) { x * 2; } devuelve undefined — hace falta return x * 2;"
          }
        </p>
      </ClayCard>
      <CodeFiddle
        language="javascript"
        code={`function avisar(mensaje) {
  console.log(mensaje);
  // sin return → undefined
}
console.log(avisar("Listo")); // imprime "Listo", retorno undefined`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Parámetros por defecto y alcance local"}</h3>
      <p className="my-4">
        {"Parámetros por defecto: si el argumento es `undefined` o falta, usa el valor por defecto."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`function crearSaludo(nombre = "invitado") {
  return \`Bienvenido, \${nombre}\`;
}
console.log(crearSaludo());        // "Bienvenido, invitado"
console.log(crearSaludo("Laura")); // "Bienvenido, Laura"`}
      />
      <p className="my-4">
        {"Alcance (scope) local: variables declaradas con `let`/`const` dentro de una función existen solo ahí."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`function contar() {
  let n = 0;
  n++;
  return n;
}
console.log(contar()); // 1
// console.log(n); // ReferenceError — n solo existe dentro de contar`}
      />
      <CodeChallenge
        title="Completa el código — área de rectángulo"
        template={`function areaRectangulo(base, altura) {
  return {{blank1}} * {{blank2}};
}
console.log(areaRectangulo(5, 4)); // debe imprimir 20`}
        blanks={[
          { id: "blank1", answer: "base", placeholder: "parámetro ancho" },
          { id: "blank2", answer: "altura", placeholder: "parámetro alto" },
        ]}
      />
      <PracticeExercise
        prompt="Explica la diferencia entre parámetro y argumento usando function resta(a, b) y la llamada resta(10, 3)."
        hints={["Parámetros = nombres en la definición", "Argumentos = valores concretos en la llamada"]}
        expectedKeywords={["parámetro", "argumento", "definición", "llamada"]}
        successMessage="Correcto. a y b son parámetros en la definición; 10 y 3 son argumentos en la llamada."
      />
    </section>
  );
}
