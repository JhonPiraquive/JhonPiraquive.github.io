import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsElDomSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es el DOM?"}</h2>
      <p className="my-4">
        {
          "Cuando el navegador lee un documento HTML, construye una representación en memoria: el Document Object Model (DOM). Es un árbol de nodos: documento, elementos (<p>, <div>), texto, atributos, etc."
        }
      </p>
      <p className="my-4">
        {
          "JavaScript puede recorrer y modificar ese árbol: crear nodos, cambiar texto, estilos o escuchar eventos. No confundas el DOM con el código fuente HTML en disco: el archivo .html es estático; el DOM es la copia viva en memoria que puede cambiar sin volver a pedir el archivo al servidor."
        }
      </p>
      <p className="my-4">
        {
          "El objeto global document es la entrada al DOM en el navegador (por ejemplo, document.documentElement apunta al nodo <html>)."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  doc[document]
  html[html]
  head[head]
  body[body]
  doc --> html
  html --> head
  html --> body
  body --> h1["h1 — Texto del título"]
  body --> p["p — párrafo"]`}
      />
      <MermaidDiagram
        chart={`flowchart LR
  A[Archivo HTML] --> B[Parser del navegador]
  B --> C[Árbol DOM en memoria]
  C --> D[Renderizado visual]
  E[Archivo .js] --> F[Motor JavaScript]
  F --> G[Lee y modifica DOM via document]
  G --> D`}
      />
      <CodeFiddle
        language="javascript"
        code={`// Ejecutar en DevTools → Console con cualquier página abierta
console.log(document.documentElement.tagName); // "HTML"
console.log(document.body.children.length);     // nº de hijos directos de body`}
      />
      <Callout title="Caso real: cambio en HTML que no se refleja">
        {
          "Un practicante edita el texto de un <h1> en el archivo HTML del repositorio, pero en el navegador sigue viendo el título antiguo. La aplicación es una SPA: el título se genera con JavaScript al cargar. DevTools → Elements muestra el árbol vivo, no solo el archivo fuente."
        }
      </Callout>
      <CodeChallenge
        title="Completa el código — entrada al DOM"
        template={'console.{{blank1}}("El tag raíz es:", document.documentElement.{{blank2}});'}
        blanks={[
          { id: "blank1", answer: "log", placeholder: "método de consola" },
          { id: "blank2", answer: "tagName", placeholder: "propiedad del elemento" },
        ]}
      />
    </section>
  );
}
