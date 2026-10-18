export function CasosRealesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Casos reales: por qué importa el modelo"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Panel de soporte: tareas que «desaparecen» al cambiar de pestaña"}
      </h3>
      <p className="my-4">
        {
          "Un equipo construye tickets solo con `appendChild` y oculta filas con `display: none`. Al contar pendientes usan `querySelectorAll(\"li:not(.oculto)\")` y los totales no cuadran. Refactorizan con `tickets[]`, `render()` según filtro y un solo `fetch` al guardar."
        }
      </p>
      <p className="my-4">
        <strong>{"Decisión clave:"}</strong>
        {" el filtro es una vista, no un borrado."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"App de notas que pierde todo al refrescar"}
      </h3>
      <p className="my-4">
        {
          "Los usuarios pierden la lista porque solo existía en el DOM. El dev añade `localStorage` pero olvida `guardar()` tras eliminar — al recargar, la tarea «revive». Lección: persistir después de cada mutación (add, toggle, delete) o tras una función `commit()` central."
        }
      </p>
    </section>
  );
}
