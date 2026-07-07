import { Callout } from "@/components/teaching/Callout";
import { TodoListDemo } from "@/components/teaching/TodoListDemo";

export function TodoListDemoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Demo interactiva: prueba la app antes de codificar"}
      </h2>
      <p className="my-4">
        {
          "Explora una réplica funcional embebida. Observa cómo cada acción muta el estado interno y vuelve a pintar la lista."
        }
      </p>
      <p className="my-4 font-semibold">{"Qué debes probar:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Escribir una tarea y pulsar Agregar (formulario sin recarga)."}</li>
        <li>{"Clic en el texto para marcar completada (feedback visual)."}</li>
        <li>{"Botón × para eliminar (delegación)."}</li>
        <li>{"Pestañas Todas / Pendientes / Completadas y contadores."}</li>
        <li>{"Mensaje vacío contextual al filtrar sin resultados."}</li>
        <li>
          <em>{"(Opcional)"}</em>
          {" Activar «Persistir en localStorage» o «Simular recarga» para ver recuperación de datos."}
        </li>
      </ol>
      <TodoListDemo
        title="Lista de tareas PBPEW"
        storageKey="pbpew-tareas-demo"
        showPersistenceToggle
        showSimulateReload
        emptyMessages={{
          todas: "No hay tareas. ¡Agrega la primera!",
          pendientes: "No hay pendientes.",
          completadas: "No hay tareas completadas aún.",
        }}
      />
      <Callout title="Cómo usar la demo">
        {
          "Cada clic sigue el patrón: mutar el array → render() → (opcional) guardar(). Antes de escribir tu código, predice qué función se ejecuta en cada acción."
        }
      </Callout>
    </section>
  );
}
