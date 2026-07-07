import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DondePonerElScriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Dónde poner el <script>?"}</h2>
      <p className="my-4">
        {
          "El navegador parsea HTML de arriba abajo. Un script sin defer ni async en el <head> bloquea el parseo hasta descargarlo y ejecutarlo; si el script usa el DOM antes de que exista, falla."
        }
      </p>
      <p className="my-4 font-semibold">{"Patrones recomendados:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Al final del <body> (clásico): cuando el script se ejecuta, el DOM ya está construido; no necesita defer para acceder a elementos del body."
          }
        </li>
        <li>
          {
            "defer en <head>: descarga el script en paralelo mientras parsea HTML; ejecuta el script después de parsear todo el documento, en orden de aparición. Recomendado para JS externo que manipula DOM."
          }
        </li>
        <li>
          {
            "async: descarga en paralelo y ejecuta en cuanto termina la descarga, sin esperar al parseo completo ni garantizar orden entre varios scripts async. Útil para analytics o widgets independientes del DOM inicial."
          }
        </li>
      </ul>
      <CompareTable
        headers={["Estrategia", "¿Bloquea parseo?", "¿Espera al DOM?", "Orden entre scripts"]}
        rows={[
          ["Head sin atributos", "Sí", "No", "Sí"],
          ["defer", "No (descarga paralela)", "Sí", "Sí"],
          ["async", "No", "No", "No garantizado"],
          ["Final del body", "Solo al llegar ahí", "Sí", "Sí"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  subgraph malo [Head sin defer — riesgo]
    H1[Parsea head] --> H2[Descarga y ejecuta JS]
    H2 --> H3[DOM incompleto — getElementById puede fallar]
    H3 --> H4[Continúa parseo body]
  end
  subgraph bueno1 [Head con defer]
    D1[Parsea HTML completo] --> D2[Ejecuta JS defer]
    D2 --> D3[DOM listo]
  end
  subgraph bueno2 [Final del body]
    B1[Parsea todo el body] --> B2[Ejecuta script inline/externo]
    B2 --> B3[DOM listo]
  end`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Script al final del body"}</h3>
      <CodeFiddle
        language="html"
        code={`<body>
  <p id="msg">Hola</p>
  <script>
    console.log("Script al final del body");
    document.getElementById("msg").textContent = "Hola desde JS";
  </script>
</body>`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparación defer vs async"}</h3>
      <CodeFiddle
        language="html"
        code={`<!-- defer: espera al DOM, orden preservado -->
<script src="a.js" defer></script>
<script src="b.js" defer></script>

<!-- async: ejecuta en cuanto descarga; orden no garantizado -->
<script src="analytics.js" async></script>`}
      />
      <Callout title="Caso real: landing corporativa">
        {
          "Un desarrollador coloca <script src=\"main.js\"></script> en el <head> sin defer. main.js hace document.querySelector(\"#cta\").addEventListener(...). El botón CTA no responde y la consola muestra error de null. Solución: mover el script al final del <body> o añadir defer."
        }
      </Callout>
      <StepReveal
        title="Flujo: desde HTML hasta consola"
        steps={[
          {
            title: "1. Escribes HTML + script",
            content:
              "Incluyes <script> inline o <script src=\"...\"> en tu documento HTML.",
          },
          {
            title: "2. Navegador parsea",
            content:
              "El parser construye el DOM de arriba abajo. Con defer, la descarga del .js ocurre en paralelo.",
          },
          {
            title: "3. Motor ejecuta JS",
            content:
              "Tras el parseo (o al llegar al script sin defer), el motor JavaScript ejecuta el código.",
          },
          {
            title: "4. console.log envía salida",
            content:
              "Los métodos de consola envían mensajes al entorno de depuración, no al DOM visible.",
          },
          {
            title: "5. DevTools Console la muestra",
            content:
              "Abre F12 → Console para ver logs, warnings, errores y ejecutar JS ad hoc.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  A[Archivo HTML] --> B[Parser navegador]
  B --> C[DOM construido]
  D[script inline o src] --> E[Motor JavaScript]
  E --> F[console.log / DOM]
  F --> G[DevTools Console]
  C --> E`}
      />
      <PracticeExercise
        prompt="¿Por qué poner un script al final del <body> evita errores al acceder al DOM?"
        hints={["¿En qué orden parsea el navegador?", "¿Cuándo existen los nodos del body?"]}
        expectedKeywords={["parse", "dom", "construido", "existe"]}
        successMessage="Correcto. Al final del body el HTML ya fue parseado y los nodos existen cuando corre el script."
      />
      <CodeChallenge
        title="Completa el HTML — script externo con defer"
        template={'<script {{blank1}}="js/main.js" {{blank2}}></script>'}
        blanks={[
          { id: "blank1", answer: "src", placeholder: "atributo de ruta" },
          { id: "blank2", answer: "defer", placeholder: "atributo de carga" },
        ]}
      />
    </section>
  );
}
