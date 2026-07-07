export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetivos de aprendizaje"}
      </h2>
      <p className="my-4">{"Al finalizar el proyecto, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Modelar"}</strong>
          {
            " el estado de una app en un array de objetos (`{ id, texto, completada }`) como fuente de verdad, "
          }
          <strong>{"distinguiendo"}</strong>
          {" modelo en memoria de vista en el DOM."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>
          {
            " el flujo CRUD mínimo (añadir, listar, marcar completada, eliminar) con formulario sin recarga (`preventDefault`) y función central `render()`."
          }
        </li>
        <li>
          <strong>{"Aplicar"}</strong>
          {
            " delegación de eventos en `#lista` para acciones por ítem sin acumular listeners en cada re-render."
          }
        </li>
        <li>
          <strong>{"Filtrar"}</strong>
          {" la vista entre Todas / Pendientes / Completadas "}
          <strong>{"sin borrar"}</strong>
          {" datos del array."}
        </li>
        <li>
          <strong>{"(Opcional) Persistir"}</strong>
          {
            " el array en `localStorage` con `JSON.stringify` / `JSON.parse` y manejo de errores."
          }
        </li>
        <li>
          <strong>{"Preparar"}</strong>
          {
            " funciones puras (`agregarTarea`, `eliminarPorId`) separadas de `render()` y `guardar()` para una futura sincronización con `fetch` (lección 12)."
          }
        </li>
      </ul>
    </section>
  );
}
