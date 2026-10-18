import { CodeFiddle } from "@/components/teaching/CodeFiddle";
export function FiltrosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Filtros de vista"}</h2>
      <p className="my-4">
        {
          "La variable `filtroActivo` controla qué subset muestra `render()`. Los datos en el array no se borran al filtrar."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const filtros = document.querySelector("#filtros");

filtros.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filtro]");
  if (!btn) return;
  filtroActivo = btn.dataset.filtro;
  filtros.querySelectorAll("button").forEach((b) => b.classList.remove("activo"));
  btn.classList.add("activo");
  render();
});`}
      />
      <p className="my-4">
        {
          "Implementa mensajes vacíos por filtro, por ejemplo: «No hay pendientes» cuando `tareasVisibles().length === 0`."
        }
      </p>
    </section>
  );
}
