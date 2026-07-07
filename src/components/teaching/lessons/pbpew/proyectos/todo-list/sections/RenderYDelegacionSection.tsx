import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RenderYDelegacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"render(): la vista desde el array"}
      </h2>
      <p className="my-4">
        {
          "`render()` es el patrón central: vacía el contenedor, recorre las tareas visibles y crea nodos con `createElement` + `textContent`. Evita duplicar lógica en cada acción."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`function tareasVisibles() {
  if (filtroActivo === "pendientes") return tareas.filter((t) => !t.completada);
  if (filtroActivo === "completadas") return tareas.filter((t) => t.completada);
  return tareas;
}

function actualizarResumen() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  const completadas = tareas.filter((t) => t.completada).length;
  resumen.textContent = \`\${pendientes} pendientes · \${completadas} completadas\`;
}

function render() {
  lista.replaceChildren();
  tareasVisibles().forEach((tarea) => {
    const li = document.createElement("li");
    li.dataset.id = String(tarea.id);
    if (tarea.completada) li.classList.add("completada");

    const texto = document.createElement("span");
    texto.className = "texto";
    texto.textContent = tarea.texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "eliminar";
    btnEliminar.setAttribute("aria-label", "Eliminar tarea");
    btnEliminar.textContent = "×";

    li.append(texto, btnEliminar);
    lista.appendChild(li);
  });
  actualizarResumen();
}`}
      />
      <Callout title="Seguridad">
        {
          "Nunca uses innerHTML con el texto que escribe el usuario. textContent no interpreta HTML y reduce riesgo XSS."
        }
      </Callout>
      <p className="my-4">
        <strong>{"Delegación de eventos"}</strong>
        {" — un solo listener en `#lista` para eliminar y marcar completada:"}
      </p>
      <CodeFiddle
        language="javascript"
        code={`lista.addEventListener("click", (e) => {
  const btn = e.target.closest("button.eliminar");
  if (btn) {
    const id = Number(btn.closest("li").dataset.id);
    tareas = tareas.filter((t) => t.id !== id);
    render();
    guardar();
    return;
  }

  const texto = e.target.closest("span.texto");
  if (texto) {
    const id = Number(texto.closest("li").dataset.id);
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      render();
      guardar();
    }
  }
});`}
      />
      <Callout title="Error frecuente — listeners duplicados">
        {
          "Si enlazas click en cada <li> dentro de render() sin limpiar, acumulas listeners. Preferir un listener delegado en el contenedor padre."
        }
      </Callout>
      <PracticeExercise
        prompt="Escribe toggleCompletada(id) que invierta completada en el objeto correcto dentro de tareas y llame a render(). Pega tu función o descríbela."
        hints={["tareas.find(t => t.id === id)", "tarea.completada = !tarea.completada", "render() al final"]}
        expectedKeywords={["find", "completada", "render"]}
        successMessage="Bien. Mutación controlada en el array + re-pintado completo."
      />
    </section>
  );
}
