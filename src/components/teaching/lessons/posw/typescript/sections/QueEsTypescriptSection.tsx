import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueEsTypescriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es TypeScript?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "TypeScript: superset tipado de JavaScript (Microsoft, open-source desde 2012)."
          }
        </li>
        <li>{"Regla de oro: todo JavaScript válido es TypeScript válido."}</li>
        <li>
          {
            "Compilación: código .ts → tsc → JavaScript puro → navegador o Node.js."
          }
        </li>
        <li>
          {
            "Beneficios inmediatos: IntelliSense, documentación viva, refactoring seguro."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Que Es Typescript"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Que Es Typescript))
    TypeScript superset tipado de JavaScript Microsoft open source desde 2012
    Regla de oro todo JavaScript válido es TypeScript válido
    Compilación código
    Beneficios inmediatos IntelliSense documentación viva refactoring seguro`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Flujo de compilación"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TD
  TS[Código TypeScript .ts] --> TSC[tsc compilador]
  TSC --> JS[JavaScript puro]
  JS --> RUN[Navegador / Node.js]
  TS --> IDE[Editor IntelliSense]
  IDE --> ERR[Errores en tiempo de desarrollo]`}
      />
      <StepReveal
        title="De .ts a ejecución"
        steps={[
          {
            title: "1. Escribes código .ts con tipos",
            content:
              "El editor muestra autocompletado y errores de tipo en tiempo real.",
          },
          {
            title: "2. tsc compila a JavaScript",
            content:
              "El compilador elimina anotaciones de tipo y genera archivos .js en outDir.",
          },
          {
            title: "3. Bundler o Node ejecuta el JS",
            content:
              "Vite, Webpack o Node.js corren el JavaScript resultante sin conocer los tipos.",
          },
          {
            title: "4. Errores de tipo nunca llegan a producción",
            content:
              "Si el compilador falla, el build se detiene antes del deploy.",
          },
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Instalación y compilación"
        code={`# Instalar TypeScript globalmente
npm install -g typescript

# Compilar un archivo
tsc mi-archivo.ts

# Inicializar proyecto TypeScript
tsc --init   # genera tsconfig.json

# Compilar en modo watch
tsc --watch`}
      />
      <CodeChallenge
        title="Ordena el flujo de desarrollo TypeScript"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}`}
        blanks={[
          {
            id: "blank1",
            answer: "escribes .ts con tipos",
            placeholder: "paso a",
          },
          {
            id: "blank2",
            answer: "el editor muestra error de tipo",
            placeholder: "paso b",
          },
          {
            id: "blank3",
            answer: "tsc genera JavaScript",
            placeholder: "paso c",
          },
          {
            id: "blank4",
            answer: "el bundler sirve al navegador",
            placeholder: "paso d",
          },
          {
            id: "blank5",
            answer: "ejecutas tests en Node",
            placeholder: "paso e",
          },
        ]}
      />
    </section>
  );
}
