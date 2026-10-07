import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EventosScrumSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Eventos</h2>
      <p className="my-4">
        Un sprint es una iteración de 1 a 4 semanas. Dentro hay cuatro reuniones con propósito fijo. No son
        comités eternos.
      </p>
      <MermaidDiagram
        title="Ciclo de un sprint"
        description="La planificación abre, la revisión y la retrospectiva cierran, y el diario ocurre en el medio"
        chart={`flowchart LR
  PB[Product backlog] --> Plan[Sprint planning]
  Plan --> Sprint[Sprint]
  Sprint --> Daily[Daily scrum]
  Daily --> Sprint
  Sprint --> Rev[Sprint review]
  Rev --> Retro[Retrospectiva]
  Retro --> PB`}
      />
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Evento</th>
            <th className="py-2 text-left font-semibold">Cuándo y para qué</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Sprint planning</td>
            <td className="py-2">Al inicio. Se elige qué ítems del product backlog entran y cómo se van a lograr.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Daily scrum</td>
            <td className="py-2">Cada día. Tres preguntas: qué hice, qué me obstaculiza, qué haré antes de la próxima reunión.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Sprint review</td>
            <td className="py-2">Al cerrar. Se muestra qué quedó hecho. Pueden entrar el Product Owner y algunos usuarios.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Retrospectiva</td>
            <td className="py-2">Después de la revisión. El equipo dice qué mejorar en el siguiente sprint.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
