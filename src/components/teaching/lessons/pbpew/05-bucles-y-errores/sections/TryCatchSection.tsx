import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function TryCatchSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Manejo de errores con try, catch, finally y throw"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Bucles infinitos: reconocerlos y evitarlos"}</h3>
      <p className="my-4">
        {
          "Un bucle infinito ocurre cuando la condición nunca se vuelve falsa: olvidar incrementar el contador, condición siempre true. El parser no lo detecta — es un error de lógica, no de sintaxis."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Salida de emergencia con break"
        code={`// NO ejecutar en producción sin límite
let x = 0;
while (true) {
  if (x === 3) break; // salida de emergencia
  console.log(x);
  x++;
}`}
      />
      <p className="my-4">
        {
          "En producción, prefiere condiciones que cambien naturalmente o delega repetición periódica a setInterval y eventos (lecciones posteriores)."
        }
      </p>
      <Callout title="Caso real: checkout bloqueado">
        {
          "Un script calculaba precioFinal = total / cantidadCupones. Con cantidadCupones = 0 el motor falla o devuelve Infinity y el botón Pagar nunca se habilita. Solución: validar con if antes de dividir y/o try/catch para mostrar feedback al usuario."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores en tiempo de ejecución"}</h3>
      <p className="my-4">
        {
          "Errores en tiempo de ejecución (runtime): el código es sintácticamente válido pero falla al ejecutarse (dividir por cero, acceder a propiedad de null, variable no declarada). Sin manejo, el script se detiene en ese punto."
        }
      </p>
      <p className="my-4 font-semibold">{"Tipos habituales:"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Error"}</th>
            <th className="py-2 text-left font-semibold">{"Causa típica"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"SyntaxError"}</td>
            <td className="py-2">{"Código mal escrito; detectado al parsear"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"ReferenceError"}</td>
            <td className="py-2">{"Variable no definida"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"TypeError"}</td>
            <td className="py-2">{"Operación inválida para ese tipo (null.foo)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"RangeError"}</td>
            <td className="py-2">{"Valor fuera de rango"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">{"El objeto Error y sus subclases llevan .message y .name."}</p>
      <p className="my-4 font-semibold">{"Bloques:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"try { ... }"}</strong>{" — envuelve código que puede fallar."}
        </li>
        <li>
          <strong>{"catch (err) { ... }"}</strong>{" — se ejecuta si hay excepción; lee err.message o err.name."}
        </li>
        <li>
          <strong>{"finally { ... }"}</strong>{" — se ejecuta siempre (con o sin error); útil para limpieza o logging."}
        </li>
        <li>
          <strong>{"throw new Error(\"mensaje\")"}</strong>{" — lanza un error a propósito para validar reglas (división por cero, dato inválido)."}
        </li>
      </ul>
      <MermaidDiagram
        chart={`flowchart TD
  A[Entrar a try] --> B{¿Error en try?}
  B -->|Sí| C[catch: manejar err]
  B -->|No| D[Saltar catch]
  C --> E[finally]
  D --> E
  E --> F[Continuar después del bloque]`}
      />
      <CodeFiddle
        language="javascript"
        code={`function dividir(a, b) {
  if (b === 0) {
    throw new Error("División por cero");
  }
  return a / b;
}

try {
  console.log(dividir(4, 0));
} catch (err) {
  console.error("No se pudo dividir:", err.message);
} finally {
  console.log("Esto se ejecuta siempre");
}`}
      />
      <p className="my-4 font-semibold">{"Validación + throw"}</p>
      <p className="my-4">{"En lugar de fallar en silencio:"}</p>
      <CodeFiddle
        language="javascript"
        code={`function parseEdad(texto) {
  const n = Number(texto);
  if (Number.isNaN(n) || n < 0) {
    throw new Error("Edad inválida: " + texto);
  }
  return n;
}`}
      />
      <p className="my-4 font-semibold">{"Errores típicos (demostración controlada — no ejecutar sin comentar):"}</p>
      <CodeFiddle
        language="javascript"
        code={`// ReferenceError — variable no declarada
// console.log(noExiste);

// TypeError — operación inválida
// const n = null;
// n.toUpperCase();`}
      />
      <Callout title="Buenas prácticas en catch">
        {
          'Evita catch (e) {} vacío: oculta fallos y dificulta depuración. Al menos console.error(e.message) o un mensaje claro al usuario. Usa throw new Error(...) en lugar de throw "texto" para conservar stack trace.'
        }
      </Callout>
      <PracticeExercise
        prompt="Implementa dividir(a, b) con throw si b === 0 y llámala dentro de try/catch mostrando err.message en consola."
        hints={[
          "if (b === 0) throw new Error(...)",
          "try { dividir(4, 0); } catch (err) { console.error(err.message); }",
        ]}
        expectedKeywords={["throw", "try", "catch", "message"]}
        successMessage="Correcto. throw interrumpe el flujo; catch recupera el control y permite loguear o informar sin tumbar toda la UI."
      />
      <CodeChallenge
        title="Completa try/catch"
        template={"{{blank1}} {\n  risky();\n} catch (e) {\n  console.error(e.{{blank2}});\n}"}
        blanks={[
          { id: "blank1", answer: "try", placeholder: "bloque que puede fallar" },
          { id: "blank2", answer: "message", placeholder: "propiedad del error" },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué un catch vacío es mala práctica? ¿Qué harías en su lugar en una app web?"
        hints={["Depuración y soporte", "console.error o mensaje al usuario"]}
        expectedKeywords={["oculta", "depur", "mensaje", "error"]}
        successMessage="Correcto. Un catch vacío traga el error; mejor loguear err.message y mostrar feedback recuperable al usuario."
      />
    </section>
  );
}
