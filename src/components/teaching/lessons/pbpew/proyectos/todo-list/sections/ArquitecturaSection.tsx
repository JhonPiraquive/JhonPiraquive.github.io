import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ArquitecturaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Arquitectura: datos, lógica y vista"}
      </h2>
      <p className="my-4">{"Separa tres capas en tu mente (y en el código):"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Datos:"}</strong>
          {" estado en memoria — `tareas[]`, `filtroActivo`, `siguienteId`."}
        </li>
        <li>
          <strong>{"Lógica:"}</strong>
          {" mutar datos, decidir qué mostrar — `agregarTarea`, `eliminarPorId`, `tareasVisibles`, `render`."}
        </li>
        <li>
          <strong>{"Vista:"}</strong>
          {" HTML que el usuario ve — `#form-tarea`, `#lista`, `#filtros`, `#resumen`."}
        </li>
      </ul>
      <CompareTable
        headers={["Criterio", "Solo DOM (appendChild)", "Array + render()"]}
        rows={[
          ["Filtrar", "Frágil (ocultar nodos)", ".filter + re-pintar"],
          ["Persistir", "Difícil de serializar", "JSON.stringify(tareas)"],
          ["Eliminar por id", "Índices inconsistentes", ".filter(t => t.id !== id)"],
          ["Patrón PBPEW", "Evitar como única fuente", "Preferido"],
        ]}
      />
      <StepReveal
        title="Ciclo de una acción (agregar tarea)"
        steps={[
          { title: "1. Usuario envía formulario", content: "Enter o clic en Agregar dispara submit." },
          { title: "2. preventDefault", content: "Evitas la recarga de la página." },
          {
            title: "3. Mutar array",
            content: "push con { id, texto, completada: false } tras validar trim().",
          },
          {
            title: "4. render()",
            content: "Vaciar #lista y crear nodos con createElement + textContent.",
          },
          {
            title: "5. guardar() (opcional)",
            content: "localStorage.setItem con JSON.stringify.",
          },
          { title: "6. DOM actualizado", content: "El usuario ve la lista sin recarga completa." },
        ]}
      />
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant F as Formulario
  participant JS as agregarTarea + render
  participant DOM as ul#lista
  participant LS as localStorage

  U->>F: Enter / clic Agregar
  F->>JS: submit (preventDefault)
  JS->>JS: push en tareas[]
  JS->>DOM: replaceChildren + createElement
  opt persistencia
    JS->>LS: JSON.stringify
  end`}
      />
    </section>
  );
}
