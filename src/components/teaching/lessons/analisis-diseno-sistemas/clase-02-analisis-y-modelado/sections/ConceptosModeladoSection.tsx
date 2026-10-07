import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ConceptosModeladoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Palabras del modelado</h2>
      <p className="my-4">
        Estas palabras se parecen y no son intercambiables. Apréndelas con el ejemplo del carro de carreras: se
        construye un modelo a escala, se prueba, y solo después se fabrica el carro real. En el modelo se pueden
        ignorar detalles, nunca lo que hace que funcione.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Término</th>
            <th className="py-2 text-left font-semibold">Significado en este módulo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Modelo</td>
            <td className="py-2">Representación de lo importante del sistema, para entenderlo y decidir.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Notación</td>
            <td className="py-2">El lenguaje de los dibujos. En este módulo, UML.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Abstracción</td>
            <td className="py-2">Quedarse con la idea y soltar el detalle que no cambia la decisión. Un balón sigue siendo un balón aunque cambie el tamaño.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Clase</td>
            <td className="py-2">Plantilla. La clase Animal tiene atributos (edad, peso) y métodos (caminar, comer).</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Objeto</td>
            <td className="py-2">Una entidad concreta del problema, con estado (valores) y comportamiento.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Instancia</td>
            <td className="py-2">El momento en que se crea un objeto a partir de la clase. De Persona salen Manuel, María, Gabriela.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Entidad</td>
            <td className="py-2">Cosa del mundo real con propiedades que la distinguen: persona, casa, automóvil.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Atributo</td>
            <td className="py-2">Característica de la clase. Ejemplo: teléfono.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Método</td>
            <td className="py-2">Operación que la clase sabe hacer. Ejemplo: registrarOrden.</td>
          </tr>
        </tbody>
      </table>
      <MermaidDiagram
        title="Clase, atributos y métodos"
        description="La caja UML separa el nombre, los datos y las operaciones"
        chart={`classDiagram
  class OrdenServicio {
    +numero : String
    +estado : String
    +registrar()
    +cambiarEstado()
  }`}
      />
      <Callout title="Clase no es objeto" variant="callout-warning">
        <p className="mb-0">
          OrdenServicio es la plantilla. La orden 1042, con estado «asignado» y dirección en el centro, es el
          objeto. Si escribes «la clase 1042», estás mezclando los dos niveles.
        </p>
      </Callout>
    </section>
  );
}
