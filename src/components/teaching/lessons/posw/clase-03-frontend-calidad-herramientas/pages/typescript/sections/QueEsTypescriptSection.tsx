import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsTypescriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es TypeScript?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "TypeScript: superset tipado de JavaScript (Microsoft, código abierto)."
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
      <CompareTable title="De .ts a ejecución" headers={["Paso", "Qué ocurre"]} rows={[
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
        ].map((s) => [s.title, s.content])} />
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
    </section>
  );
}
