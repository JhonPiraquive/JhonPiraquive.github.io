import { Callout } from "@/components/teaching/Callout";

export function DescubrirRequerimientosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Fase 2 — Descubrir requerimientos</h2>
      <p className="my-4">
        Un requerimiento es una característica que el sistema debe incluir. No nace escrito. Hay que
        descubrirlo con los stakeholders: cualquier persona que tenga que ver con el sistema.
      </p>
      <p className="my-4">En las entrevistas vas a encontrar, casi siempre, alguna de estas situaciones:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>No saben qué quieren del sistema.</li>
        <li>No lo expresan con claridad.</li>
        <li>Piden algo fuera de alcance por el costo.</li>
        <li>Hablan solo desde su área.</li>
        <li>Dos personas piden cosas distintas para el mismo proceso.</li>
        <li>Aparece una idea nueva que sí vale como requerimiento.</li>
      </ul>
      <p className="my-4">
        El trabajo del analista es interpretar, no transcribir. El entregable de esta actividad es un documento
        con las preguntas y las respuestas, con detalle.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Reunión preliminar</h3>
      <p className="my-4">
        Antes de la entrevista formal hay una reunión para romper el hielo. Las preguntas de contexto libre, en
        tres tandas, sirven solo en ese primer encuentro (Kendall y Kendall, 2011). Después vienen reuniones de
        problemas, propuesta, negociación y especificación.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Tanda</th>
            <th className="py-2 text-left font-semibold">Para qué y un ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">El cliente y el beneficio</td>
            <td className="py-2">¿Quién está detrás del proyecto? ¿Quién usará el software? ¿Cuál es el beneficio económico? ¿Hay otra alternativa?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">El problema</td>
            <td className="py-2">¿Cómo sería un resultado correcto? ¿Con qué problema se enfrenta la solución? ¿Cómo es el entorno de uso? ¿Hay límites de rendimiento?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">La reunión misma</td>
            <td className="py-2">¿Es usted la persona indicada? ¿Sus respuestas son oficiales? ¿Falta alguien más a quien preguntar?</td>
          </tr>
        </tbody>
      </table>
      <Callout title="No te quedes en la primera reunión" variant="callout-warning">
        <p className="mb-0">
          Esas preguntas abren el contexto. No sustituyen la especificación de cada requerimiento. Si cierras el
          análisis con solo la reunión preliminar, el documento queda en buenas intenciones.
        </p>
      </Callout>
    </section>
  );
}
