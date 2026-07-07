import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ModeloDatosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Modelo de datos"}</h2>
      <p className="my-4">{"Cada tarea es un objeto literal:"}</p>
      <CodeFiddle
        language="javascript"
        code={`{ id: 1, texto: "Estudiar DOM", completada: false }`}
      />
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Propiedad"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Tipo"}</th>
            <th className="py-2 text-left font-semibold">{"Rol"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-mono text-sm">{"id"}</td>
            <td className="py-2 pr-4">{"número"}</td>
            <td className="py-2">
              {"Identificador estable (`siguienteId++`, `Date.now()` o `crypto.randomUUID()`)"}
            </td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-mono text-sm">{"texto"}</td>
            <td className="py-2 pr-4">{"string"}</td>
            <td className="py-2">{"Entrada del usuario; mostrar siempre con `textContent`"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-sm">{"completada"}</td>
            <td className="py-2 pr-4">{"boolean"}</td>
            <td className="py-2">{"Estilos (`classList`) y filtros Pendientes / Completadas"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">{"Estado global mínimo:"}</p>
      <CodeFiddle
        language="javascript"
        code={`let tareas = [];
let filtroActivo = "todas"; // "todas" | "pendientes" | "completadas"
let siguienteId = 1;`}
      />
      <PracticeExercise
        prompt="¿Por qué conviene guardar las tareas en un array en lugar de leer solo lo que hay en el <ul>?"
        hints={["Piensa en filtrar, contar y persistir", "¿Qué pasa si sincronizas con una API?"]}
        expectedKeywords={["fuente", "verdad", "array", "filtrar", "persistir"]}
        successMessage="Correcto. El array modela el estado; facilita filtrar, contar, serializar y sincronizar con API."
      />
      <CodeChallenge
        title="eliminarPorId con filter"
        template={`const tareas = [{ id: 1, texto: "A", completada: false }];

function eliminarPorId(id) {
  return tareas.{{blank1}}(t => t.id !== id);
}

console.log(eliminarPorId(1)); // []`}
        blanks={[
          { id: "blank1", answer: "filter", placeholder: "método que devuelve nuevo array" },
        ]}
      />
    </section>
  );
}
