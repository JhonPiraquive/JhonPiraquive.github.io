import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function NotacionYRelacionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Notación y relaciones</h2>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Símbolo</th>
            <th className="py-2 text-left font-semibold">Significado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Persona (actor)</td>
            <td className="py-2">Quien participa. En el diagrama de este sitio lo verás como un nodo con el nombre del rol.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Elipse</td>
            <td className="py-2">El caso de uso: la acción.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Línea actor–caso</td>
            <td className="py-2">Asociación: el actor interviene, aporta datos o recibe un resultado. Puede ser de ida o de vuelta; no hace falta etiquetarla.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">include</td>
            <td className="py-2">El caso A siempre incorpora el caso C. Se dibuja de A hacia C.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">extend</td>
            <td className="py-2">El caso B es un comportamiento opcional que añade algo a A. La flecha va de B hacia A.</td>
          </tr>
        </tbody>
      </table>
      <MermaidDiagram
        title="include y extend"
        description="Registrar orden siempre valida al cliente. Modificar datos del cliente solo ocurre si están mal."
        chart={`flowchart TB
  Reg([Registrar orden]) -->|include| Val([Validar cliente])
  Mod([Corregir datos del cliente]) -->|extend| Reg`}
      />
      <p className="my-4">
        include evita copiar el mismo paso en varios casos. Si registrar orden y hacer seguimiento piden sesión
        iniciada, «iniciar sesión» puede ser un caso incluido. extend no es obligatorio: corregir los datos del
        cliente solo aparece cuando la información está mal, que en la plantilla es el flujo alterno.
      </p>
      <p className="my-4">
        Para dibujar puedes usar una herramienta sencilla como UMLet o un editor de UML en línea. El criterio de
        esta clase no es la herramienta: es que el diagrama tenga actor, caso y la relación correcta.
      </p>
    </section>
  );
}
