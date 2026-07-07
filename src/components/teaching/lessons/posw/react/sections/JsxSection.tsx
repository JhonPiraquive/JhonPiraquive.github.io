import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function JsxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"JSX"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"JSX: sintaxis que mezcla HTML en JavaScript; compila a React.createElement."}</li>
        <li>{"className en lugar de class (palabra reservada en JS)."}</li>
        <li>{"Un elemento raíz por return (o Fragment <>...</>)."}</li>
        <li>{"Expresiones {}: insertar variables y llamadas a funciones."}</li>
        <li>{"Componentes con mayúscula: <TarjetaProducto /> vs <div />."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"JSX vs React.createElement"}</h3>
      <CodeFiddle
        language="javascript"
        title="JSX vs React.createElement"
        code={`// Sin JSX
const elemento = React.createElement(
  "div",
  { className: "tarjeta" },
  React.createElement("h2", null, "Laptop Pro 15"),
  React.createElement("p", { className: "precio" }, "$4.500.000")
);

// Con JSX
const elemento = (
  <div className="tarjeta">
    <h2>Laptop Pro 15</h2>
    <p className="precio">$4.500.000</p>
  </div>
);`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Reglas de JSX"}</h3>
      <CompareTable
        headers={["Regla", "HTML clásico", "JSX correcto"]}
        rows={[
          ["Clase CSS", 'class="tarjeta"', 'className="tarjeta"'],
          ["Atributo for", 'for="email"', 'htmlFor="email"'],
          ["Cerrar tags", "Opcional en algunos", "Obligatorio: <img />, <br />"],
          ["Componente custom", "N/A", "Nombre con mayúscula inicial"],
          ["JavaScript en template", "N/A", "Expresiones entre llaves {precio}"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt='Convierte este HTML a JSX válido: <div class="catalogo"><h2>Productos</h2><img src={url}></div>'
        hints={["className", "self-closing img", "llaves para url"]}
        expectedKeywords={["className", "img", "src"]}
        successMessage="Correcto. className reemplaza class; img debe ser self-closing con src en llaves."
      />
    </section>
  );
}
