export function TecnicaEntrevistasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Entrevistas abiertas y cerradas</h2>
      <p className="my-4">
        La entrevista se hace a los stakeholders, no al equipo de desarrollo. Las preguntas abiertas no traen
        opciones: la persona explica y aparecen matices. Las cerradas parten de opciones o de un dato concreto y
        sirven para arrancar. Lo habitual es combinarlas: cerrada para entrar, abierta para profundizar.
      </p>
      <p className="my-4">
        La entrevista muestra cómo interactúa la persona con el trabajo de hoy y qué le duele del sistema
        actual. No alcanza sola: nadie tiene toda la información. Se complementa con observación y con documentos
        que ya existan.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Grupos de preguntas</h3>
      <p className="my-4">Ordena la guía en cinco bloques. Así el acta no se vuelve un chat sin estructura.</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Bloque</th>
            <th className="py-2 text-left font-semibold">Pregunta guía</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Planteamiento</td>
            <td className="py-2">¿Cómo se llama la empresa y a qué se dedica? ¿Cómo funcionan hoy los procesos, quién los hace y cómo?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Problemática</td>
            <td className="py-2">¿Por qué quieren el sistema? ¿Qué información van a sistematizar? ¿A quién beneficia?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Peticiones</td>
            <td className="py-2">¿Qué datos se van a manejar? ¿Cómo quieren ver el sistema, en aspecto y en uso?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Objetivos</td>
            <td className="py-2">¿Qué se pretende al implementar el sistema? ¿Qué necesidades específicas debe cubrir?</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Restricciones</td>
            <td className="py-2">¿Hay software ya comprado? ¿Qué sistema operativo, hardware y servidor hay? ¿Qué tanto saben quienes lo van a usar?</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        El entregable es el documento de preguntas y respuestas. Con eso ya puedes redactar planteamiento,
        problemática, objetivos y restricciones: la base del levantamiento. La página siguiente lo hace con
        Logística SAS.
      </p>
    </section>
  );
}
