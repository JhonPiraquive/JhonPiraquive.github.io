export function ClasicasVsAgilesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Clásicas y ágiles</h2>
      <p className="my-4">
        Los modelos de ciclo de vida se agrupan en dos familias. Elegir una no es un gusto estético: depende de
        si los requerimientos se pueden cerrar al inicio.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold"></th>
            <th className="py-2 pr-4 text-left font-semibold">Secuenciales (clásicas)</th>
            <th className="py-2 text-left font-semibold">Ágiles</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Cómo avanzan</td>
            <td className="py-2 pr-4">Fases en orden. La siguiente espera a que la anterior termine.</td>
            <td className="py-2">Iteraciones cortas. En cada una hay un poco de todas las fases.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Cuándo el producto se usa</td>
            <td className="py-2 pr-4">Cuando se recorrió todo el proyecto.</td>
            <td className="py-2">Al final de cada iteración hay un incremento usable.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Encaja si</td>
            <td className="py-2 pr-4">Los requerimientos están definidos y no van a cambiar.</td>
            <td className="py-2">Los requerimientos cambian o no se pueden cerrar al inicio.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">Dentro de las clásicas aparecen variantes que no son lo mismo que la cascada pura:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Desarrollo evolutivo.</strong> Entrelaza especificación, desarrollo y validación.
        </li>
        <li>
          <strong>Desarrollo formal.</strong> Parte de una especificación matemática y la transforma con métodos formales.
        </li>
        <li>
          <strong>Basado en reutilización.</strong> Integra componentes que ya existen, en lugar de construir todo desde cero (Senn, 1991).
        </li>
      </ul>
      <p className="my-4">
        El lenguaje de cada familia es distinto. En cascada hablas de actas, fases y entregables cerrados. En
        Scrum hablas de sprint, backlog e historia de usuario. Reconocer ese vocabulario es un resultado de
        aprendizaje del módulo. Scrum se trabaja en la clase 4; la cascada, con documentos, en la clase 3.
      </p>
    </section>
  );
}
