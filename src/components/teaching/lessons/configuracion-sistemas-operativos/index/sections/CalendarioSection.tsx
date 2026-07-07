import { CompareTable } from "@/components/teaching/CompareTable";

export function CalendarioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Calendario del curso (3 × 2 h)"}</h2>
      <CompareTable
        headers={["Clase", "Tema", "Duración", "Slug"]}
        rows={[
          ["1", "Arquitectura del computador: chasis, CPU, memoria, buses", "2 h", "clase-01-arquitectura-computador"],
          ["2", "Almacenamiento, periféricos e inventario de hardware", "2 h", "clase-02-dispositivos-almacenamiento"],
          ["3", "Sistemas operativos: instalación, consola y administración", "2 h", "clase-03-sistemas-operativos"],
        ]}
      />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {"Cada lección incluye bloques sugeridos de 15–20 minutos para facilitar la planificación en aula."}
      </p>
    </section>
  );
}
