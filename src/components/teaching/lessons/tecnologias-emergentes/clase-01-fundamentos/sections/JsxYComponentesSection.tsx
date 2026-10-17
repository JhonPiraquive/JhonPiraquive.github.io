import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function JsxYComponentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">JSX, componentes y props</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué es un componente</h3>
      <p className="my-4">
        Un componente es una pieza reutilizable de la pantalla: un botón, una tarjeta, un menú, una página completa.
        Funciona como las piezas de Lego: cada una es pequeña y tiene una función clara, y al combinarlas se arman
        pantallas grandes. Si una pieza cambia, cambia en todos los lugares donde se usó.
      </p>
      <p className="my-4">
        En React un componente es simplemente <strong>una función que devuelve JSX</strong>, y su nombre empieza con
        mayúscula.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué es JSX</h3>
      <p className="my-4">
        JSX es una forma de escribir algo que parece HTML dentro de JavaScript. No es HTML de verdad: Vite lo traduce a
        llamadas de JavaScript antes de que llegue al navegador. La ventaja es poder describir cómo se ve la pantalla
        con una sintaxis familiar.
      </p>
      <CodeFiddle
        language="jsx"
        title="Un componente mínimo"
        code={`function Saludo() {
  const nombre = "Ana";
  return <h2>Hola, {nombre}</h2>;
}
// Las llaves { } dentro de JSX abren una ventana a JavaScript:
// ahí cabe cualquier expresión (variables, cálculos, llamadas a funciones).`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las reglas de JSX</h3>
      <CompareTable
        headers={["Regla", "Incorrecto", "Correcto"]}
        rows={[
          ["Un solo elemento raíz (o un fragmento vacío)", "<h1>A</h1><p>B</p>", "<><h1>A</h1><p>B</p></>"],
          ["class se escribe className", "<div class=\"caja\">", "<div className=\"caja\">"],
          ["Todas las etiquetas se cierran", "<img src=\"a.png\">", "<img src=\"a.png\" />"],
          ["Atributos en camelCase", "onclick, tabindex", "onClick, tabIndex"],
          ["Estilos en línea como objeto", "style=\"color: red\"", "style={{ color: \"red\" }}"],
          ["Un 'for' de label se escribe htmlFor", "<label for=\"x\">", "<label htmlFor=\"x\">"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Props: los datos que recibe un componente</h3>
      <p className="my-4">
        Un componente que siempre muestra lo mismo sirve de poco. Las <strong>props</strong> (de «propiedades») son los
        datos que se le pasan desde afuera, igual que los parámetros de una función. Se escriben como atributos al usar
        el componente y se reciben como un objeto, que casi siempre se desestructura en el parámetro.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/components/Etiqueta.jsx"
        code={`export default function Etiqueta({ texto, color = "gray" }) {
  return <span style={{ color }}>{texto}</span>;
}`}
      />
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`import Etiqueta from "./components/Etiqueta.jsx";

export default function App() {
  return (
    <main>
      <Etiqueta texto="Nuevo" color="green" />
      <Etiqueta texto="Agotado" color="red" />
      <Etiqueta texto="Sin color definido" />   {/* usa el color por defecto: gray */}
    </main>
  );
}`}
      />
      <MermaidDiagram
        title="Los datos viajan de arriba hacia abajo"
        description="Diagrama donde App pasa props a Etiqueta, y Etiqueta las usa para dibujar."
        chart={`flowchart TD
  A["App<br/>tiene los datos"] -->|"texto, color"| B["Etiqueta<br/>los recibe y los dibuja"]`}
      />
      <Callout title="Reglas de oro de las props" variant="callout-warning">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Las props son de solo lectura: un componente nunca debe cambiar las que recibe.</li>
          <li>Los datos fluyen en una dirección: del componente padre al hijo.</li>
          <li>Los valores que no son texto van entre llaves: <code>{"precio={8500}"}</code>, <code>{"agotado={true}"}</code>. El texto fijo va entre comillas.</li>
          <li>En las versiones actuales de React, los valores por defecto se escriben como parámetros por defecto (<code>color = &quot;gray&quot;</code>); la propiedad <code>defaultProps</code> ya no funciona en componentes de función.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">children: el contenido que va adentro</h3>
      <CodeFiddle
        language="jsx"
        title="Un componente contenedor"
        code={`export default function Caja({ titulo, children }) {
  return (
    <section className="caja">
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}

// Uso:
// <Caja titulo="Hoy">
//   <p>Lo que se escriba aquí llega como children.</p>
// </Caja>`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una regla de organización</h3>
      <p className="my-4">
        Un componente por archivo, y el archivo se llama igual que el componente (<code>TarjetaProducto.jsx</code>).
        Cuando un archivo crece o una parte de la pantalla se repite, se separa en un componente nuevo. Es la costumbre
        que más ordena un proyecto.
      </p>

    </section>
  );
}
