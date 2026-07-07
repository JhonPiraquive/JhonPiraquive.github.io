import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <p className="my-4">
        <strong>{"«Lista de tareas PBPEW»"}</strong>
        {" — implementación completa en un solo HTML + JS. Integra lecciones 01–12 en un mini-producto."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel base (obligatorio)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Estructura: `#form-tarea`, input, botón Agregar, `#lista`, `#resumen` con totales."}</li>
        <li>{"Array `tareas` con objetos `{ id, texto, completada }`."}</li>
        <li>{"`submit` con `preventDefault`; no aceptar texto vacío (`trim`)."}</li>
        <li>{"`render()` desde el array; `textContent` para el texto de la tarea."}</li>
        <li>{"Eliminar con delegación en `#lista` (botón `.eliminar` + `closest`)."}</li>
        <li>{"Toggle `completada` al clic en el texto; clase CSS `.completada` (tachado u opacidad)."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel intermedio"}</h3>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"Filtros Todas / Pendientes / Completadas sin borrar datos del array."}</li>
        <li>{"Resumen: `N pendientes · M completadas`."}</li>
        <li>{"Limpiar input y devolver foco tras agregar."}</li>
        <li>{"Estado vacío por filtro («No hay tareas completadas aún»)."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel avanzado (desafíos profundos)"}</h3>
      <ol className="my-4 list-decimal pl-6" start={11}>
        <li>
          {
            "Persistencia: `localStorage` con clave `pbpew-tareas`; cargar al inicio; `try/catch` en `parse`; recalcular `siguienteId`."
          }
        </li>
        <li>
          {
            "Editar en línea: doble clic en el texto abre `<input>`; Enter guarda, Escape cancela; validar no vacío."
          }
        </li>
        <li>
          {
            "Atajo de teclado: `Ctrl+Backspace` o botón «Limpiar completadas» → `tareas = tareas.filter(t => !t.completada)`."
          }
        </li>
        <li>{"Orden: añadir `creadaEn: Date.now()` y botón para ordenar pendientes por más recientes primero."}</li>
        <li>
          {
            "Preparación API: función `exportarJson()` con `console.log(JSON.stringify(tareas, null, 2))` simulando payload REST."
          }
        </li>
        <li>
          {
            "Accesibilidad mínima: `aria-label` en eliminar, `aria-pressed` o clase `activo` en el filtro seleccionado."
          }
        </li>
      </ol>
      <p className="my-4">
        <strong>{"Criterio de éxito:"}</strong>
        {
          " una sola fuente de verdad en el array; DOM siempre derivado de `render()`; formulario sin recarga; delegación para acciones por ítem; filtros funcionales; código listo para añadir `localStorage` o `fetch` sin reescribir todo."
        }
      </p>
      <PracticeExercise
        prompt="Reto integrador: implementa la Lista de tareas PBPEW (nivel base como mínimo). Usa este checklist: [ ] array como fuente de verdad [ ] preventDefault [ ] render() central [ ] delegación [ ] textContent [ ] filtros (intermedio) [ ] localStorage (avanzado). Describe qué nivel alcanzaste y un fragmento clave de tu código."
        hints={[
          "Empieza por HTML + agregarTarea + render vacío",
          "Añade delegación antes de filtros",
          "localStorage al final: guardar() tras cada mutación",
        ]}
        expectedKeywords={["render", "preventDefault", "filter", "deleg", "textContent"]}
        successMessage="Excelente. Has integrado arrays, DOM, eventos y (opcionalmente) persistencia en un producto completo."
        rows={10}
      />
    </section>
  );
}
