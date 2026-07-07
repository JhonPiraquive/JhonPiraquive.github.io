import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function TemplateLiteralsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Template literals"}</h2>
      <p className="my-4">
        {
          "Las template literals usan backticks `` ` `` y permiten interpolar expresiones con `${expresion}` y saltos de línea sin concatenar con `+`. Muy útiles para mensajes de log, UI y URLs con parámetros."
        }
      </p>
      <p className="my-4">
        <strong>{"Error típico:"}</strong>
        {" `'Hola ${nombre}'` no interpola — hacen falta backticks."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const nombre = "Diana";
const saludo = \`Hola \${nombre}, bienvenida a PBPEW\`;

const multilinea = \`
Línea 1
Línea 2
\`;

console.log(saludo);
console.log(multilinea);`}
      />
      <CodeFiddle
        language="javascript"
        code={`const nombre = "Luis";
const puntos = 120;
const mensaje = \`Usuario \${nombre} tiene \${puntos} puntos\`;
console.log(mensaje);`}
      />
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Código (call stack)
  participant W as Web API
  participant Q as Cola de tareas
  C->>W: setTimeout(fn, 1000)
  C->>C: sigue código sincrónico
  W->>Q: fn lista tras 1 s
  Q->>C: event loop ejecuta fn`}
      />
      <PracticeExercise
        prompt="Crea const mensaje = `Usuario ${nombre} tiene ${puntos} puntos` con nombre y puntos dados e imprímela. ¿Por qué no funciona con comillas simples?"
        hints={["Interpolación solo con backticks", "${} dentro de backticks"]}
        expectedKeywords={["backtick", "${", "interpol"]}
        successMessage="Correcto. Solo los template literals con backticks evalúan ${expresion}; comillas simples tratan ${} como texto literal."
      />
    </section>
  );
}
