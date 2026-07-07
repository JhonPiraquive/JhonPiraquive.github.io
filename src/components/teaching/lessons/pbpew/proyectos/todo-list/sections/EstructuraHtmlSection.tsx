import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EstructuraHtmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"HTML del proyecto"}</h2>
      <p className="my-4">
        {"Estructura semántica mínima. El formulario captura Enter automáticamente vía `submit`."}
      </p>
      <CodeFiddle
        language="html"
        code={`<main id="app">
  <h1>Mis tareas</h1>
  <form id="form-tarea">
    <input id="input-tarea" type="text" placeholder="Nueva tarea" maxlength="120" required />
    <button type="submit">Agregar</button>
  </form>
  <nav id="filtros" aria-label="Filtrar tareas">
    <button type="button" data-filtro="todas" class="activo">Todas</button>
    <button type="button" data-filtro="pendientes">Pendientes</button>
    <button type="button" data-filtro="completadas">Completadas</button>
  </nav>
  <p id="resumen">0 pendientes · 0 completadas</p>
  <ul id="lista"></ul>
</main>`}
      />
    </section>
  );
}
